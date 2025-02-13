import { useState } from "react";

const Gallery = ({ pictures }: { pictures: string[] }) => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <ol className="w-full h-full flex flex-col @2xs/gallery:flex-row justify-stretch gap-3 group">
        {pictures.map((picture, index) => {
          return (
            <li
              key={index}
              style={{ backgroundImage: `url(${picture})` }}
              onMouseEnter={() => {
                setHoveredImage(picture);
                setIsVisible(true);
              }}
              onMouseLeave={() => {
                setIsVisible(false);
                setHoveredImage(null);
              }}
              className="bg-cover bg-center rounded-lg size-full shadow-lg hover:shadow-2xl hover:scale-110 hover:opacity-100 transition-all group-has-hover:opacity-80 ease-in-out duration-300"
            ></li>
          );
        })}
      </ol>
      <div
        className={`p-1 fixed left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 max-sm:w-screen -translate-y-1/2 z-20 flex items-center justify-center 
          pointer-events-none
          ${isVisible ? "animate-popup" : ""}`}
      >
        {hoveredImage && (
          <div
            className="w-full h-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${hoveredImage})` }}
          ></div>
        )}
      </div>
    </>
  );
};

export default Gallery;
