import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import JobsSlider from "@/components/home/JobsSlider";
import AboutPreview from "@/components/home/AboutPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HiringGallery from "@/components/home/HiringGallery";
import FAQSection from "@/components/home/FAQSection";
import CanidatesGallery from "@/components/home/CanidatesGallery";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <JobsSlider />
      <AboutPreview />
      <WhyChooseUs />
      <HiringGallery />
      <CanidatesGallery/>
      <FAQSection />
    </Layout>
  );
};

export default Index;
