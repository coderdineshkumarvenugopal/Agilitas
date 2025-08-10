import { motion } from 'framer-motion';

export function OurVisionSection() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Pink decorative line on the right */}
      <div className="absolute right-0 top-0 h-full w-px">
                
        {/* Desktop pink line */}
        <svg 
          className="hidden lg:block absolute right-[50px] top-[600px] w-[330px] h-[1000px]" 
          viewBox="0 0 129 492" 
          fill="none"
        >
          <path 
            d="M88 48 L1 140 V230.094" 
            stroke="#FF004F" 
            strokeWidth="2"
          />
        </svg>
      </div>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-space-grotesk font-semibold text-black mb-4 tracking-[-0.09px] leading-[36px]">
            Tradition in Transition
          </h2>
          <p className="text-base lg:text-lg font-ibm-plex-sans text-black leading-6 max-w-[266px] mx-auto">
            Reimagining a legacy fit to move with you
          </p>
        </motion.div>
      </div>
    </section>
  );
}
