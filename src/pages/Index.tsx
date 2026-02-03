import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import JobsSlider from "@/components/home/JobsSlider";
import AboutPreview from "@/components/home/AboutPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HiringGallery from "@/components/home/HiringGallery";
import FAQSection from "@/components/home/FAQSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <JobsSlider />
      <AboutPreview />
      <WhyChooseUs />
      <HiringGallery />
      <FAQSection />
    </Layout>
  );
};

export default Index;
