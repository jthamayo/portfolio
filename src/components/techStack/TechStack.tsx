import { techData } from "../../data/techData";

const TechStack = () => {
  return (
    <>
      <section className="m-10 py-10">
        <h3 className="text-4xl my-5 tracking-widest uppercase font-light">Tech Stack</h3>
        <ul className="flex flex-wrap gap-4 justify-stretch shadow-md p-4 rounded-md text-md">
          {techData.map((tech, index) => {
            return (
              <li key={index} className="grow-0 shrink-0 flex items-center">
                <i className={`${tech.logo}text-slate-600 mr-1`}></i>
                <p> {tech.name}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default TechStack;
