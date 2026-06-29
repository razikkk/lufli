import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";

const internationalTrips = [
  {
    id: 1,
    title: "Vietnam",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
  },
  {
    id: 2,
    title: "Thailand",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
  },
  {
    id: 3,
    title: "Malaysia",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc18a523?w=800&q=80",
  },
];

const domesticTrips = [
  {
    id: 1,
    title: "Agra",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
  },
  {
    id: 2,
    title: "Delhi",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
  },
  {
    id: 3,
    title: "Munnar",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80",
  },
  {
    id: 4,
    title: "Kashmir",
    image: "https://images.unsplash.com/photo-1566837430227-688145d47445?w=800&q=80",
  },
];

const ivTrips = [
  {
    id: 1,
    title: "Bangalore Tech Hub",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: 2,
    title: "Hyderabad InfoPark",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
  },
  {
    id: 3,
    title: "Chennai Auto Zone",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  },
];

const Travel = () => {
  const handleEnquiry = () => {
    window.location.href = "/contact";
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-[#002D62] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Travel Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-4 mb-6 font-serif">
              Explore the World
              <span className="text-accent"> With Us</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Our travel division offers dependable and personalized travel solutions, ensuring
              smooth, hassle-free experiences for leisure, business, and educational travel needs.
            </p>
          </div>
        </div>
      </section>

      {/* International Tours */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Global Destinations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 font-serif">
              International Tours
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internationalTrips.map((trip) => (
              <Card key={trip.id} className="overflow-hidden group border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                    <h3 className="text-2xl font-bold text-white font-serif">{trip.title}</h3>
                    <Button 
                      onClick={handleEnquiry}
                      size="sm"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Domestic Tours */}
     {/* Domestic Tours */}
     <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Explore Locally
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 font-serif">
              Domestic Tours
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {domesticTrips.map((trip) => (
              <Card key={trip.id} className="overflow-hidden group border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-background">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white font-serif mb-3">{trip.title}</h3>
                    
                    {/* Premium, High-Converting Enquiry Button */}
                    <Button 
                      onClick={handleEnquiry}
                      size="sm"
                      className="w-full bg-accent hover:bg-[#002D62] text-accent-foreground hover:text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md py-2.5 h-auto rounded-md"
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Visits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Educational Tours
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 font-serif">
              Industrial Visits
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Gain valuable industry insights through our curated industrial visit programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ivTrips.map((trip) => (
              <Card key={trip.id} className="overflow-hidden group border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                    <h3 className="text-xl font-bold text-white font-serif">{trip.title}</h3>
                    <Button 
                      onClick={handleEnquiry}
                      className="bg-[#002D62] text-white hover:bg-[#001f44] font-medium"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Enquire
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Travel;