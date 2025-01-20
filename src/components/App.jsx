import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import ProductSection from "./ProductSection";

const App = () => {
  return (
    <div className="flex justify-center">
      <div className="decorativeImage max-w-[20.94rem] md:max-w-[42.5rem] xl:max-w-[70rem]">
        <Header />
        <main>
          <Hero />
          <ProductSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
