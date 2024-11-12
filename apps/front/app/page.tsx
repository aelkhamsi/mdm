import HeroSection from "@/app/components/home/hero-section";
import SecondSection from "@/app/components/home/second-section";
import ThirdSection from "@/app/components/home/third-section";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
    </>
  );
}

