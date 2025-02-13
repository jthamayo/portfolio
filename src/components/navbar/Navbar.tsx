import useScrollStatus from "../../hooks/useScrollStatus";

const Navbar = ({
  isOpen,
  handleOpen,
}: {
  isOpen: boolean;
  handleOpen: () => void;
}) => {
  const isScrolled = useScrollStatus();

  const handleClick = () => {
    if (isOpen && window.innerWidth < 640) {
      handleOpen();
    }
  };

  return (
    <div
      className={`fixed bg-white h-screen w-screen sm:w-[300px] left-0 top-1/2 -translate-y-1/2 shadow-lg z-100 transition-all duration-500
         ${
           isScrolled
             ? isOpen
               ? "-translate-y-0 sm:-translate-y-1/2 opacity-100"
               : "max-sm:-translate-y-10/7 sm:-translate-x-61"
             : "sm:-translate-x-100 opacity-0"
         }`}
    >
      <button
        onClick={handleOpen}
        className={`right-0 absolute size-15 flex items-center justify-center ${
          isOpen ? "" : "max-sm:bottom-0"
        }`}
      >
        <div className={`h-6 w-7 top-4 flex flex-col gap-2`}>
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
          className={`h-1/3 text-4xl flex flex-col text-center items-center justify-end pointer-events-none transition-all ${
            isScrolled ? "" : "opacity-0"
          } ${isOpen ? "-translate-x-0" : "sm:-translate-x-10"}`}
        >
          <div className=" size-2/3 py-2">
            <img
              src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739394305/FotoPortada_vr7oh5.jpg"
              className="rounded-[50%] h-full mx-auto"
              alt=""
            />
          </div>
          <h3 className={`font-normal w-full uppercase transition-all `}>
            Judith Tamayo
          </h3>
        </header>
        <nav>
          <ul className="flex flex-col justify-center gap-2 text-start text-2xl font-extralight uppercase w-full">
            <li className="border-b-1 hover:shadow-lg hover:font-normal transition-all w-full">
              <a href="#" className="p-4 flex items-center justify-between">
                <p>Full</p>
                <img
                  src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739394385/house-solid_wy4z2c.svg"
                  alt="Home"
                  className="size-6"
                />
              </a>
            </li>
            <li className="border-b-1 hover:shadow-lg hover:font-normal transition-all w-full">
              <a
                href="#stack"
                className="p-4 flex items-center justify-between "
                onClick={handleClick}
              >
                <p>Stack</p>
                <img
                  src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739394394/layer-group-solid_kstzha.svg"
                  alt="Stacks"
                  className="size-6"
                />
              </a>
            </li>
            <li className="border-b-1 hover:shadow-lg hover:font-normal transition-all w-full">
              <a
                href="#project"
                className="p-4 flex items-center justify-between"
                onClick={handleClick}
              >
                <p>Developer</p>
                <img
                  src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739394741/code-solid_o87baf.svg"
                  alt="Projects"
                  className="size-6"
                />
              </a>
            </li>
          </ul>
        </nav>

        <footer
          className={`w-full mt-auto transition-all flex flex-col gap-5 items-center justify-between ${
            isOpen ? "max-sm:translate-y-0" : "max-sm:-translate-y-20"
          }`}
        >
          <button className="w-1/2 uppercase text-white bg-indigo-300 hover:bg-white hover:text-indigo-400 hover:font-bold hover:border-indigo-400 transition-all border-1 px-4 py-1 rounded-2xl">
            open CV
          </button>
          <div className="flex items-end justify-center gap-10 w-full">
            <a href="mailto:jtamayobalogh@gmail.com">
              <img
                src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739394388/gmail_jpolcm.svg"
                alt="Gmail"
                className="size-5"
              />
            </a>
            <a href="https://github.com/jthamayo" target="_blank">
              <img
                src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739394381/github_ktksrs.svg"
                alt="Github"
                className="size-5"
              />
            </a>
            <a href="https://www.linkedin.com/in/jthamayo" target="_blank">
              <img
                src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739394391/linkedin-brands-solid_scddf1.svg"
                alt="LinkedIn"
                className="size-5"
              />
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
