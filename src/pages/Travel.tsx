import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Send,
  Globe2,
  ShieldCheck,
  Headphones,
  Compass,
  MapPin,
  Clock,
  CheckCircle2,
  Star,
  Users,
  Calendar,
  Sparkles,
  Plane,
  Building2,
  Utensils,
} from "lucide-react";

// Robust Travel Image Collections with Fallback Sources
const internationalTrips = [
  {
    id: 1,
    title: "Vietnam",
    duration: "6 Days / 5 Nights",
    startingPrice: "₹38,999",
    rating: "4.9",
    highlights: "Ha Long Bay Cruise, Hanoi Old Quarter, Marble Mountains",
    inclusions: ["4★ Hotel", "Flights Included", "Sightseeing", "Daily Breakfast"],
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
  },
  {
    id: 2,
    title: "Thailand",
    duration: "5 Days / 4 Nights",
    startingPrice: "₹29,500",
    rating: "4.8",
    highlights: "Bangkok Temples, Coral Island Pattaya, Floating Market",
    inclusions: ["3★/4★ Resort", "Speedboat Tour", "Airport Transfers", "Breakfast"],
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
  },
  {
    id: 3,
    title: "Malaysia",
    duration: "5 Days / 4 Nights",
    startingPrice: "₹32,000",
    rating: "4.9",
    highlights: "Petronas Towers, Genting Highlands, Batu Caves",
    inclusions: ["4★ City Hotel", "Cable Car Pass", "City Tour", "Visa Support"],
    // Clean tested Malaysia image URL from Unsplash
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
  },
];

const domesticTrips = [
  {
    id: 1,
    title: "Agra & Golden Triangle",
    duration: "3 Days / 2 Nights",
    startingPrice: "₹8,499",
    highlights: "Taj Mahal Sunrise, Agra Fort & Mehtab Bagh",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
  },
  {
    id: 2,
    title: "Delhi Heritage Tour",
    duration: "3 Days / 2 Nights",
    startingPrice: "₹7,999",
    highlights: "Qutub Minar, Red Fort & Chandni Chowk Food Tour",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
  },
  {
    id: 3,
    title: "Munnar Hills",
    duration: "3 Days / 2 Nights",
    startingPrice: "₹9,999",
    highlights: "Tea Gardens, Anamudi Peak & Mattupetty Dam",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80",
  },
  {
    id: 4,
    title: "Kashmir Paradise",
    duration: "6 Days / 5 Nights",
    startingPrice: "₹21,500",
    highlights: "Dal Lake Houseboat, Gulmarg Gondola & Pahalgam Valley",
    // Clean tested Kashmir image URL from Unsplash
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
  },
];

