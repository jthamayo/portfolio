import ContactInfo from "../contactInfo/ContactInfo";
import useScrollStatus from "../../hooks/useScrollStatus";

const Hero = () => {
  const isScrolled = useScrollStatus();

  return (
    <div
      id="home"
      className="h-screen w-screen flex justify-end items-end shadow-lg"
    >
      <div
        id="hero"
        className="transition-all ease-in-out duration-50 relative w-4/5 inline-grid grid-rows-2 grid-cols-3"
      >
        <div
          className={`col-span-2 row-start-2 flex items-start justify-end text-nowrap text-8xl text-end leading-25 px-4 transition-all ease-in-out duration-600 ${
            isScrolled
              ? "-translate-x-400 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <h1 className="font-light uppercase">Judith Tamayo</h1>
        </div>
        <div
          className={`flex items-end text-end col-start-2 row-start-1 text-6xl px-4 tracking-wider justify-end transition-all ease-in-out duration-400 ${
            isScrolled
              ? "-translate-y-400 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          <h2 className="font-extralight uppercase">
            Full<span className="block">Stack</span>Developer
          </h2>
        </div>
        <div
          className={`flex items-end col-start-3 row-start-1 px-4 transition-all ease-in-out duration-800 ${
            isScrolled
              ? "translate-x-400 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Hero;
