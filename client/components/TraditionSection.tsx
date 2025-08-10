import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export function TraditionSection() {
  return (
    <section className="py-8 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile Layout - Single column stacked */}
        <div className="lg:hidden space-y-16 ">
          {/* Sport & Swagger */}
          <motion.div className="relative" variants={itemVariants}>
            {/* Image */}
            <div className="w-full max-w-sm mx-auto aspect-[9/10] mb-6 overflow-hidden ">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/a2cc571b5576c64a3a11d38e342d197a4bbda620?width=706" 
                alt="Sport & Swagger" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="text-center max-w-xs mx-auto">
              <h3 className="text-2xl font-space-grotesk font-bold text-black mb-3 leading-8">
                Sport & Swagger
              </h3>
              <p className="text-base font-ibm-plex-sans text-black leading-6">
                Function first, fashion-always.
              </p>
            </div>
          </motion.div>

          {/* Culture in Motion */}
          <motion.div className="relative" variants={itemVariants}>
            {/* Image */}
            <div className="w-full max-w-sm mx-auto aspect-[9/10] mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/42f0538fa1ef1cc46bb8bcc965020840b5de39fc?width=716" 
                alt="Culture in Motion" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="text-center max-w-xs mx-auto">
              <h3 className="text-2xl font-space-grotesk font-bold text-black mb-3 leading-8">
                Culture in Motion
              </h3>
              <p className="text-base font-ibm-plex-sans text-black leading-6">
                Rewriting culture through rhythm, rebellion and raw expression.
              </p>
            </div>
          </motion.div>

          {/* Live in Motion */}
          <motion.div className="relative" variants={itemVariants}>
            {/* Image */}
            <div className="w-full max-w-sm mx-auto aspect-[9/10] mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/f7a692ab653b7c75a5dc34ddb5e28a6806f06070?width=723" 
                alt="Live in Motion" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="text-center max-w-xs mx-auto">
              <h3 className="text-2xl font-space-grotesk font-bold text-black mb-3 leading-8">
                Live in Motion
              </h3>
              <p className="text-base font-ibm-plex-sans text-black leading-6">
                Made to move in all the ways that feel like you.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout - Single column on mobile, three columns on desktop */}
        <motion.div 
          className="hidden lg:grid space-y-12 lg:space-y-0 lg:grid-cols-3 lg:gap-12 transform skew-x-[-10deg]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          
          {/* Sport & Swagger */}
          <motion.div className="relative" variants={itemVariants}>
            {/* Image */}
            <div className="aspect-[343/378] lg:aspect-[411/453] overflow-hidden mb-6">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/a2cc571b5576c64a3a11d38e342d197a4bbda620?width=706" 
                alt="Sport & Swagger" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="text-center transform skew-x-[10deg]">
              <h3 className="text-2xl lg:text-[28px] font-space-grotesk font-bold text-black mb-3 leading-8 lg:leading-9">
                Sport & Swagger
              </h3>
              <p className="text-base lg:text-lg font-ibm-plex-sans text-black leading-6 lg:leading-7">
                Function first, fashion-always.
              </p>
            </div>
          </motion.div>

          {/* Culture in Motion */}
          <motion.div className="relative" variants={itemVariants}>
            {/* Image */}
            <div className="aspect-[341/376] lg:aspect-[411/453] overflow-hidden mb-6">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/42f0538fa1ef1cc46bb8bcc965020840b5de39fc?width=716" 
                alt="Culture in Motion" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="text-center transform skew-x-[10deg]">
              <h3 className="text-2xl lg:text-[28px] font-space-grotesk font-bold text-black mb-3 leading-8 lg:leading-9">
                Culture in Motion
              </h3>
              <p className="text-base lg:text-lg font-ibm-plex-sans text-black leading-6 lg:leading-7">
                Rewriting culture through rhythm, rebellion and raw expression.
              </p>
            </div>
          </motion.div>

          {/* Live in Motion */}
          <motion.div className="relative" variants={itemVariants}>
            {/* Image */}
            <div className="aspect-[344/379] lg:aspect-[411/453] overflow-hidden mb-6">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/f7a692ab653b7c75a5dc34ddb5e28a6806f06070?width=723" 
                alt="Live in Motion" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="text-center transform skew-x-[10deg]">
              <h3 className="text-2xl lg:text-[28px] font-space-grotesk font-bold text-black mb-3 leading-8 lg:leading-9">
                Live in Motion
              </h3>
              <p className="text-base lg:text-lg font-ibm-plex-sans text-black leading-6 lg:leading-7">
                Made to move in all the ways that feel like you.
              </p>
            </div>
          </motion.div>
        </motion.div>

        
      </div>
    </section>
  );
}
