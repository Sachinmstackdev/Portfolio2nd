import Link from 'next/link';
import { Github, Linkedin, Mail, Phone, ExternalLink, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white safe-area-bottom">
      <div className="container py-12">
        <div className="mobile-grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">SK</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold">Sachin Kumar</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-sm md:text-base leading-relaxed">
              Digital Marketing Executive with 9 months of industry experience and 2+ years of freelance web development. 
              Helping businesses grow through creative marketing and technical expertise.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/sachin-kumar-5647b5219/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800 touch-manipulation"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
              <Link
                href="https://github.com/Sachinmstackdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800 touch-manipulation"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
              <Link
                href="https://wa.me/919289613912"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800 touch-manipulation"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base touch-manipulation py-1 block">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base touch-manipulation py-1 block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base touch-manipulation py-1 block">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base touch-manipulation py-1 block">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base touch-manipulation py-1 block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:sachinkumarmail7@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base break-all touch-manipulation"
                >
                  sachinkumarmail7@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:sachin@intelligencedock.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base break-all touch-manipulation"
                >
                  sachin@intelligencedock.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 flex-shrink-0" />
                <a
                  href="tel:+919877034726"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base touch-manipulation"
                >
                  +91 9877034726
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 flex-shrink-0" />
                <a
                  href="https://www.devsachinkumar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base break-all touch-manipulation"
                >
                  www.devsachinkumar.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
            © {currentYear} Sachin Kumar. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm md:text-base transition-colors touch-manipulation">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm md:text-base transition-colors touch-manipulation">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="text-gray-400 hover:text-white text-sm md:text-base transition-colors touch-manipulation">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 