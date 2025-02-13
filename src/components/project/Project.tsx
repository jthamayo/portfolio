import Gallery from "../gallery/Gallery";

interface ProjectProps {
  title: string;
  subtitle: string;
  cover: string[];
  description: string;
  repository: string;
  preview: string;
}

const Project = ({
  title,
  subtitle,
  cover,
  description,
  repository,
  preview,
}: ProjectProps) => {
  return (
    <div className="mt-10 relative">
      <div className="my-2 flex flex-col justify-stretch items-stretch lg:flex-row">
        <div className="flex h-1/2 flex-col gap-5 lg:w-2/3 lg:pr-10 justify-start lg:min-h-[250px]">
          <div className="flex flex-col gap-2 text-left items-start mb-2 justify-between">
            <h4 className="text-2xl font-bold">{title}</h4>
            <h5 className="text-xl text-slate-700">{subtitle}</h5>
          </div>
          <p className=" text-slate-500 text-justify">{description}</p>
          <div className="flex items-center">
            {preview && (
              <button className="uppercase text-white bg-indigo-300 hover:bg-white hover:text-indigo-400 hover:font-bold hover:border-indigo-400 transition-all border-1 px-4 py-1 rounded-2xl">
                <a href={preview} target="_blank">try it out</a>
              </button>
            )}
            <button className="px-4 hover:scale-110">
              <a href={repository} target="_blank" className="flex items-center gap-1 text-md">
                <img
                  className="size-7"
                  src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739394381/github_ktksrs.svg"
                  alt="github-link"
                />
                <p>Repository</p>
              </a>
            </button>
          </div>
        </div>
        <div className="w-full mt-4 h-[200px] lg:mt-0 lg:w-2/5 lg:h-auto @container/gallery">
          <Gallery pictures={cover} />
        </div>
      </div>
      <span className="block h-[0.5px] w-full border-b mt-10"></span>
    </div>
  );
};

export default Project;
