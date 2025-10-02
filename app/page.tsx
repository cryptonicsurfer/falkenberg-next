import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DreamBigger from '@/components/DreamBigger';
import ProgressTracker from '@/components/ProgressTracker';
import QualityOfLife from '@/components/QualityOfLife';
import InsightsTabs from '@/components/InsightsTabs';
import {
  DeveloperCallout,
  ReadySetBuild,
  FiveReasons,
  WestCoastLocation,
  GrowWithFalkenberg,
  Contact,
  Footer
} from '@/components/RemainingSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <DreamBigger /> */}
        <QualityOfLife />
        <ProgressTracker />
        <InsightsTabs />
        <DeveloperCallout />
        <ReadySetBuild />
        <FiveReasons />
        <WestCoastLocation />
        <GrowWithFalkenberg />
        <Contact />
        <Footer />
      </main>
    </>
  );
}