import Project from "../project/Project";
import { projectData } from "../../data/projectData";

const ProjectShowcase = () => {
  return (
    <section id="project" className="m-10 snap-y snap-proximity">
      <h3 className="pt-10 text-4xl tracking-widest uppercase font-light">Featured Projects</h3>
      <ol>
        {projectData.map((project, index) => {
          return (
            <li key={index} className="snap-center">
              <Project
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
