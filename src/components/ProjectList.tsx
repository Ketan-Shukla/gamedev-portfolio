import React from 'react';

import ProjectCard from '../components/ProjectCard';

interface Media {
  type: string;
  src: string;
}

interface Project {
  title: string;
  description: string;
  readMoreLink: string;
  marketplaces: string[];
  media: Media[];
}

interface PortfolioProps {
  projects: Project[];
}

const ProjectList: React.FC<PortfolioProps> = React.memo(({projects}) => {
  return (
    <div className="portfolio-section">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
});

export default ProjectList;
