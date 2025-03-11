
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container-custom py-16">
          <h1 className="text-4xl font-cormorant font-bold text-luxury-darkblue mb-8">
            About Platinum Residence
          </h1>
          <div className="prose max-w-none">
            <p className="text-lg text-platinum-600 mb-6">
              Platinum Residence is Sylhet's premier luxury real estate company, dedicated to connecting
              discerning clients with exceptional properties that reflect the highest standards of
              quality and elegance.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
