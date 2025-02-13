import { toolData } from "../../data/toolData";

const Toolbox = () => {
  return (
    <>
      <section className="max-w-[600px] m-10 transition-all">
        <h3 className="text-4xl my-5 tracking-widest uppercase font-light">Tools</h3>
        <ul className="flex flex-wrap gap-4 justify-stretch shadow-md p-4 rounded-md text-md transition-all">
          {toolData.map((tool, index) => {
            return (
              <li key={index} className="grow-0 shrink-0 flex items-center">
                <i className={`${tool.logo}text-slate-600 mr-1`}></i>
                <p>{tool.name}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Toolbox;
