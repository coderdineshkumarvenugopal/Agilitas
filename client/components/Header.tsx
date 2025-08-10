import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 lg:top-6">
      <div className="px-4 lg:max-w-[1063px] lg:mx-auto">
        {/* Glass effect container */}
        <div className="relative">
          {/* Mobile Header */}
          <div className="lg:hidden">
            {/* Background blur layer */}
            <div className="bg-black/95 backdrop-blur-[20px] h-14"></div>
            
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-[35px] shadow-[2px_4px_30px_0_rgba(0,0,0,0.10)] border border-white/10">
              <nav className="flex items-center justify-between px-3 py-3 h-14">
                {/* Logo */}
                <div className="flex items-center">
                  <div className="relative">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/7e835ceae986e8c624297c75e11b290503589430?width=232" 
                      alt="Agilitas" 
                      className="h-[38px] w-[116px]"
                    />
                    <div className="absolute top-1.5 left-3.5 w-1 h-1 bg-ag-lemon-green rounded-full"></div>
                  </div>
                </div>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex flex-col space-y-1 p-2 -m-2 hover:opacity-70 transition-opacity"
                  aria-label="Toggle menu"
                >
                  <div className="w-7 h-0.5 bg-ag-light"></div>
                  <div className="w-5 h-0.5 bg-ag-light"></div>
                  <div className="w-4 h-0.5 bg-ag-light"></div>
                </button>
              </nav>

              {/* Mobile Navigation */}
              {isMenuOpen && (
                <div className="bg-black/80 backdrop-blur-md border-t border-white/10">
                  <div className="px-4 py-6 space-y-4">
                    <a 
                      href="#home" 
                      className="block text-ag-light text-lg font-space-grotesk hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </a>
                    <a 
                      href="#about" 
                      className="block text-ag-light text-lg font-space-grotesk hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About us
                    </a>
                    <a 
                      href="#tradition" 
                      className="block text-ag-light text-lg font-space-grotesk font-bold hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      What we do
                    </a>
                    <a 
                      href="#inside" 
                      className="block text-ag-light text-lg font-space-grotesk hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Inside Agilitas
                    </a>
                    <a 
                      href="#join" 
                      className="block text-ag-light text-lg font-space-grotesk hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Join the team
                    </a>
                    <a 
                      href="#media" 
                      className="block text-ag-light text-lg font-space-grotesk hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Media
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:block">
            {/* Background blur layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-[20px] opacity-55 rounded-lg"></div>
            
            {/* Glass effect overlay */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-[35px] rounded-lg shadow-[2px_4px_30px_0_rgba(0,0,0,0.10)] border border-white/10">
              {/* Background image overlay */}
              <div className="absolute inset-0 opacity-60 backdrop-blur-[50px] rounded-lg overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8870144411e612758d83cb3af6c946a23afa23a6?width=2126" 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <nav className="relative flex items-center justify-between px-4 py-2.5 h-[70px]">
                {/* Logo */}
                <div className="flex items-center">
                  <div className="relative">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/286fc3b27507dc9696c6adf8e2c13f67559392a8?width=316" 
                      alt="Agilitas" 
                      className="h-[52px] w-[158px]"
                    />
                    <div className="absolute top-2 left-5 w-[6px] h-[6px] bg-ag-lemon-green rounded-full"></div>
                  </div>
                </div>

                {/* Desktop Navigation */}
                <div className="flex items-center space-x-8">
                  {/* Vertical divider */}
                  <div className="w-px h-10 bg-ag-light/30"></div>
                  
                  <a href="#about" className="text-ag-light text-xl font-space-grotesk font-medium hover:text-white transition-colors">
                    About us
                  </a>
                  
                  <div className="relative">
                    <button 
                      className="flex items-center space-x-2 text-ag-light text-xl font-space-grotesk font-bold hover:text-white transition-colors"
                      onClick={() => setIsWhatWeDoOpen(!isWhatWeDoOpen)}
                    >
                      <span>What we do</span>
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    
                    {/* Green accent arrow */}
                    <div className="absolute -bottom-2 left-0 w-[30px] h-1">
                      <svg width="30" height="4" viewBox="0 0 30 4" fill="none">
                        <path d="M5 0H30L25 4H0L5 0Z" fill="#00F300"/>
                      </svg>
                    </div>
                    
                    {/* Dropdown menu */}
                    {isWhatWeDoOpen && (
                      <div className="absolute top-full mt-2 left-0 bg-black/90 backdrop-blur-md rounded-lg border border-white/10 py-2 min-w-[200px]">
                        <a href="#tradition" className="block px-4 py-2 text-ag-light hover:text-white transition-colors">
                          Our Vision
                        </a>
                        <a href="#tradition" className="block px-4 py-2 text-ag-light hover:text-white transition-colors">
                          Tradition in Transition
                        </a>
                        <a href="#presence" className="block px-4 py-2 text-ag-light hover:text-white transition-colors">
                          Market Presence
                        </a>
                      </div>
                    )}
                  </div>
                  
                  <a href="#inside" className="text-ag-light text-xl font-space-grotesk font-medium hover:text-white transition-colors">
                    Inside Agilitas
                  </a>
                  
                  <a href="#join" className="text-ag-light text-xl font-space-grotesk font-medium hover:text-white transition-colors">
                    Join the team
                  </a>
                  
                  <a href="#media" className="text-ag-light text-xl font-space-grotesk font-medium hover:text-white transition-colors">
                    Media
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
