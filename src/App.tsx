//import { useState } from 'react'
import Hero from "./components/hero/Hero";
import TechStack from "./components/techStack/TechStack";
import Toolbox from "./components/toolbox/Toolbox";
import ProjectShowcase from "./components/projectShowcase/ProjectShowcase";

import "./App.css";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <main className="mx-1 sm:mx-10 md:mx-20 lg:mx-50 xl:mx-70">
        <TechStack />
        <Toolbox />
        <ProjectShowcase />
      </main>
    </>
  );
}

export default App;
