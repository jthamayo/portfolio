import { toolData } from "../../data/toolData";

const Toolbox = () => {
  return (
    <>
      <section>
        <h3>Tools</h3>
        <ul>
          {toolData.map((tool, index) => {
            return <li key={index}>{tool.name}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default Toolbox;
