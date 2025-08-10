export function AglitasPresenceSection() {
  return (
    <section className="relative">
      {/* Blue decorative line on the left - Desktop version */}
      <div className="lg:absolute lg:left-0 md:top-[450px] lg:top-[540px] lg:h-full lg:left-20">
        <svg 
          className="w-[104px] h-[419px] mt-[100px] hidden lg:block" 
          viewBox="0 0 106 421" 
          fill="none"
        >
          <path 
            d="M1 1 L100 140.513 V215" 
            stroke="#1D1BFB" 
            strokeWidth="2"
          />
        </svg>
      </div>
    
      {/* Mobile Layout - Full width dark section with text, then image grid below */}
      <div className="lg:hidden">
        {/* Dark text section - full width */}
        <div className="w-full bg-ag-dark text-ag-light py-16">
          <div className="px-4">
            <h2 className="text-xl font-space-grotesk font-medium leading-8 text-ag-light max-w-sm mx-auto">
              Agilitas is turning up the volume on Lotto's presence and creating momentum across markets. In India, it's not just part of the conversation—it's writing the whole playbook.
            </h2>
          </div>
        </div>

        {/* Mobile Image Grid - 2x2 layout */}
        <div className="grid grid-cols-2 gap-0">
          {/* Top left */}
          <div className="aspect-[2/3] overflow-hidden">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/ebefb052cd012729dc01e73b680cf59f90031ab5?width=290" 
              alt="Agilitas presence 1" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top right */}
          <div className="aspect-[6/5] overflow-hidden">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/9bdecf08bc1b0ed6ce98ef77f274678c445a573c?width=644" 
              alt="Agilitas presence 2" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom left - spans wider */}
          <div className="col-span-2 aspect-[16/9] overflow-hidden">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/c5bbe7b564dea2830e41ab482797abed1c5090e5?width=907" 
              alt="Agilitas presence 3" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom right - hidden on mobile in this responsive version */}
          <div className="hidden">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/84674d9ed2fe90b9324834fe55b26e89bf4ee7d5?width=408" 
              alt="Agilitas presence 4" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout - Side by side */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:min-h-[552px]">
        {/* Left side - Dark section with text */}
        <div className="bg-ag-dark text-ag-light p-8 lg:p-16 flex items-center">
          <div className="max-w-md">
            <h2 className="text-3xl lg:text-4xl font-space-grotesk font-semibold leading-[44px] tracking-[-0.09px] text-ag-light">
              Agilitas is turning up the volume on Lotto's presence and creating momentum across markets. In India, it's not just part of the conversation—it's writing the whole playbook.
            </h2>
          </div>
        </div>

        {/* Right side - Image grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-0">
          {/* Top left image */}
          <div className="aspect-[326/276] w-full overflow-hidden">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/0419013ac8ffa8ddd8fba3c11f7db2328d3f377b?width=742" 
              alt="Agilitas presence 1" 
              className="w-full h-full object-cover"
            />
          </div>


          {/* Top right image - spans two columns */}
          <div className="aspect-[517/276] w-full overflow-hidden">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/b8c88630a9a3502c219f3eafc768d440a327c7b9?width=1046" 
              alt="Agilitas presence 2" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom left image - spans two columns */}
          <div className="aspect-[517/276] w-full overflow-hidden">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/2c9e18e7e591086c45ceb0e3f1e03d78e5a0ce0d?width=1204" 
              alt="Agilitas presence 3" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom right image */}
          <div className="aspect-[326/276] w-full overflow-hidden">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/eb51dc3a8a725614fdc2cc04bd1f90ed1da040f4?width=750" 
              alt="Agilitas presence 4" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
