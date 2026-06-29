import Layout from "@/components/layout/Layout";
import { Users, Award, Target, Heart } from "lucide-react";

const teamMembers = [
  {
    name: "Jazna",
    position: "Hr recruiter",
    image: "/jazna.PNG",
  },
  {
    name: "Falah",
    position: "Hr recruiter",
    image: "/falah.png",
  },
  {
    name: "Muneera",
    position: "Admission Counsellor",
    image: "muneera.jpg",
  },
  {
    name: "Anjitha",
    position: "Hr recruiter",
    image: "anjitha.JPG",
  },
  {
    name: "Masroora",
    position: "Hr recruiter",
    image: "masroora.jpg",
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
      <section className="relative py-24 bg-[#002D62] to-royal-dark overflow-hidden">
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
              Your Trusted Partner for Global Opportunities
                            </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                Lufli International is a leading manpower firm dedicated to connecting talented individuals with the right career opportunities across the globe. For over a decade, we have been at the forefront of recruitment, helping people secure meaningful jobs that build stable futures for themselves and their families.

Our mission goes beyond placement—we aim to transform lives. By understanding both employer needs and candidate aspirations, we create opportunities that ensure long-term success and growth.


                </p>
                <p>
                With a strong network of global employers and industry expertise, we provide end-to-end manpower solutions, including recruitment, visa assistance, documentation, and career guidance. Every step of the journey is handled with care, transparency, and professionalism.

At Lufli International, we don’t just find jobs—we help build careers, strengthen families, and shape a better future.
                </p>
               
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
             
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
                <div className="w-14 h-14 rounded-xl bg-[#002D62] flex items-center justify-center mb-6">
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
        {/* Section Header */}
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

        {/* Balanced Grid: Centered on mobile, 3 items on tablet, 5 items on desktop */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="group text-center sm:w-[calc(33.333%-16px)] lg:w-auto">
              <div className="relative rounded-xl overflow-hidden mb-4 aspect-square shadow-sm">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002D62]/90 via-[#002D62]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-[#002D62] transition-colors">
                {member.name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default About;
