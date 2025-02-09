import Card from "../card/Card";
import { projectData } from "../../data/projectData";

const ProjectShowcase = () => {
  return (
    <section className="m-10">
      <h3 className="text-3xl">Featured Projects</h3>
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
    </section>
  );
};

export default ProjectShowcase;
