import { Instagram, Linkedin, Youtube } from 'lucide-react';  

export function Footer() {
  return (
    <footer className="bg-ag-dark text-ag-light">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          
          {/* Logo and colored dots */}
          <div className="flex items-start space-x-4">
            <div className="relative">
              {/* Logo with colored dots */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative flex flex-col gap-2">
                             
                  {/* Colored dots */}
                  <div className="flex flex-col">
                    <div className="ml-7 w-3 h-3 bg-ag-lemon-green rounded-full"></div>
                    <div className="w-3 h-3 bg-ag-bright-blue rounded-full"></div>
                    <div className="ml-4 w-3 h-3 bg-ag-bright-pink rounded-full"></div>
                    <div className="ml-8 w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                   {/* Logo placeholder - you can replace with actual logo */}
                  <div className="text-2xl font-space-grotesk font-bold text-ag-light">agilitas</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Divider line */}
          <div className="w-full h-px bg-gray-600"></div>
          
          {/* Navigation Links - Mobile Layout */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4 text-lg font-ibm-plex-sans">
              <a href="#" className="block hover:text-white transition-colors">About Us</a>
              <a href="#" className="block hover:text-white transition-colors">What we do</a>
              <a href="#" className="block hover:text-white transition-colors">Inside Agilitas</a>
            </div>

            <div className="space-y-4 text-lg font-ibm-plex-sans">
              <a href="#" className="block hover:text-white transition-colors">Join the Team</a>
              <a href="#" className="block hover:text-white transition-colors">Media</a>
              <a href="#" className="block hover:text-white transition-colors">
                Blogs <span className="text-base">(Coming Soon)</span>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-space-grotesk font-medium">
              Stay in the Loop. Move with Us.
            </h3>
            
            <div className="flex flex-row gap-20 lg:grid lg:grid-cols-2 lg:gap-6">
              <div>
                <h4 className="font-bold text-sm mb-1">Email</h4>
                <a 
                  href="mailto:info@agilitas.in" 
                  className="text-sm underline hover:text-white transition-colors"
                >
                  info@agilitas.in
                </a>
              </div>
              
              <div>
                <h4 className="font-bold text-sm mb-2">Corporate address</h4>
                <address className="text-sm not-italic leading-5 max-w-[163px]">
                  Roshini Tech Hub,<br />
                  PFS Club House,<br />
                  Marathahalli Main Rd,<br />
                  Lakshminarayana Pura,<br />
                  EPIP Zone,<br />
                  Chinnapanna Halli,<br />
                  Bengaluru, Karnataka 560037<br /><br />
                  <a href="#" className="underline hover:text-white transition-colors">
                    🧭 Get directions
                  </a>
                </address>
              </div>
            </div>
          </div>

          {/* Social and tagline */}
          <div className="flex flex-row gap-4">
            <p className="text-sm font-ibm-plex-sans">Follow us</p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-ag-light hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-ag-light hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-ag-light hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          <p className="text-lg font-ibm-plex-sans leading-7">
              Comprehensively building the entire value chain from manufacturing to retail
            </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-16">
          
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              {/* Agilitas logo with colored dots */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative flex flex-col gap-2">
                             
                  {/* Colored dots */}
                  <div className="flex flex-col">
                    <div className="ml-7 w-3 h-3 bg-ag-lemon-green rounded-full"></div>
                    <div className="w-3 h-3 bg-ag-bright-blue rounded-full"></div>
                    <div className="ml-4 w-3 h-3 bg-ag-bright-pink rounded-full"></div>
                    <div className="ml-8 w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                   {/* Logo placeholder - you can replace with actual logo */}
                  <div className="text-2xl font-space-grotesk font-bold text-ag-light">agilitas</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-xl font-ibm-plex-sans">Follow us</p>
              
              <div className="flex space-x-4">
                <a href="#" className="text-ag-light hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-ag-light hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-ag-light hover:text-white transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
              
              <p className="text-xl font-ibm-plex-sans">
                Comprehensively building the entire value chain from manufacturing to retail
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <div className="space-y-4 text-xl font-ibm-plex-sans">
              <a href="#" className="block hover:text-white transition-colors">About Us</a>
              <a href="#" className="block hover:text-white transition-colors">What we do</a>
              <a href="#" className="block hover:text-white transition-colors">Inside Agilitas</a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="space-y-4 text-xl font-ibm-plex-sans">
              <a href="#" className="block hover:text-white transition-colors">Join the Team</a>
              <a href="#" className="block hover:text-white transition-colors">Media</a>
              <a href="#" className="block hover:text-white transition-colors">
                Blogs <span className="text-lg">(Coming Soon)</span>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <h3 className="text-xl font-space-grotesk font-medium">
                Stay in the Loop. Move with Us.
              </h3>
              
              <div>
                <h4 className="font-bold text-base mb-1">Email</h4>
                <a 
                  href="mailto:info@agilitas.in" 
                  className="text-base underline hover:text-white transition-colors"
                >
                  info@agilitas.in
                </a>
              </div>
              
              <div>
                <h4 className="font-bold text-base mb-2">Corporate address</h4>
                <address className="text-base not-italic leading-6">
                  Roshini Tech Hub,<br />
                  PFS Club House,<br />
                  Marathahalli Main Rd,<br />
                  Lakshminarayana Pura,<br />
                  EPIP Zone, Chinnapanna Halli,<br />
                  Bengaluru, Karnataka 560037<br /><br />
                  <a href="#" className="underline hover:text-white transition-colors">
                    🧭 Get directions
                  </a>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center lg:text-left">
            <p className="text-lg font-ibm-plex-sans text-white">
              © 2025 Agilitas All rights reserved. 
              <a href="#" className="underline hover:text-gray-300 transition-colors ml-2">Terms of Use</a>
              <span className="mx-2">|</span>
              <a href="#" className="underline hover:text-gray-300 transition-colors">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
