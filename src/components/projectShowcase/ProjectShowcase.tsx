import Card from "../card/Card";
import { projectData } from "../../data/projectData";

const ProjectShowcase = () => {
  return (
    <>
      <ol>
        {projectData.map((project, index) => {
          return (
            <li key={index}>
              <Card
                title={project.title}
                subtitle={project.subtitle}
                cover={project.cover}
                description={project.description}
                link={project.link}
              />
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default ProjectShowcase;
