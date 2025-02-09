import { techData } from "../../data/techData";

const TechStack = () => {
  return (
    <>
      <section className="m-10">
        <h3 className="text-3xl">Tech Stack</h3>
        <ul>
          {techData.map((tech, index) => {
            return (
              <li key={index}>
                <i className={`${tech.logo}text-slate-600`}></i>
                {tech.name}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default TechStack;
