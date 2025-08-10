export function JoinMovementSection() {
  return (
    <section className="py-12 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-space-grotesk font-semibold text-black mb-4 tracking-[-0.09px] leading-[36px] lg:leading-[44px]">
            Join the movement
          </h2>
          <p className="text-lg font-ibm-plex-sans text-black leading-7">
            The next era is in motion - are you in?
          </p>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden space-y-6">
          
          {/* Discover Where You Fit In */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[342/216] overflow-hidden relative rounded-lg">
              {/* Main image */}
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/d47efe00e76f21c5d3e3d598435b80c63de6438e?width=686" 
                alt="Discover Where You Fit In" 
                className="w-full h-full object-cover"
              />
              
              {/* Dark overlay for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  {/* Background blur for text */}
                  <div className="absolute inset-0 bg-ag-dark/60 blur-[40px] rounded-lg"></div>
                  
                  <h3 className="relative text-xl lg:text-[24px] font-space-grotesk font-medium text-white leading-8 underline decoration-white decoration-2 underline-offset-4 drop-shadow-lg max-w-[201px]">
                    DISCOVER WHERE YOU FIT IN
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Vibe With Creators Who Get It */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[342/216] overflow-hidden relative rounded-lg">
              {/* Main image */}
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/d9cbfd5aaa0213904e6e7bba10e2cc1b5a276679?width=686" 
                alt="Vibe With Creators Who Get It" 
                className="w-full h-full object-cover"
              />
              
              {/* Dark overlay for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  {/* Background blur for text */}
                  <div className="absolute inset-0 bg-ag-dark/60 blur-[40px] rounded-lg"></div>
                  
                  <h3 className="relative text-xl lg:text-[24px] font-space-grotesk font-medium text-white leading-8 underline decoration-white decoration-2 underline-offset-4 drop-shadow-lg max-w-[245px]">
                    VIBE WITH CREATORS WHO GET IT
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Two Column */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 transform skew-x-[-10deg]">
          
          {/* Left Card - Discover Where You Fit In */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[661/368] overflow-hidden relative">
              
              {/* Foreground image */}
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/079bdec2dcf9ccfaffa5c95bb83dc907bf7311f1?width=1256" 
                alt="Discover Where You Fit In" 
                className=""
              />
              
              {/* Dark overlay for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6 transform skew-x-[10deg]">
                  {/* Background blur for text */}
                  <div className="absolute inset-0 bg-ag-dark/60 blur-[40px] rounded-lg"></div>
                  
                  <h3 className="relative text-2xl lg:text-[28px] font-space-grotesk font-medium text-white leading-9 underline decoration-white decoration-2 underline-offset-4 drop-shadow-lg">
                    DISCOVER WHERE YOU FIT IN
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Vibe With Creators Who Get It */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[661/368] overflow-hidden relative">
              {/* Background image */}
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/c809f4b6c647dd1cfefa76e46f5c538a5f926131?width=1322" 
                alt="Vibe With Creators Who Get It background" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Overlay image */}
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/d12e2774f5dff05c98ab530fdcbf1a720caa1743?width=1322" 
                alt="Vibe With Creators Who Get It overlay" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Dark overlay for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center transform skew-x-[10deg]">
                <div className="text-center px-6">
                  {/* Background blur for text */}
                  <div className="absolute inset-0 bg-ag-dark/60 blur-[40px] rounded-lg"></div>
                  
                  <h3 className="relative text-2xl lg:text-[28px] font-space-grotesk font-medium text-white leading-9 underline decoration-white decoration-2 underline-offset-4 drop-shadow-lg">
                    VIBE WITH CREATORS WHO GET IT
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
