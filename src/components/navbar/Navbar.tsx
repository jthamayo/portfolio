//import { useState, useEffect } from "react";
import gmailIcon from "../../assets/gmail.svg";
import githubIcon from "../../assets/github.svg";
import houseIcon from "../../assets/house-solid.svg";
import stackIcon from "../../assets/layer-group-solid.svg";
import codeIcon from "../../assets/code-solid.svg";
import linkedinIcon from "../../assets/linkedin-brands-solid.svg";

const Navbar = ({displacement}:{displacement:number}) => {

  return (
    <div className="fixed h-screen w-[300px] left-0 top-1/2 -translate-y-1/2 shadow-lg">
      <div className="flex h-screen w-full flex-col justify-center gap-5 py-10">
        <div className="text-4xl flex-inline w-full h-[25%] text-nowrap text-center">
          <h3 className="font-light uppercase">Judith Tamayo</h3>
        </div>
        <ul className="flex flex-col justify-center gap-2 h-[50%] text-start text-2xl font-extralight uppercase w-full">
          <li className="p-4 flex items-center justify-between border-b-1 hover:shadow-lg hover:font-normal transition-all w-full">
            <p>Full</p>
            <a href="#home">
              <img src={houseIcon} alt="Home" className="size-5" />
            </a>
          </li>
          <li className="p-4 flex items-center justify-between border-b-1 hover:shadow-lg hover:font-normal transition-all w-full">
            <p>Stack</p>
            <a href="#stack">
              <img src={stackIcon} alt="Stacks" className="size-5" />
            </a>
          </li>
          <li className="p-4 flex items-center justify-between border-b-1 hover:shadow-lg hover:font-normal transition-all w-full">
            <p>Developer</p>
            <a href="#project">
              <img src={codeIcon} alt="Projects" className="size-5" />
            </a>
          </li>
        </ul>
        <div className="flex items-end h-[25%] justify-center gap-10 w-full">
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
      </div>
    </div>
  );
};

export default Navbar;
