import { techData } from "../../data/techData";

const TechStack = () => {
  return (
    <>
      <section>
        <h3>Tech Stack</h3>
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
