import FeaturedPlants from "./components/FeaturedPlants";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import About from "./components/About";
import Maps from "./components/Maps";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <MainBanner />
        <FeaturedPlants />
        <About />
        <Maps />
      </main>
      <Footer />
    </div>
  );
}
