import FeaturedPlants from "./components/FeaturedPlants";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import About from "./components/About";
import Store from "./components/Store"; // Import the Store component
import Maps from "./components/Maps";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <MainBanner />
        <FeaturedPlants />
        <About />
        <Store />
        <Maps />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
