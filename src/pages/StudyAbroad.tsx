import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Building, DollarSign, Clock, CheckCircle } from "lucide-react";
import { Headphones, Download } from "lucide-react";
const countries = [
  {
    id: 1,
    name: "United Kingdom",
    flag: "🇬🇧",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    universities: "150+ Partner Universities",
    avgTuition: "£15,000 - £25,000/year",
    workHours: "20 hrs/week during studies",
    highlights: [
      "World-renowned universities (Oxford, Cambridge, LSE)",
      "Post-study work visa (2 years)",
      "Rich cultural experience",
      "English-speaking environment",
    ],
    popularCourses: ["Business", "Engineering", "Medicine", "Law"],
  },
  {
    id: 2,
    name: "Canada",
    flag: "🇨🇦",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80",
    universities: "100+ Partner Universities",
    avgTuition: "CAD 15,000 - 35,000/year",
    workHours: "20 hrs/week during studies",
    highlights: [
      "High quality of life and safety",
      "Post-graduation work permit (up to 3 years)",
      "Pathway to permanent residency",
      "Multicultural society",
    ],
    popularCourses: ["IT", "Healthcare", "Business", "Engineering"],
  },
  {
    id: 3,
    name: "Germany",
    flag: "🇩🇪",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    universities: "80+ Partner Universities",
    avgTuition: "€0 - €20,000/year",
    workHours: "120 full days/year",
    highlights: [
      "Low or no tuition fees at public universities",
      "Strong focus on research and innovation",
      "18-month job seeker visa post-study",
      "Heart of Europe",
    ],
    popularCourses: ["Engineering", "Technology", "Sciences", "Arts"],
  },
  {
    id: 4,
    name: "Australia",
    flag: "🇦🇺",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
    universities: "45+ Partner Universities",
    avgTuition: "AUD 20,000 - 45,000/year",
    workHours: "48 hrs/fortnight during studies",
    highlights: [
      "8 universities in world's top 100",
      "Post-study work visa (2-4 years)",
      "High earning potential",
      "Beautiful lifestyle and climate",
    ],
    popularCourses: ["Business", "IT", "Healthcare", "Hospitality"],
  },
];

const process = [
  { step: 1, title: "Free Counseling", description: "Discuss your goals and explore options" },
  { step: 2, title: "University Selection", description: "Choose the best-fit universities" },
  { step: 3, title: "Application Support", description: "Complete and submit applications" },
  { step: 4, title: "Visa Assistance", description: "Full visa application support" },
  { step: 5, title: "Pre-Departure", description: "Orientation and travel arrangements" },
];

const StudyAbroad = () => {
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
              Study Abroad
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-4 mb-6 font-serif">
              Shape Your Future with
              <span className="text-accent"> World-Class Education</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Get expert guidance for studying at top universities in UK, Canada, Germany, and Australia
            </p>
            <Button size="lg" className="mt-8 bg-accent hover:bg-golden-dark text-accent-foreground font-semibold">
              Free Counseling Session
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#002D62] text-primary-foreground flex items-center justify-center font-bold text-lg mx-auto">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mt-2 text-sm">{item.title}</h3>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block w-16 h-0.5 bg-border mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Destinations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 font-serif">
              Choose Your Study Destination
            </h2>
          </div>

          <div className="space-y-12">
            {countries.map((country, index) => (
              <Card key={country.id} className="overflow-hidden border-0 shadow-xl">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={country.image}
                      alt={`Study in ${country.name}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 flex items-center gap-3 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-3xl">{country.flag}</span>
                      <span className="font-bold text-foreground font-serif">{country.name}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-2xl font-bold text-foreground mb-6 font-serif">
                      Study in {country.name}
                    </h3>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-secondary rounded-xl">
                        <Building className="h-6 w-6 text-[#002D62] mx-auto mb-2" />
                        <p className="text-xs text-muted-foreground">{country.universities}</p>
                      </div>
                      <div className="text-center p-4 bg-secondary rounded-xl">
                        <DollarSign className="h-6 w-6 text-accent mx-auto mb-2" />
                        <p className="text-xs text-muted-foreground">{country.avgTuition}</p>
                      </div>
                      <div className="text-center p-4 bg-secondary rounded-xl">
                        <Clock className="h-6 w-6 text-[#002D62] mx-auto mb-2" />
                        <p className="text-xs text-muted-foreground">{country.workHours}</p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3 mb-6">
                      {country.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Popular Courses */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-foreground mb-2">Popular Courses:</p>
                      <div className="flex flex-wrap gap-2">
                        {country.popularCourses.map((course) => (
                          <span key={course} className="px-3 py-1 bg-[#002D62] text-white rounded-full text-sm">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button className="bg-accent hover:bg-golden-dark text-accent-foreground">
                      <GraduationCap className="mr-2 h-5 w-5" />
                      Learn More
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Element to break the white space */}
      {/* <div className="absolute top-0 left-0 w-full h-20 bg-[#002D62]"></div> */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-[#002D62] rounded-[2rem] p-8 md:p-16 shadow-2xl border-b-8 border-[#FFD700] overflow-hidden relative">
          
          {/* Decorative Background Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ready to Start Your <br />
              <span className="text-[#FFD700]">Global Journey?</span>
            </h2>
            
            <p className="text-blue-100/80 text-lg mb-10 max-w-xl mx-auto font-light leading-relaxed">
              Book a free counseling session with our recruitment experts and take 
              the first step towards your international career.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-[#FFD700] hover:bg-white text-[#002D62] font-bold px-8 h-14 rounded-xl transition-all shadow-lg">
                <Headphones className="mr-2 h-5 w-5" />
                Book Free Counseling
              </Button>
              
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 h-14 rounded-xl backdrop-blur-sm">
                <Download className="mr-2 h-5 w-5" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default StudyAbroad;
