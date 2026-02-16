# =============================================================================
# Multi-stage Dockerfile for Next.js Static Export
# Serves static files via nginx (optimized for output: "export")
# =============================================================================

# -----------------------------------------------------------------------------
# Stage 1: Dependencies
# -----------------------------------------------------------------------------
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --ignore-scripts

# -----------------------------------------------------------------------------
# Stage 2: Builder
# -----------------------------------------------------------------------------
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

# -----------------------------------------------------------------------------
# Stage 3: Production (nginx serving static files)
# -----------------------------------------------------------------------------
FROM nginx:alpine AS runner

# Security: run as non-root
RUN addgroup -g 1001 -S nextjs && \
    adduser -S nextjs -u 1001 -G nextjs

# Copy static export output
COPY --from=builder /app/out /usr/share/nginx/html

# Custom nginx config for SPA routing
RUN cat > /etc/nginx/conf.d/default.conf << 'EOF'
server {
    listen 3000;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    # Security headers
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Cache static assets
    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Handle static files
    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }

    # Health check endpoint
    location /health {
        return 200 'OK';
        add_header Content-Type text/plain;
    }
}
EOF

# Fix permissions for nginx to run as non-root
RUN chown -R nextjs:nextjs /usr/share/nginx/html && \
    chown -R nextjs:nextjs /var/cache/nginx && \
    chown -R nextjs:nextjs /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown nextjs:nextjs /var/run/nginx.pid

USER nextjs

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
