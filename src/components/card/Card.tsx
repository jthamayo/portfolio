const Card = ({ gallery }: { gallery: string[] }) => {
  return (
    <ol className="w-full h-full flex justify-stretch gap-5">
      {gallery.map((picture, index) => {
        return <li key={index}  style={{ backgroundImage: `url(${picture})` }} className="bg-cover bg-center rounded-lg shadow-lg size-full"></li>;
      })}
    </ol>
  );
};

export default Card;
