import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I apply for a job?",
    answer: "Applying for a job is simple! Browse our job listings by country or category, select the position that interests you, and click 'Apply Now'. Fill out the application form with your details, upload your resume, and our team will review your application within 2-3 business days. You can also visit our office for a personalized consultation.",
  },
  {
    question: "Do you provide visa assistance?",
    answer: "Yes, we provide comprehensive visa assistance for all our candidates. Our experienced documentation team guides you through the entire visa application process, including document preparation, interview coaching, and embassy coordination. We have a 95%+ visa approval rate for our candidates.",
  },
  {
    question: "What countries do you specialize in for Study Abroad?",
    answer: "We specialize in study abroad programs for the UK, Canada, Germany, and Australia. Each country offers unique educational opportunities, and our counselors help you choose the best fit based on your academic goals, budget, and career aspirations. We assist with university selection, application, and visa processing.",
  },
  {
    question: "How long does the placement process take?",
    answer: "The placement process typically takes 4-12 weeks depending on the destination country and job type. This includes application review, employer interviews, document processing, and visa approval. Some fast-track positions in high-demand sectors can be processed in as little as 2-3 weeks.",
  },
  {
    question: "What are your service fees?",
    answer: "Our fee structure varies based on the type of service. Initial consultation is free of charge. Job placement services include a nominal registration fee and success-based fees upon placement. All fees are transparent and discussed upfront before you commit. Contact us for a detailed fee breakdown.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mt-4">
              Find answers to common questions about our services and processes
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-xl border-0 shadow-sm px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Still have questions?{" "}
              <a href="/contact" className="text-primary font-semibold hover:text-accent transition-colors">
                Contact our team
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
