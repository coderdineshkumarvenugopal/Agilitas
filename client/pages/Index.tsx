import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { OurVisionSection } from '@/components/OurVisionSection';
import { TraditionSection } from '@/components/TraditionSection';
import { AglitasPresenceSection } from '@/components/AglitasPresenceSection';
import { ComingSoonSection } from '@/components/ComingSoonSection';
import { JoinMovementSection } from '@/components/JoinMovementSection';
import { ExploreSection } from '@/components/ExploreSection';
import { Footer } from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className=" lg:pt-0">
        <HeroSection />
        <OurVisionSection />
        <TraditionSection />
        <AglitasPresenceSection />
        <ComingSoonSection />
        <JoinMovementSection />
        <ExploreSection />
      </main>
      
      <Footer />
    </div>
  );
}
