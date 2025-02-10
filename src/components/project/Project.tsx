import Card from "../card/Card";

interface ProjectProps {
  title: string;
  subtitle: string;
  cover: string[];
  description: string;
  link: string;
}

const Project = ({ title, subtitle, cover, description, link }: ProjectProps) => {
  return (
    <div className="mt-10">
      <div className="my-2 flex flex-col justify-stretch md:flex-row">
        <div className="flex h-1/2 flex-col md:w-2/3 md:pr-10">
          <div className="flex items-end mb-2 justify-between">
            <h4 className="text-2xl font-bold">{title}</h4>
            <h5 className="text-xl text-slate-700">{subtitle}</h5>
          </div>
          <p className=" text-slate-500 text-justify">{description}</p>
        </div>
        <div
          className="w-full h-[200px] md:w-1/3 md:h-auto"
        ><Card gallery={cover}/></div>
        <a href={link}></a>
      </div>
      <span className="block h-[0.5px] w-full border-b mt-10"></span>
    </div>
  );
};

export default Project;
