export function Contact() {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ready to scale your business? Let's discuss your project requirements
          </p>
        </div>

        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 touch-padding">
            <form className="space-y-6">
              <div className="mobile-grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base touch-manipulation"
                    placeholder="Your name"
                    required
                    aria-label="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base touch-manipulation"
                    placeholder="your@email.com"
                    required
                    aria-label="Your email address"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base touch-manipulation resize-none"
                  placeholder="Tell me about your project..."
                  required
                  aria-label="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary mobile-button"
                aria-label="Send message"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 