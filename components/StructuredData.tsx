export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sachin Kumar",
    "jobTitle": "Technical Founder & Hybrid Operator",
    "description": "Technical founder and hybrid operator helping eCommerce & service businesses scale with full-stack development, marketing automation, and growth systems.",
    "url": "https://sachinkumar.dev",
    "image": "https://sachinkumar.dev/sachin-kumar.jpg",
    "sameAs": [
      "https://twitter.com/sachinkumar",
      "https://linkedin.com/in/sachinkumar",
      "https://github.com/sachinkumar",
      "https://intelligencedock.com"
    ],
    "knowsAbout": [
      "Full-Stack Development",
      "MERN Stack",
      "Next.js",
      "Supabase",
      "AI Tools",
      "Marketing Automation",
      "Workflow Automation",
      "n8n",
      "Zapier",
      "Flowise",
      "MVP Development",
      "eCommerce Development",
      "Performance Marketing",
      "SEO",
      "Paid Advertising",
      "Funnel Optimization",
      "Growth Systems"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Intelligence Dock",
      "url": "https://intelligencedock.com"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "Intelligence Dock"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Technical Founder",
      "description": "Building and scaling technology solutions for businesses"
    },
    "offers": {
      "@type": "Service",
      "serviceType": "Full-Stack Development and Growth Marketing",
      "provider": {
        "@type": "Person",
        "name": "Sachin Kumar"
      },
      "description": "Comprehensive technical and marketing solutions for eCommerce and service businesses",
      "areaServed": "Worldwide",
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://sachinkumar.dev/contact"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
} 