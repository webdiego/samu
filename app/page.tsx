import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoIAm from "@/components/WhoIAm";
import PersonalTraining from "@/components/PersonalTraining";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhoIAm />
      <PersonalTraining />
    </div>
  );
}
