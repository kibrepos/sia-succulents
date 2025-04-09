import FeaturedPlants from "./components/FeaturedPlants";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <MainBanner />
        <FeaturedPlants />
      </main>
    </div>
  );
}
