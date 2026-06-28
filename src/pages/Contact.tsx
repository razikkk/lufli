import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Separated Branch-specific data from generic contact info
const branches = [
  {
    name: "Head Office",
    icon: MapPin,
    address: ["Apco Hyundai, Puthiyara, Kozhikode, Kerala 673004"],
    phones: ["+91 8891416777", "+91 8891426777"],
  },
  {
    name: "Regional Branch",
    icon: MapPin,
    address: ["First Floor, & CO, X6HW+FQM National Highway 966 BROS, Dubaipadi, Ponniakurussi, Perinthalmanna, Kerala 679322"],
    phones: ["+91 8891416777", "+91 8891426777"],
  },
];

const globalContact = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@lufliinternational.com", "hr@lufliinternational.com"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Saturday: 9AM - 6PM", "Closed on Sundays"],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-28 bg-[#002D62] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-4 mb-6 font-serif">
              Let's Start Your
              <span className="text-accent"> Journey Together</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Have questions or ready to take the next step? Connect with our global offices or drop us a direct line below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Core Section: Split Layout Info vs Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Hand Side: Structured Corporate Desk details (Columns 5) */}
            <div className="lg:col-span-5 space-y-10">
              
              {/* Branch Network */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground font-serif tracking-tight">Our Branches</h2>
                <p className="text-muted-foreground text-sm">Visit our corporate establishments for regional consulting and operations.</p>
                <div className="space-y-4 pt-2">
                  {branches.map((branch) => (
                    <Card key={branch.name} className="border border-muted/60 shadow-sm hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-[#002D62]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <branch.icon className="h-5 w-5 text-[#002D62]" />
                          </div>
                          <div className="space-y-3 flex-1">
                            <h3 className="font-bold text-foreground font-serif text-lg leading-none">{branch.name}</h3>
                            <div className="text-sm text-muted-foreground leading-relaxed">
                              {branch.address.map((line, i) => (
                                <p key={i}>{line}</p>
                              ))}
                            </div>
                            <div className="pt-3 border-t border-muted/60 text-sm font-medium text-foreground space-y-1">
                              {branch.phones.map((phone, i) => (
                                <p key={i} className="flex items-center gap-2">
                                  <Phone className="h-3.5 w-3.5 text-[#002D62]" /> {phone}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Global Channels */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground font-serif tracking-tight">Direct Communications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {globalContact.map((info) => (
                    <Card key={info.title} className="border border-muted/40 bg-muted/10 shadow-none">
                      <CardContent className="p-5">
                        <div className="w-9 h-9 rounded-md bg-[#002D62] flex items-center justify-center mb-3">
                          <info.icon className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <h3 className="font-bold text-foreground font-serif text-sm mb-1.5">{info.title}</h3>
                        {info.details.map((detail, index) => (
                          <p key={index} className="text-muted-foreground text-xs leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Hand Side: High Converting Contact Desk Form (Columns 7) */}
            <div className="lg:col-span-7">
              <div className="space-y-4 mb-6">
                <h2 className="text-2xl font-bold text-foreground font-serif tracking-tight">Send Us a Message</h2>
                <p className="text-muted-foreground text-sm">Fill out the official inquiry document below, and an expert consultant will contact you within 24 hours.</p>
              </div>
              
              <Card className="border border-muted/60 shadow-xl shadow-muted/20 rounded-2xl">
                <CardContent className="p-6 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-12 border-muted hover:border-[#002D62]/50 focus-visible:ring-[#002D62]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-12 border-muted hover:border-[#002D62]/50 focus-visible:ring-[#002D62]"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-12 border-muted hover:border-[#002D62]/50 focus-visible:ring-[#002D62]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="h-12 border-muted hover:border-[#002D62]/50 focus-visible:ring-[#002D62]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="resize-none border-muted hover:border-[#002D62]/50 focus-visible:ring-[#002D62]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#002D62] hover:bg-[#001f44] text-white font-semibold tracking-wide shadow-lg transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Submit Inquiry
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;