# CASSANDRE'S BLACK BOOK - menezis-landing

## 2026-02-16 - [CVE-TRIFECTA: next@16.0.10]

**Evidence:** `npm audit` reports 3 HIGH severity vulnerabilities in `next@16.0.10`:
- GHSA-9g9p-9gw9-jx7f: DoS via Image Optimizer remotePatterns
- GHSA-h25m-26qc-wcjf: HTTP request deserialization DoS (RSC)
- GHSA-5f7q-jpqc-wp7h: Unbounded Memory Consumption via PPR Resume Endpoint

**Verdict:** Even though this is a static export site (no SSR, no API routes), the build toolchain itself is vulnerable. The Docker CI builds with this version. A supply-chain attack during build is the risk vector. Fix is trivial: `next@16.1.6`.

**Sentence:** IMMEDIATE UPDATE REQUIRED. `npm install next@16.1.6`

---

## 2026-02-16 - [MISSING-CSP: No Content-Security-Policy]

**Evidence:** Dockerfile nginx config (`/etc/nginx/conf.d/default.conf`) sets:
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- Referrer-Policy: strict-origin-when-cross-origin

But MISSING:
- Content-Security-Policy
- Permissions-Policy
- Strict-Transport-Security (HSTS)

**Verdict:** Without CSP, any XSS vector (CDN compromise, third-party script injection) has zero browser-level defense. The site loads external resources from `images.unsplash.com` (GhostPreviewModal.tsx) and `fonts.googleapis.com` (Next.js Google Fonts). These MUST be allowlisted in CSP, everything else blocked.

**Sentence:** Add CSP, Permissions-Policy, and HSTS headers to nginx config.

---

## 2026-02-16 - [STALE-COMPLIANCE: Outdated dates on security page]

**Evidence:** `src/app/docs/security/page.tsx:36-37`:
```
{ name: "SOC 2 Type II", description: "In progress - Expected Q2 2025" },
{ name: "ISO 27001", description: "In progress - Expected Q2 2025" },
```
Current date: February 2026. These are 9 months overdue.

**Verdict:** Not a security vulnerability, but a credibility liability. Investors and customers who see "Expected Q2 2025" in February 2026 will question whether Menezis takes compliance seriously. For a company selling SECURITY as its core value, this is embarrassing.

**Sentence:** Update dates to reflect current status.

---

## FALSE POSITIVES (Learned - Don't Waste Time)

### Math.random() in Terminal.tsx:37
Used for typing animation delay jitter (cosmetic). NOT used for cryptography or security decisions. AEGIS-compliant.

### dangerouslySetInnerHTML in structured-data.tsx
Standard Next.js JSON-LD pattern. Input is `JSON.stringify()` of hardcoded objects - no user input. Safe.

### console.log in docs/page.tsx and docs/tools/page.tsx
Inside code example strings (template literals), not actual runtime code. Not a data leak.

### api_key reference in docs/tools/page.tsx:142
Documentation example: `api_key: process.env.MENEZIS_API_KEY` - shows correct env var usage. Not a hardcoded secret.
