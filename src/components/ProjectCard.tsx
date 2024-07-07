import React from 'react';
import MarketButtons from './MarketButtons';
import ImageVideoPanel from './ImageVideoPanel';
import classNames from 'classnames';

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

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={classNames("flex flex-col md:flex-row bg-gray-100 p-4 rounded-lg mb-8")}>
      {/* // <div className={classNames( */}
      {/* //   'flex w-full shrink-0 snap-start snap-always flex-col items-start gap-y-4 p-2 transition-opacity duration-1000 sm:flex-row sm:gap-x-6', */}
      {/* // )}> */}
      <div className="flex-1 p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="mb-4" style={{ whiteSpace: 'pre-wrap' }}>{project.description}</p>
        <a href={project.readMoreLink} className="bg-yellow-500 text-black px-4 py-2 rounded-lg">
          Read More
        </a>
        <MarketButtons marketplaces={project.marketplaces} />
      </div>
      <ImageVideoPanel media={project.media} />
    </div>
  );
};

export default ProjectCard;
