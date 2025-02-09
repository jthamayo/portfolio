import ContactInfo from "../contactInfo/ContactInfo";

const Hero = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="p-10 ">
        <h1 className="text-7xl font-extralight py-10">Judith Tamayo Balogh</h1>
        <h2 className="text-5xl font-normal tracking-[0.77rem] uppercase">Full Stack Developer</h2>
        <ContactInfo />
      </div>
    </div>
  );
};

export default Hero;
