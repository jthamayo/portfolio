import { techData } from "../../data/techData";

const TechStack = () => {
  return (
    <>
      <section>
        <h3>Tech Stack</h3>
        <ul>
          {techData.map((tech, index) => {
            return <li key={index}>{tech.name}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default TechStack;
