"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-terminal-green/30">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <Section className="pt-16 pb-24">
        <Container>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-8 font-mono text-sm"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Legal Notice & Privacy Policy
          </h1>

          <div className="prose prose-invert max-w-none space-y-12 font-mono text-sm text-neutral-300">

            {/* MENTIONS LÉGALES */}
            <section>
              <h2 className="text-xl font-bold text-terminal-green mb-4">1. Legal Information</h2>
              <div className="space-y-2 bg-white/5 p-6 rounded-lg border border-white/10">
                <p><span className="text-neutral-500">Publisher:</span> Julien DABERT</p>
                <p><span className="text-neutral-500">Status:</span> Individual / Sole Proprietor</p>
                <p><span className="text-neutral-500">Country:</span> France</p>
                <p><span className="text-neutral-500">Contact:</span> contact@menezis.ai</p>
                <p><span className="text-neutral-500">Publication Director:</span> Julien DABERT</p>
              </div>
            </section>

            {/* HÉBERGEUR */}
            <section>
              <h2 className="text-xl font-bold text-terminal-green mb-4">2. Hosting</h2>
              <div className="space-y-2 bg-white/5 p-6 rounded-lg border border-white/10">
                <p><span className="text-neutral-500">Website Host:</span> Cloudflare, Inc.</p>
                <p><span className="text-neutral-500">Address:</span> 101 Townsend Street, San Francisco, CA 94107, USA</p>
                <p><span className="text-neutral-500">Infrastructure:</span> Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Germany</p>
              </div>
            </section>

            {/* RGPD */}
            <section>
              <h2 className="text-xl font-bold text-terminal-green mb-4">3. Data Protection (GDPR)</h2>
              <div className="space-y-4">
                <p>
                  In accordance with Regulation (EU) 2016/679 (General Data Protection Regulation),
                  you have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside space-y-1 text-neutral-400">
                  <li>Right of access to your personal data</li>
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
                  <li>Right to restriction of processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>
                <p>
                  To exercise these rights, contact us at: <span className="text-terminal-green">privacy@menezis.ai</span>
                </p>
                <p>
                  You may also file a complaint with the French Data Protection Authority (CNIL):
                  <span className="text-electric-blue"> www.cnil.fr</span>
                </p>
              </div>
            </section>

            {/* DATA COLLECTED */}
            <section>
              <h2 className="text-xl font-bold text-terminal-green mb-4">4. Data We Collect</h2>
              <div className="space-y-4">
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3 className="text-white font-bold mb-2">Website (menezis.ai)</h3>
                  <p className="text-neutral-400">
                    This marketing website does not collect personal data. No cookies, no analytics, no tracking.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3 className="text-white font-bold mb-2">Platform (app.menezis.ai)</h3>
                  <p className="text-neutral-400">
                    When using our platform, we collect: email address, billing information (processed by Stripe),
                    and infrastructure deployment logs. Data is stored in EU-based servers (Hetzner, Germany).
                  </p>
                </div>
              </div>
            </section>

            {/* COOKIES */}
            <section>
              <h2 className="text-xl font-bold text-terminal-green mb-4">5. Cookies</h2>
              <p>
                This website does not use cookies for tracking or advertising purposes.
                Essential cookies may be used for authentication on the platform (app.menezis.ai).
              </p>
            </section>

            {/* PROPRIÉTÉ INTELLECTUELLE */}
            <section>
              <h2 className="text-xl font-bold text-terminal-green mb-4">6. Intellectual Property</h2>
              <p>
                All content on this website (text, graphics, logos, software) is the property of Menezis
                and is protected by French and international intellectual property laws.
                Reproduction without prior written consent is prohibited.
              </p>
            </section>

            {/* LIMITATION OF LIABILITY */}
            <section>
              <h2 className="text-xl font-bold text-terminal-green mb-4">7. Limitation of Liability</h2>
              <p>
                Menezis strives to ensure the accuracy of information on this site but cannot guarantee
                it is complete, accurate, or up-to-date. Menezis shall not be liable for any direct or
                indirect damages resulting from access to or use of this site.
              </p>
            </section>

            {/* APPLICABLE LAW */}
            <section>
              <h2 className="text-xl font-bold text-terminal-green mb-4">8. Applicable Law</h2>
              <p>
                These terms are governed by French law. Any dispute shall be subject to the exclusive
                jurisdiction of the French courts.
              </p>
            </section>

            {/* LAST UPDATE */}
            <section className="pt-8 border-t border-white/10">
              <p className="text-neutral-500 text-xs">
                Last updated: December 2024
              </p>
            </section>

          </div>
        </Container>
      </Section>
    </main>
  );
}