const ivTrips = [
  {
    id: 1,
    title: "Bangalore Tech Hub",
    groupSize: "30 - 120 Students",
    description: "Hands-on exposure to software technology parks, R&D centers, and innovation labs.",
    tags: ["IT & CS Dept", "Data Centers", "Startup Incubators"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: 2,
    title: "Hyderabad InfoPark",
    groupSize: "40 - 150 Students",
    description: "Interactive corporate sessions with software engineers and cloud infrastructure teams.",
    tags: ["Tech Seminars", "Corporate Campus", "Cyberabad"],
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
  },
  {
    id: 3,
    title: "Chennai Auto Zone",
    groupSize: "30 - 100 Students",
    description: "Real-time automated manufacturing plant tours, robotics assembly lines & QC checks.",
    tags: ["Mechanical Dept", "Robotics", "Factory Floor"],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  },
];

const features = [
  {
    icon: Compass,
    title: "Tailored Itineraries",
    description: "Custom-designed travel packages crafted to fit your exact schedule, group size, and budget.",
  },
  {
    icon: ShieldCheck,
    title: "Seamless Visa & Flights",
    description: "Complete end-to-end assistance for visa processing, flight tickets, and local travel insurance.",
  },
  {
    icon: Headphones,
    title: "24/7 On-Trip Support",
    description: "Dedicated trip coordinator assigned to your group throughout the journey for prompt assistance.",
  },
  {
    icon: Globe2,
    title: "Verified Global Partners",
    description: "Direct ties with certified 3★ to 5★ hoteliers, licensed local tour guides, and luxury bus fleets.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Pick Your Destination",
    desc: "Select from our featured international, domestic, or IV catalog.",
  },
  {
    step: "02",
    title: "Tailor Your Plan",
    desc: "Share your travel dates, preferred hotels, and group headcounts.",
  },
  {
    step: "03",
    title: "Hassle-free Booking",
    desc: "We lock in visa applications, flight rates, and hotel stays.",
  },
  {
    step: "04",
    title: "Fly & Explore",
    desc: "Relax with 24/7 dedicated local assistance throughout your trip.",
  },
];

const reviews = [
  {
    name: "Dr. Ananya Sharma",
    role: "HOD, Computer Science Dept",
    text: "Organizing an IV for 80 students to Bangalore was completely seamless. Accommodations and factory permits were managed perfectly.",
    rating: 5,
  },
  {
    name: "Rohan & Family",
    role: "Vietnam Tour Travelers",
    text: "Ha Long Bay cruise and Hanoi city tour were planned down to the minute. Incredible experience with complete peace of mind.",
    rating: 5,
  },
  {
    name: "Karthik Nair",
    role: "Kashmir Family Trip",
    text: "The houseboat stay in Srinagar and Gulmarg gondola bookings were effortlessly handled by the team. Highly recommended!",
    rating: 5,
  },
];

const Travel = () => {
  const handleEnquiry = (destination?: string) => {
    if (destination) {
      window.location.href = `/contact?destination=${encodeURIComponent(destination)}`;
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-[#002D62] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Travel & Leisure Division
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-4 mb-6 font-serif leading-tight">
              Explore the World
              <span className="text-accent"> With Confidence</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              From family vacations and international getaways to academic industrial visits, we handle every detail so you travel stress-free.
            </p>

            {/* Quick Stats Bar */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 max-w-xl mx-auto text-primary-foreground">
              <div>
                <p className="text-2xl font-bold text-accent">50+</p>
                <p className="text-xs opacity-80 uppercase tracking-wider">Destinations</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">12,000+</p>
                <p className="text-xs opacity-80 uppercase tracking-wider">Happy Travelers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">100%</p>
                <p className="text-xs opacity-80 uppercase tracking-wider">Guided Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions / Why Choose Us */}
      <section className="py-16 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-start p-5 rounded-xl border bg-card hover:shadow-md transition-shadow">
                <div className="p-3 rounded-lg bg-[#002D62]/10 text-[#002D62] mb-4">
                  <feature.icon className="h-6 w-6 text-[#002D62]" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
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
              International Tour Packages
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto text-sm">
              All-inclusive international packages featuring visa guidance, premium stays, sightseeing, and direct flights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internationalTrips.map((trip) => (
              <Card
                key={trip.id}
                className="overflow-hidden group border shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-72 overflow-hidden bg-muted">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      onError={(e) => {
                        // Fallback image source if Unsplash fails to load
                        e.currentTarget.src = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80";
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    
                    {/* Badge Overlay */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-[#002D62] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {trip.duration}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
                      <Star className="h-3 w-3 fill-accent-foreground" /> {trip.rating}
                    </div>

                    <div className="absolute bottom-4 left-5 right-5">
                      <p className="text-accent text-xs font-bold uppercase tracking-wider mb-1">
                        Starting from {trip.startingPrice} / person
                      </p>
                      <h3 className="text-2xl font-bold text-white font-serif mb-1">
                        {trip.title}
                      </h3>
                      <p className="text-white/80 text-xs line-clamp-1 flex items-center gap-1">
                        <MapPin className="h-3 w-3 shrink-0 text-accent" />
                        {trip.highlights}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-card border-t border-border">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Package Inclusions:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {trip.inclusions.map((inc, i) => (
                        <span key={i} className="text-[11px] bg-muted text-foreground px-2.5 py-1 rounded-md flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3 text-accent" /> {inc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 bg-card">
                  <Button
                    onClick={() => handleEnquiry(trip.title)}
                    size="sm"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-2.5 h-auto shadow"
                  >
                    Enquire International Package
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Domestic Tours */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Explore Locally
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 font-serif">
              Popular Domestic Tours
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto text-sm">
              Discover the beauty, heritage, and scenic wonders of India with custom itineraries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {domesticTrips.map((trip) => (
              <Card
                key={trip.id}
                className="overflow-hidden group border shadow-md hover:shadow-xl transition-all duration-300 bg-background flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-muted">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1506461883276-594a12b11ce3?w=800&q=80";
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    
                    <div className="absolute top-3 left-3 bg-[#002D62] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {trip.duration}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-accent text-[11px] font-bold uppercase mb-0.5">
                        Starts at {trip.startingPrice}
                      </p>
                      <h3 className="text-lg font-bold text-white font-serif mb-1">
                        {trip.title}
                      </h3>
                      <p className="text-white/70 text-[11px] line-clamp-1">
                        {trip.highlights}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-background">
                  <Button
                    onClick={() => handleEnquiry(trip.title)}
                    size="sm"
                    className="w-full bg-accent hover:bg-[#002D62] text-accent-foreground hover:text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md py-2.5 h-auto rounded-md"
                  >
                    Enquire Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - How it Works */}
      <section className="py-20 bg-background border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Simple & Transparent
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 font-serif">
              How Your Journey Begins
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative p-6 rounded-xl border bg-card text-center flex flex-col items-center">
                <span className="text-4xl font-bold font-serif text-[#002D62]/20 mb-2">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Visits (IV) */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Educational & Institutional Tours
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 font-serif">
              Industrial Visit (IV) Programs
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm">
              We arrange turnkey educational tours for colleges and universities, combining real-world corporate exposures with comfortable logistics and leisure extensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ivTrips.map((trip) => (
              <Card
                key={trip.id}
                className="overflow-hidden group border shadow-lg hover:shadow-xl transition-all duration-300 bg-background flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-muted">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute top-3 right-3 bg-[#002D62] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                      <Users className="h-3 w-3" /> {trip.groupSize}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground font-serif mb-2">
                      {trip.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                      {trip.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {trip.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] bg-muted/80 text-foreground font-medium px-2 py-0.5 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2 text-xs text-muted-foreground border-t pt-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                        <span>Factory / Office Approval Assistance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                        <span>Luxury Bus Fleet & 3★ Hotel Stay</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                        <span>Faculty Accommodation Compliments</span>
                      </li>
                    </ul>
                  </CardContent>
                </div>

                <div className="p-6 pt-0">
                  <Button
                    onClick={() => handleEnquiry(`IV - ${trip.title}`)}
                    className="w-full bg-[#002D62] text-white hover:bg-[#001f44] font-medium text-sm py-2.5 h-auto"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Enquire for IV Group
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Traveler Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 font-serif">
              What Our Travelers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev, rIdx) => (
              <div key={rIdx} className="p-6 rounded-xl border bg-card shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed italic mb-4">
                    "{rev.text}"
                  </p>
                </div>
                <div className="border-t pt-3">
                  <h4 className="text-sm font-bold text-foreground">{rev.name}</h4>
                  <p className="text-[11px] text-muted-foreground">{rev.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-[#002D62] text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Planning a Custom Group Trip or Vacation?
          </h2>
          <p className="text-white/80 text-sm mb-8 leading-relaxed">
            Get personalized itinerary quotes, hotel options, and group discount pricing within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => handleEnquiry("Custom Trip Inquiry")}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8"
            >
              Request Custom Itinerary
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Travel;