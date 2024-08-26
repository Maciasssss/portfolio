import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/Footer";
import {Contact} from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative dark:bg-blue-900 flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="max-w7-7xl w-full">
        <Hero/>
        <FloatingNav navItems={navItems} />
        <RecentProjects />
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}
