import Layout from "@/components/layout/Layout";
import { Users, Award, Target, Heart } from "lucide-react";

const teamMembers = [
  {
    name: "James Wilson",
    position: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Sarah Chen",
    position: "Director of Operations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Michael Brown",
    position: "Head of Recruitment",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Emily Davis",
    position: "Visa Specialist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    name: "David Kim",
    position: "Study Abroad Advisor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Lisa Anderson",
    position: "Client Relations Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
  },
];

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To connect talented individuals with global opportunities while providing exceptional service and support throughout their journey.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in all our services, ensuring every client receives the best possible guidance and outcomes.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honesty and transparency are at the core of everything we do. We build trust through ethical practices and genuine care.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We believe in building lasting relationships with our clients and partners, working together towards shared success.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-royal-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-4 mb-6 font-serif">
              Building Bridges to
              <span className="text-accent"> Global Success</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Since 2014, we've been helping professionals achieve their international career dreams
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 font-serif">
                A Decade of Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Lufli was founded in 2014 with a simple yet powerful vision: 
                  to make international opportunities accessible to everyone. What started as 
                  a small office with just three dedicated professionals has grown into a 
                  comprehensive consultancy serving thousands of clients across the globe.
                </p>
                <p>
                  Our journey began when our founder, James Wilson, experienced firsthand 
                  the challenges of navigating international job markets. Determined to help 
                  others avoid similar struggles, he established Lufli as a 
                  one-stop solution for job placement, visa assistance, and career development.
                </p>
                <p>
                  Today, we're proud to have facilitated over 10,000 successful placements in 
                  more than 50 countries. Our team has grown to include specialists in 
                  recruitment, immigration, travel, and education—all working together to 
                  help our clients achieve their dreams.
                </p>
                <p>
                  As we look to the future, we remain committed to our core values of 
                  integrity, excellence, and personalized service. Every success story from 
                  our clients fuels our passion to do even more.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-accent text-accent-foreground p-8 rounded-2xl shadow-xl">
                <p className="text-5xl font-bold font-serif">10+</p>
                <p className="text-sm mt-1">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 font-serif">
              What Drives Us Forward
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                  <value.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-serif">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 font-serif">
              Meet the Experts
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our dedicated team of professionals brings together decades of experience 
              in recruitment, immigration, and career development
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative rounded-xl overflow-hidden mb-4 aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
