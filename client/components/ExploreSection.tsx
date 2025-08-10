import { ExternalLink } from 'lucide-react';

export function ExploreSection() {
  return (
    <section className="bg-ag-dark-teal py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-space-grotesk font-semibold text-ag-bright-pink mb-6 tracking-[-0.09px] leading-[44px]">
          Explore Lotto
        </h2>
        
        <a 
          href="https://www.lottosport.in" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 text-ag-light hover:text-white transition-colors group"
        >
          <span className="text-2xl lg:text-[28px] font-space-grotesk font-medium underline decoration-ag-light decoration-2 underline-offset-4">
            www.lottosport.in
          </span>
          <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
