interface CardProps {
  title: string;
  subtitle: string;
  cover: string;
  description: string;
  link: string;
}

const Card = ({ title, subtitle, cover, description, link }: CardProps) => {
  return (
    <div>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{description}</p>
      <img src={cover} alt={`${title} project`} />
      <a href={link}></a>
    </div>
  );
};

export default Card;
