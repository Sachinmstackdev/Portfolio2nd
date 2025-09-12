import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Testimonials } from '@/components/sections/Testimonials';
//import { Content } from '@/components/sections/Content';
import { Contact } from '@/components/sections/Contact';
import { FAQ } from '@/components/sections/FAQ';

export default function Home() {
  return (
    <div className="pt-0">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      {/*<Content />*/}
      <Contact />
      <FAQ />
    </div>
  );
} 