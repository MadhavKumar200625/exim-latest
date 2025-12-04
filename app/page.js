import Image from "next/image";
import Hero from "./components/HomePage/Hero";
import CountryExportSection from "./components/HomePage/ContryExportSection";
import GrowthSection from "./components/HomePage/GrowthSection";
import IndustrySection from "./components/HomePage/IndustrySection"
import SearchComponent from "./components/SearchComponent";
import CustomsSection from "./components/HomePage/CustomsSection";
import GrowWithGloabalSection from "./components/HomePage/GrowWithGloabalSection";
import WhyChooseUs from "./components/HomePage/WhyChooseUs";
import ClientsSection from "./components/ClientsSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
     
      <SearchComponent heading="Search Global Import Export Trade Data"></SearchComponent>
      
      <CountryExportSection></CountryExportSection>
      <GrowthSection></GrowthSection>
      <IndustrySection></IndustrySection>
      <CustomsSection></CustomsSection>
      <GrowWithGloabalSection></GrowWithGloabalSection>
      <WhyChooseUs></WhyChooseUs>
      <ClientsSection></ClientsSection>
      <TestimonialsSection></TestimonialsSection>
    </div>
  );
}
