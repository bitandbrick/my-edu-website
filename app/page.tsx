import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Tutors from './components/Tutors';
import About from './components/About';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Tutors />
      <About />
      <Footer />
    </div>
  );
}
