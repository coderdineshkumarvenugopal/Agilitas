import { motion } from 'framer-motion';
export function HeroSection() {
  return (
    <section className="relative min-h-[470px] lg:h-[699px] w-full overflow-hidden">
      {/* Background Images - responsive for mobile/desktop */}
      <div className="absolute inset-0">
        {/* Mobile background */}
        <div className="lg:hidden relative w-full h-full">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/1b6983af25f7db11147f8ec8dee50eddcf7d8095?width=808" 
            alt="Background Mobile" 
            className="absolute left-0 w-full h-72 object-cover"
          />
          {/* <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/a93a1e337adec93e82852694abcb7a83526efa0a?width=1384" 
            alt="Background accent" 
            className="absolute top-12 left-0 w-full h-72 object-cover"
          /> */}
        </div>
        {/* Desktop background */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/e27018c73c255a1e60c9ae29c16289ed770e39a4?width=2880" 
          alt="Background Desktop" 
          className="hidden lg:block w-full h-full object-cover"
        />
      </div>

      {/* Background overlay for text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Main content container */}
      <div className="relative z-10 flex items-end lg:items-center justify-center h-full px-4 pb-32 lg:pb-0">
        <div className="text-center max-w-6xl mx-auto">
          {/* Shadow effect behind text */}
          {/* <div className="absolute inset-x-0 transform h-24 bg-ag-dark/20 blur-[40px] mx-auto w-[344px] lg:max-w-[1076px] top-[180px] lg:top-1/2 lg:-translate-y-1/2"></div> */}
          
          {/* Main headline */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="pt-20 ml-20 lg:ml-[500px] lg:mt-[150px] text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold font-space-grotesk text-ag-light leading-[42px] lg:leading-[70px] tracking-[-0.64px] text-shadow-lg text-right lg:text-center">
              A Whole<br className="lg:hidden"  /> Lotto Joy
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Bottom section with blue/teal geometric shapes */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Mobile shapes */}
        <div className="lg:hidden">
          {/* Dark teal shape */}
          <svg 
            className="absolute right-0 bottom-0 w-full max-w-md h-40" 
            viewBox="0 0 358 162" 
            fill="none"
            preserveAspectRatio="none"
          >
            <path d="M82.4832 0H358V162H0L82.4832 0Z" fill="#00282D"/>
          </svg>
          
          {/* Bright blue shape */}
          <svg 
            className="absolute right-[-41px] bottom-0 w-32 h-48" 
            viewBox="0 0 48 192" 
            fill="none"
          >
            <path d="M56 0L121 41V192H0L56 0Z" fill="#1D1BFB"/>
          </svg>
        </div>

        {/* Desktop shapes */}
        <div className="hidden lg:block">
          {/* Dark teal shape */}
          <svg 
            className="absolute left-[303px] bottom-0 w-[1250px] h-[190px]" 
            viewBox="0 0 1137 190" 
            fill="none"
          >
            <path d="M126.214 0H1181V190H0L126.214 0Z" fill="#00282D"/>
          </svg>
          
          {/* Bright blue shape */}
          <svg 
            className="absolute right-0 bottom-0 w-[170px] h-[190px]" 
            viewBox="0 0 169 190"  
            fill="none"
          >
            <path d="M169.214 0H221V190H0L169.214 0Z" fill="#1D1BFB"/>
          </svg>
        </div>

        {/* Text content on colored background */}
        <div className="relative z-10 px-4 pb-8 lg:pb-16 pt-8">
          <div className="lg:ml-[350px] max-w-6xl mx-auto text-center lg:text-center">
            <motion.p 
              className="px-3 text-sm lg:text-md md:text-lg lg:text-xl xl:text-[28px] font-space-grotesk font-medium text-ag-light leading-6 lg:leading-9 max-w-[246px] lg:max-w-[853px] mx-auto lg:mx-auto text-left lg:text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Lotto is stepping into its new era with Agilitas as its compass. A journey that is familiar, reborn with a new purpose.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
