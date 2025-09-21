import PlantHero from '../components/PlantHero';
import ProductGrid from '../components/ProductGrid';
import PlantCareSection from '../components/PlantCareSection';
import PartnersSection from '../components/PartnersSection';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <PlantHero />
      <ProductGrid />
      <PlantCareSection />
      <PartnersSection />
    </main>
  );
}
