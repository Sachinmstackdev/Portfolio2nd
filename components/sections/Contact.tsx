'use client';

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-4">
            <span>Contact</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Connect</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Reach me instantly via email, phone, or WhatsApp — or drop a message here.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {/* Left: Direct contact methods */}
          <div className="space-y-6">
            <div className="rounded-2xl p-[1px] bg-gradient-to-r from-blue-500/20 to-purple-500/20">
              <div className="rounded-2xl bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 p-6 md:p-7 border border-gray-200">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <a href="mailto:sachinkumarmail7@gmail.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors" aria-label="Email sachinkumarmail7@gmail.com">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-semibold">@</span>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="text-gray-900 font-medium break-all">sachinkumarmail7@gmail.com</div>
                    </div>
                  </a>
                  <a href="mailto:sachin@intelligencedock.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors" aria-label="Email sachin@intelligencedock.com">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-semibold">@</span>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500">Work Email</div>
                      <div className="text-gray-900 font-medium break-all">sachin@intelligencedock.com</div>
                    </div>
                  </a>
                  <a href="tel:+919877034726" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors" aria-label="Call +91 9877034726">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600 font-semibold">📞</span>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500">Phone</div>
                      <div className="text-gray-900 font-medium">+91 9877034726</div>
                    </div>
                  </a>
                  <a href="https://wa.me/919289613912" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors" aria-label="WhatsApp +91 92896 13912">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 font-semibold">🟢</span>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500">WhatsApp</div>
                      <div className="text-gray-900 font-medium">+91 92896 13912</div>
                    </div>
                  </a>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <a href="https://www.linkedin.com/in/sachin-kumar-5647b5219/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors">in</a>
                    <a href="https://github.com/Sachinmstackdev" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-900 hover:text-white transition-colors">GH</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            <div className="rounded-2xl p-[1px] bg-gradient-to-r from-blue-500/20 to-purple-500/20">
              <div className="rounded-2xl bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 p-6 md:p-7 border border-gray-200">
                <form className="space-y-6" onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const formData = new FormData(form);
                  const payload = {
                    name: String(formData.get('name') || ''),
                    email: String(formData.get('email') || ''),
                    message: String(formData.get('message') || '')
                  };
                  const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
                  if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
                  try {
                    const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
                    const data = await res.json();
                    if (data?.ok) {
                      alert('Thanks! Your message has been sent.');
                      form.reset();
                    } else {
                      alert('Failed to send. Please try again later.');
                    }
                  } catch {
                    alert('Failed to send. Please try again later.');
                  } finally {
                    if (btn) { btn.disabled = false; btn.textContent = 'Send Message'; }
                  }
                }}>
                  <div className="mobile-grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">Name</label>
                      <input name="name" type="text" className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base touch-manipulation" placeholder="Your name" required aria-label="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">Email</label>
                      <input name="email" type="email" className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base touch-manipulation" placeholder="your@email.com" required aria-label="Your email address" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">Message</label>
                    <textarea name="message" rows={6} className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base touch-manipulation resize-none" placeholder="Tell me about your project..." required aria-label="Your message"></textarea>
                  </div>
                  <button type="submit" className="w-full btn-primary mobile-button" aria-label="Send message">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}