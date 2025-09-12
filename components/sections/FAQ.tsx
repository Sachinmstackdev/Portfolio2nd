export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions about my services and approach
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What services do you offer?
            </h3>
            <p className="text-gray-600">
              I offer MVP development, growth automation, paid funnel setup, and growth audits for eCommerce and service businesses.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              How long does a typical project take?
            </h3>
            <p className="text-gray-600">
              MVP builds take 2-3 weeks, automation projects 1-2 weeks, and audits are completed in 3-5 days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 