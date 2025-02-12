import Navbar from "../navbar/Navbar";
import TechStack from "../techStack/TechStack";
import Toolbox from "../toolbox/Toolbox";
import ProjectShowcase from "../projectShowcase/ProjectShowcase";

const Main = () => {
  return (
    <div className="w-screen h-full flex justify-stretch items-stretch @container/nav">
      <div className="h-[3000px] w-[40px] @lg/nav:w-[400px]">
        <Navbar />
      </div>
      <div className="h-full w-full">
        <main className="w-full sm:px-5 md:px-10 lg:px-20 xl:px-30">
          <TechStack />
          <Toolbox />
          <ProjectShowcase />
        </main>
      </div>
    </div>
  );
};

export default Main;
