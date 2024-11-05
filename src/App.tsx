import { Header } from "./components/header";
import { Carousel } from "./components/section/carousel";
import { Hero } from "./components/section/hero";
import { Offer } from "./components/section/offer";
import { Usps } from "./components/section/usps";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-black relative z-10">
          <Hero />
          <Usps />
          <Offer />
        </div>
        <Carousel />
        <div className="h-[300vh]"></div>
      </main>
      ;
    </>
  );
}

export default App;
