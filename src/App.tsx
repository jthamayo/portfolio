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
      <main className="px-40">
        <TechStack />
        <Toolbox />
        <ProjectShowcase />
      </main>
    </>
  );
}

export default App;
