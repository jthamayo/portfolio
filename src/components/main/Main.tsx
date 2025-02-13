import Navbar from "../navbar/Navbar";
import TechStack from "../techStack/TechStack";
import Toolbox from "../toolbox/Toolbox";
import ProjectShowcase from "../projectShowcase/ProjectShowcase";
import { useState } from "react";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-full flex justify-stretch items-stretch">
      <Navbar isOpen={isOpen} handleOpen={handleOpen} />
      <main
        className={`w-full sm:px-5 md:px-10 lg:px-15 xl:px-40 transition-all delay-100 duration-500 ${
          isOpen ? "sm:ml-[300px] " : "sm:ml-[50px] xl:px-60"
        }`}
      >
        <div id="stack" className="grid grid-cols-1 lg:grid-cols-2">
          <TechStack />
          <Toolbox />
        </div>
        <ProjectShowcase />
      </main>
    </div>
  );
};

export default Main;
