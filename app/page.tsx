import Hero from "@/components/sections/Hero";
import WhoIAm from "@/components/sections/WhoIAm";
import PersonalTraining from "@/components/sections/PersonalTraining";
import Footer from "@/components/sections/Footer";
import Result from "@/components/sections/Result";
import Booking from "@/components/sections/Booking";
import Posts from "@/components/sections/Posts";
export default function Home() {
  return (
    <div>
      <Hero />
      <WhoIAm />
      <PersonalTraining />
      <Result />
      <Booking />
      <Posts />
      <Footer />
    </div>
  );
}
