import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Solutions from './components/Solutions';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Solutions />
      <CTA />
      <Footer />
    </div>
  );
}
