import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Clock, Star } from "lucide-react";

const internationalTrips = [
  {
    id: 1,
    title: "Explore Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    duration: "5 Days / 4 Nights",
    price: "$1,299",
    highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Marina Cruise"],
    rating: 4.9,
    groupSize: "Max 15",
    featured: true,
  },
  {
    id: 2,
    title: "Paris Romance",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    duration: "6 Days / 5 Nights",
    price: "$1,899",
    highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise", "Versailles"],
    rating: 4.8,
    groupSize: "Max 12",
    featured: false,
  },
  {
    id: 3,
    title: "Swiss Alps Adventure",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    duration: "7 Days / 6 Nights",
    price: "$2,499",
    highlights: ["Jungfrau", "Lucerne", "Interlaken", "Zermatt"],
    rating: 4.9,
    groupSize: "Max 10",
    featured: false,
  },
];

const domesticTrips = [
  {
    id: 1,
    title: "New York City",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&q=80",
    duration: "3 Days",
    price: "$599",
  },
  {
    id: 2,
    title: "Las Vegas",
    image: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=600&q=80",
    duration: "4 Days",
    price: "$749",
  },
  {
    id: 3,
    title: "Miami Beach",
    image: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=600&q=80",
    duration: "3 Days",
    price: "$549",
  },
  {
    id: 4,
    title: "Grand Canyon",
    image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=600&q=80",
    duration: "2 Days",
    price: "$399",
  },
];

const ivTrips = [
  {
    id: 1,
    title: "Silicon Valley Tech Tour",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
    duration: "5 Days",
    price: "$1,199",
    type: "Industrial",
  },
  {
    id: 2,
    title: "Wall Street Finance Tour",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    duration: "3 Days",
    price: "$899",
    type: "Industrial",
  },
  {
    id: 3,
    title: "Detroit Automotive Tour",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    duration: "4 Days",
    price: "$999",
    type: "Industrial",
  },
];

const Travel = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-[#002D62] to-royal-dark overflow-hidden">
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

      {/* Featured International Trip */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Featured Destination
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 font-serif">
              International Tours
            </h2>
          </div>

          {/* Featured Trip - Large Card */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <img
                src={internationalTrips[0].image}
                alt={internationalTrips[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
                <h3 className="text-3xl font-bold text-background mt-4 font-serif">
                  {internationalTrips[0].title}
                </h3>
                <div className="flex flex-wrap gap-4 mt-4 text-background/80">
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {internationalTrips[0].duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {internationalTrips[0].groupSize}
                  </span>
                  <span className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-accent" fill="currentColor" />
                    {internationalTrips[0].rating}
                  </span>
                </div>
                <p className="text-3xl font-bold text-accent mt-4">
                  {internationalTrips[0].price}
                  <span className="text-base font-normal text-background/80">/person</span>
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {internationalTrips.slice(1).map((trip) => (
                <Card key={trip.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex">
                    <div className="w-1/3 h-48">
                      <img
                        src={trip.image}
                        alt={trip.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="flex-1 p-6">
                      <h3 className="text-xl font-bold text-foreground font-serif">{trip.title}</h3>
                      <div className="flex gap-4 mt-2 text-muted-foreground text-sm">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {trip.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-accent" fill="currentColor" />
                          {trip.rating}
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-[#002D62] mt-3">{trip.price}</p>
                      <Button className="mt-4 bg-[#002D62] hover:bg-royal-dark" size="sm">
                        View Details
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Domestic Trips */}
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
              <Card key={trip.id} className="overflow-hidden group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg font-bold text-background">{trip.title}</h3>
                    <p className="text-background/80 text-sm">{trip.duration}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-bold text-[#002D62]">{trip.price}</p>
                    <Button size="sm" variant="outline" className="border-[#002D62] text-[#002D62] hover:bg-[#002D62] hover:text-white">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
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

          <div className="grid md:grid-cols-3 gap-8">
            {ivTrips.map((trip) => (
              <Card key={trip.id} className="overflow-hidden group border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#002D62] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {trip.type}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground font-serif">{trip.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2">
                    <Calendar className="h-4 w-4" />
                    <span>{trip.duration}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-2xl font-bold text-[#002D62]">{trip.price}</p>
                    <Button className="bg-accent hover:bg-golden-dark text-accent-foreground">
                      Enquire
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Travel;
