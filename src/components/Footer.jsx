import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { HiMail, HiPhone } from 'react-icons/hi';

function Footer() {
  return (
    <footer id='contacts' className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Nerbert Bulaqueña</h3>
            <p className="text-gray-400">
              Network Engineer turned Web Developer, building digital solutions with precision and dedication.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#0C4A8F]">Contact Info</h4>
            <div className="space-y-3">
              <a 
                href="mailto:nerbertb@gmail" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <HiMail size={20} />
                <span>nerbertb@gmail</span>
              </a>
              <a 
                href="tel:+639176338309" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <HiPhone size={20} />
                <span>+63 917 633 8309</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#0C4A8F]">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/nerbertb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0C4A8F] transition-colors"
              >
                <AiFillLinkedin size={32} />
              </a>
              <a
                href="https://github.com/nerbertb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0C4A8F] transition-colors"
              >
                <AiFillGithub size={32} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nerbert Bulaqueña. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;