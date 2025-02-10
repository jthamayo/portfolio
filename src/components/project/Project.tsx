import Gallery from "../gallery/Gallery";

interface ProjectProps {
  title: string;
  subtitle: string;
  cover: string[];
  description: string;
  link: string;
}

const Project = ({ title, subtitle, cover, description, link }: ProjectProps) => {
  return (
    <div className="mt-10 relative">
      <div className="my-2 flex flex-col justify-stretch items-stretch md:flex-row">
        <div className="flex h-1/2 flex-col md:w-2/3 md:pr-10">
          <div className="flex items-end mb-2 justify-between">
            <h4 className="text-2xl font-bold">{title}</h4>
            <h5 className="text-xl text-slate-700">{subtitle}</h5>
          </div>
          <p className=" text-slate-500 text-justify">{description}</p>
        </div>
        <div
          className="w-full mt-4 h-[200px] md:mt-0 md:w-2/5 md:h-auto @container/gallery"
        ><Gallery pictures={cover}/></div>
        <a href={link}></a>
      </div>
      <span className="block h-[0.5px] w-full border-b mt-10"></span>
    </div>
  );
};

export default Project;
