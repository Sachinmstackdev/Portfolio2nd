'use client';

export function FAQ() {
  const faqs = [
    {
      q: 'What services do you offer?',
      a: 'I help businesses grow through custom web/app development (MERN stack), AI automation tools, and performance-driven marketing campaigns. From building scalable products to running high-conversion funnels, I cover both tech and growth.'
    },
    {
      q: 'What industries do you specialize in?',
      a: 'I’ve worked with e-commerce, casinos & gaming, affiliate platforms, SaaS startups, and D2C brands. My focus is always on projects that need fast results + scalable systems.'
    },
    {
      q: 'How do you usually start a project?',
      a: 'We begin with a quick discovery call to understand your goals, target audience, and revenue model. Based on that, I create a clear roadmap with deliverables, timelines, and ROI-focused milestones.'
    },
    {
      q: 'What tech stack do you use?',
      a: 'For development: React, Next.js, Node.js, MongoDB, and cloud tools.\nFor marketing & automation: Meta Ads, Google Ads, WhatsApp bulk systems, AI tools, and analytics dashboards.'
    },
    {
      q: 'Do you charge hourly or project-based?',
      a: 'Mostly project-based (with clear milestones), so you know exactly what you’ll get. For ongoing work like marketing or SaaS support, I also offer retainer models.'
    },
    {
      q: 'How long does it take to complete a project?',
      a: 'A landing page or small app MVP: 1–2 weeks.\nA full-scale SaaS or e-commerce system: 4–8 weeks.\nTimelines depend on complexity, but I move fast and focus on results.'
    },
    {
      q: 'Do you provide post-project support?',
      a: 'Yes. Every project comes with support for bug fixes and optimizations. I also offer long-term maintenance, scaling, and marketing growth support if needed.'
    },
    {
      q: 'Can you also help with traffic, leads, and revenue growth?',
      a: 'Absolutely. Unlike most developers, I don’t stop at code. I set up funnels, ads, and automation so your product not only works but also makes money.'
    },
    {
      q: 'Do you work with international clients?',
      a: 'Yes. I’ve worked with clients across India, Europe, and the U.S. Payments are flexible (Razorpay, Stripe, Wise, etc.), making collaboration smooth.'
    },
    {
      q: 'Why should we work with you instead of hiring a freelancer or agency?',
      a: 'Because I combine the speed of a solo founder with the systems of an agency. I don’t just build — I make sure what we build drives measurable growth. My focus is simple: fast execution + scalable outcomes.'
    }
  ];

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-4">
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions about my services and approach
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
          {faqs.map((item, index) => (
            <details key={index} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              <summary className="cursor-pointer list-none p-5 md:p-6 text-left flex items-start justify-between gap-4 hover:bg-gray-100 outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                <span className="text-base md:text-lg font-semibold text-gray-900">
                  {index + 1}. {item.q}
                </span>
                <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.116l3.71-3.885a.75.75 0 111.08 1.04l-4.25 4.45a.75.75 0 01-1.08 0l-4.25-4.45a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-2">
                <p className="text-gray-600 whitespace-pre-line text-sm md:text-base">
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}