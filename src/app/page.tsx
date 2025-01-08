"use client"
import Hero from "@/components/Hero";
import Image from "next/image";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contacts from "@/components/Contacts";
import About from "@/components/About";


import { useEffect } from "react";
import Footer from "@/components/footer";
// import Aos from "aos";
export default function Home() {
  useEffect(() =>{
    // Aos.init({
    //   easing:"ease-out-back",
    //   delay:100,
    //   duration:1200,
    //   mirror: true,
    //   anchorPlacement: "bottom-bottom",
    //   offset:160,

    }

    );
  //   Aos.refresh()
  // },[]
  // );

  return (
    <main>
      <Hero />
      <Projects/>
      <Skills/>
      <Contacts/>
      <About/>
      <Footer/>
    </main>
  );
    
}
