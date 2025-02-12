import gmailIcon from "../../assets/gmail.svg";
import githubIcon from "../../assets/github.svg";
import houseIcon from "../../assets/house-solid.svg";
import stackIcon from "../../assets/layer-group-solid.svg";
import codeIcon from "../../assets/code-solid.svg";
import linkedinIcon from "../../assets/linkedin-brands-solid.svg";
import useScrollStatus from "../../hooks/useScrollStatus";

const Navbar = ({
  isOpen,
  handleOpen,
}: {
  isOpen: boolean;
  handleOpen: () => void;
}) => {
  const isScrolled = useScrollStatus();

  return (
    <div
      className={`fixed bg-white h-screen w-[300px] left-0 top-1/2 -translate-y-1/2 shadow-lg z-100 transition-all duration-500
         ${
           isScrolled
             ? isOpen
               ? "-translate-y-1/2"
               : "-translate-x-61"
             : "-translate-x-100"
         }`}
    >
      <button onClick={handleOpen} className="right-0 absolute size-15 flex items-center justify-center">
        <div
          className={`h-6 w-7 top-4 flex flex-col gap-2 ${
            isOpen ? " " : ""
          }`}
        >
          <span
            className={`w-full h-0.5 bg-slate-800 transition-all ${
              isOpen ? "rotate-45 translate-y-2.5" : "rotate-0 translate-y-0"
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-slate-800 transition-all ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-slate-800 transition-all ${
              isOpen ? "-rotate-45 -translate-y-2.5" : "rotate-0 translate-y-0"
            }`}
          ></span>
        </div>
      </button>
      <div className="flex h-screen w-full flex-col justify-center gap-5">
        <header
          className={`h-1/3 text-4xl flex text-center items-end transition-all pointer-events-none ${
            isOpen ? "" : "scale-x-80"
          }`}
        >
          <h3 className="font-normal w-full uppercase">Judith Tamayo</h3>
        </header>
        <nav>
          <ul className="flex flex-col justify-center gap-2 text-start text-2xl font-extralight uppercase w-full">
            <li className="border-b-1 hover:shadow-lg hover:font-normal transition-all w-full">
              <a href="#home" className="p-4 flex items-center justify-between">
                <p>Full</p>
                <img src={houseIcon} alt="Home" className="size-6" />
              </a>
            </li>
            <li className="border-b-1 hover:shadow-lg hover:font-normal transition-all w-full">
              <a
                href="#stack"
                className="p-4 flex items-center justify-between "
              >
                <p>Stack</p>
                <img src={stackIcon} alt="Stacks" className="size-6" />
              </a>
            </li>
            <li className="border-b-1 hover:shadow-lg hover:font-normal transition-all w-full">
              <a
                href="#project"
                className="p-4 flex items-center justify-between"
              >
                <p>Developer</p>
                <img src={codeIcon} alt="Projects" className="size-6" />
              </a>
            </li>
          </ul>
        </nav>
        <footer className="w-full mt-auto">
          <div className="flex items-end justify-center gap-10 w-full">
            <a href="">
              <img src={gmailIcon} alt="Gmail" className="size-5" />
            </a>
            <a href="">
              <img src={githubIcon} alt="Gmail" className="size-5" />
            </a>
            <a href="">
              <img src={linkedinIcon} alt="Gmail" className="size-5" />
            </a>
          </div>
          <p className="w-full text-center text-slate-400 my-4">
            <span className="text-xl">&copy;</span> Judith Tamayo 2025
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Navbar;
