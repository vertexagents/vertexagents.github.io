import { Navigation } from '@/app/components/navigation';
import { Hero } from '@/app/components/hero';
import { Services } from '@/app/components/services';
import { CaseStudies } from '@/app/components/case-studies';
import { Team } from '@/app/components/team';
import { Contact } from '@/app/components/contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <CaseStudies />
      <Team />
      <Contact />
    </div>
  );
}
