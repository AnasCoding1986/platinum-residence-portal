
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container-custom py-16">
          <h1 className="text-4xl font-cormorant font-bold text-luxury-darkblue mb-8">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Services content will go here */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
