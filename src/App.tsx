import { SiteHeader } from './components/SiteHeader';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Work } from './components/Work';
import { Beyond } from './components/Beyond';
import { Contact } from './components/Contact';
import { SiteFooter } from './components/SiteFooter';

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Experience />
        <Work />
        <Beyond />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
