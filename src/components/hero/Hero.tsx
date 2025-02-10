import ContactInfo from "../contactInfo/ContactInfo";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      setIsFixed(window.scrollY > heroHeight * 2);
    };

    window.addEventListener("scroll", handleScroll);
    /* return () => window.removeEventListener("scroll", handleScroll); */
  }, []);

  return (
    <div className="h-screen w-screen flex justify-end items-end">
      <div
        id="hero"
        className={`transition-all ease-in-out duration-50 ${
          isFixed
            ? "fixed items-center top-0 left-0 z-40 w-1/4 h-screen p-4 shadow-lg flex flex-col bg-white"
            : "relative w-4/5 inline-grid grid-rows-2 grid-cols-3"
        }`}
      >
        <div
          className={`${
            isFixed
              ? "text-start text-7xl w-full"
              : "col-span-2 row-start-2 flex items-start justify-end text-nowrap text-8xl text-end leading-25 px-4"
          }`}
        >
          <h1 className="font-light uppercase">Judith Tamayo</h1>
        </div>
        <div
          className={`flex items-end ${
            isFixed
              ? "text-start text-5xl w-full"
              : "text-end col-start-2 row-start-1 text-6xl px-4"
          }`}
        >
          <h2 className="font-extralight tracking-wider uppercase">
            Full Stack Developer
          </h2>
        </div>
        <div
          className={`flex items-end ${
            isFixed ? "w-full" : "col-start-3 row-start-1 px-4"
          }`}
        >
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Hero;
