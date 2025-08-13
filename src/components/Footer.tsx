import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="w-full bg-[#1a3a5f] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Side */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <h3 className="text-lg font-semibold mb-2">Let's keep in touch!</h3>
            <p className="text-gray-300">
              Please fill out the form above and we will respond ASAP!
            </p>
          </div>
          
          {/* Right Side */}
          <div className="md:text-right">
            <h4 className="uppercase text-sm font-semibold mb-3 tracking-wide text-gray-300">
              Useful Links
            </h4>
            <ul className="space-y-2">
       <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#process" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-4 border-t border-gray-600 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Specialized Housing Counselors. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


