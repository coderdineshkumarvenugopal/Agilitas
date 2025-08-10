export function ComingSoonSection() {
  return (
    <section className="py-12 lg:py-24 bg-white">
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-space-grotesk font-semibold text-black mb-4 tracking-[-0.09px] leading-[36px] lg:leading-[44px]">
            Coming Soon
          </h2>
        </div>

        {/* Mobile Layout - Horizontal scroll container */}
        <div className="lg:hidden">
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
            
            {/* Run Club Meetup */}
            <div className="flex-shrink-0 w-80 snap-start">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/17c87973e479ec0f6e76619d8c4402f43c27a184?width=789" 
                  alt="Run Club Meetup" 
                  className="w-full h-full object-cover"
                />
                
                {/* Dark overlay for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-space-grotesk font-medium text-ag-light mb-2 leading-8">
                    Run Club Meetup<br />
                    Jun 25, 10 am
                  </h3>
                  <p className="text-sm font-ibm-plex-sans text-ag-light leading-5">
                    Join local runners for a 5K, gear trials, and post-run smoothies.
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Kicks Day */}
            <div className="flex-shrink-0 w-80 snap-start">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b5e47a5f889e4086be50afb04c49789b6d307b34?width=771" 
                  alt="Custom Kicks Day" 
                  className="w-full h-full object-cover"
                />
                
                {/* Dark overlay for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-space-grotesk font-medium text-ag-light mb-2 leading-8">
                    Custom Kicks Day<br />
                    Jun 26, 6 PM
                  </h3>
                  <p className="text-sm font-ibm-plex-sans text-ag-light leading-5">
                    Design your pair. Add your name. Walk out with a one-of-one.
                  </p>
                </div>
              </div>
            </div>

            {/* Third event (Football Weekend for mobile) */}
            <div className="flex-shrink-0 w-80 snap-start">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8d0bfd4d12c01d5b6afd4ef897f874925ebbef0d?width=1044" 
                  alt="Football Weekend" 
                  className="w-full h-full object-cover"
                />
                
                {/* Dark overlay for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-space-grotesk font-medium text-ag-light mb-2 leading-8">
                    Football Weekend<br />
                    Jun 28-29, 11 am
                  </h3>
                  <p className="text-sm font-ibm-plex-sans text-ag-light leading-5">
                    Join us for skill challenges, mini matches, & the launch of our latest turf-ready kicks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Three Event Cards */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 transform skew-x-[10deg]">
          
          {/* Run Club Meetup */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[461/342] overflow-hidden relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/8e933d3c869f39054fdee4e0ed6306eb07e4ed68?width=1050" 
                alt="Run Club Meetup" 
                className="w-full h-full object-cover"
              />
              
              {/* Dark overlay for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform skew-x-[-10deg]">
                <h3 className="text-xl lg:text-[28px] font-space-grotesk font-medium text-ag-light mb-2 leading-9">
                  Run Club Meetup<br />
                  Jun 25, 10 am
                </h3>
                <p className="text-sm lg:text-base font-ibm-plex-sans text-ag-light leading-6">
                  Join local runners for a 5K, gear trials, and post-run smoothies.
                </p>
              </div>
            </div>
          </div>

          {/* Custom Kicks Day */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[461/342] overflow-hidden relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/155bb849d4e5c37244c190d72058bedad18bcdeb?width=1026" 
                alt="Custom Kicks Day" 
                className="w-full h-full object-cover"
              />
              
              {/* Dark overlay for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform skew-x-[-10deg]">
                <h3 className="text-xl lg:text-[28px] font-space-grotesk font-medium text-ag-light mb-2 leading-9">
                  Custom Kicks Day<br />
                  Jun 26, 6 PM
                </h3>
                <p className="text-sm lg:text-base font-ibm-plex-sans text-ag-light leading-6">
                  Design your pair. Add your name. Walk out with a one-of-one.
                </p>
              </div>
            </div>
          </div>

          {/* Football Weekend */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[461/342] overflow-hidden relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/8d0bfd4d12c01d5b6afd4ef897f874925ebbef0d?width=1044" 
                alt="Football Weekend" 
                className="w-full h-full object-cover"
              />
              
              {/* Dark overlay for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform skew-x-[-10deg]">
                <h3 className="text-xl lg:text-[28px] font-space-grotesk font-medium text-ag-light mb-2 leading-9">
                  Football Weekend<br />
                  Jun 28-29, 11 am
                </h3>
                <p className="text-sm lg:text-base font-ibm-plex-sans text-ag-light leading-6">
                  Join us for skill challenges, mini matches, & the launch of our latest turf-ready kicks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
