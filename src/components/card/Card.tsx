interface CardProps {
  title: string;
  subtitle: string;
  cover: string;
  description: string;
  link: string;
}

const Card = ({ title, subtitle, cover, description, link }: CardProps) => {
  return (
    <div className="mt-10">
      <div className="my-2 flex flex-col justify-stretch md:flex-row">
        <div className="flex h-1/2 flex-col md:w-2/3 md:pr-10">
          <div className="flex items-end my-2 justify-between">
            <h4 className="text-2xl font-bold">{title}</h4>
            <h5 className="text-xl text-slate-700">{subtitle}</h5>
          </div>
          <p className=" text-slate-500 text-justify">{description}</p>
        </div>
        <div
          style={{ backgroundImage: `url(${cover})` }}
          className="w-full h-[200px] mt-4 bg-cover bg-center md:w-1/3 md:h-auto rounded-lg shadow-lg"
        ></div>
        <a href={link}></a>
      </div>
      <span className="block h-[0.5px] w-full border-b mt-10"></span>
    </div>
  );
};

export default Card;
