export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Menezis",
    "url": "https://menezis.ai",
    "logo": "https://menezis.ai/logo.png",
    "description": "Autonomous Infrastructure Platform with Post-Quantum Security",
    "foundingDate": "2025",
    "sameAs": [
      "https://www.linkedin.com/company/menezis/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@menezis.ai",
      "contactType": "sales"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Menezis",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Cloud",
    "description": "Autonomous infrastructure platform with 16 MCP tools, post-quantum ML-KEM-768 security, and self-healing capabilities",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "highPrice": "99.99",
      "priceCurrency": "EUR",
      "offerCount": "6"
    },
    "featureList": [
      "16 MCP Tools for AI Integration",
      "Post-Quantum Security (ML-KEM-768)",
      "Natural Language Deployment",
      "Multi-Runtime Support (Docker, Kubernetes, systemd)",
      "Autonomous Monitoring (Operation Argus)",
      "Self-Healing Infrastructure",
      "7-Layer Validation Pipeline",
      "5-Analyzer Judgment System"
    ],
    "screenshot": "https://menezis.ai/og-image.png",
    "softwareVersion": "3.0.0"
  };

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Menezis Cloud Infrastructure",
    "description": "AI-driven autonomous infrastructure with predictable pricing",
    "brand": {
      "@type": "Brand",
      "name": "Menezis"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Nano (Free Tier)",
        "price": "0",
        "priceCurrency": "EUR",
        "description": "0.5 vCPU, 512MB RAM, 5GB SSD - Free forever, 1 per user",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Micro",
        "price": "5.99",
        "priceCurrency": "EUR",
        "description": "1 vCPU, 1GB RAM, 25GB SSD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Small",
        "price": "12.99",
        "priceCurrency": "EUR",
        "description": "2 vCPU, 2GB RAM, 50GB SSD - Most Popular",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Medium",
        "price": "24.99",
        "priceCurrency": "EUR",
        "description": "4 vCPU, 4GB RAM, 80GB NVMe",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Large",
        "price": "49.99",
        "priceCurrency": "EUR",
        "description": "8 vCPU, 8GB RAM, 160GB NVMe",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Business",
        "price": "99.99",
        "priceCurrency": "EUR",
        "description": "8 vCPU, 16GB RAM, 320GB SSD - Priority Support",
        "availability": "https://schema.org/InStock"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is MCP integration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MCP (Model Context Protocol) enables AI assistants like Claude, Cursor, Windsurf, Roo, and Antigravity to directly interact with your infrastructure. Menezis provides 16 MCP tools including discover, validate_stack, judge_stack, manifest, provision_instance, and more. Simply describe your infrastructure in natural language, and the AI deploys it."
        }
      },
      {
        "@type": "Question",
        "name": "What is post-quantum security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Menezis uses ML-KEM-768 (NIST FIPS 203 standardized) for quantum-resistant key encapsulation combined with AES-256-GCM encryption. This four-layer security stack (mTLS + JWT + ML-KEM-768 + AES-256-GCM) protects against both current attacks and future quantum computer threats."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a free tier?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! The Nano plan is free forever with 0.5 vCPU, 512MB RAM, and 5GB SSD storage. Limited to 1 instance per user with auto-hibernation. Perfect for learning, development, and small projects."
        }
      },
      {
        "@type": "Question",
        "name": "How does autonomous monitoring work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Operation Argus provides autonomous monitoring with sentinels that monitor CPU, RAM, disk, and services every 15 seconds. The Event Engine triggers automatic responses: service restarts, disk cleanup, memory relief. Mean Time to Recovery is under 2 minutes for most issues. You get reports, not 3 AM pager alerts."
        }
      },
      {
        "@type": "Question",
        "name": "What runtimes are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Menezis supports three runtimes: Docker (container orchestration with docker-compose), Kubernetes (cloud-native manifests with StatefulSets/Deployments), and systemd (native Linux services with security hardening). The same stackfile can target any runtime."
        }
      },
      {
        "@type": "Question",
        "name": "How does the 7-layer validation work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Before deployment, every stack goes through 7 validation layers: YAML syntax, schema structure, primitive existence, parameter types, cross-service references, circular dependency detection, and secret validation. Then the Judge system analyzes security (40%), policy (30%), topology (15%), cost (10%), and operations (5%)."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
