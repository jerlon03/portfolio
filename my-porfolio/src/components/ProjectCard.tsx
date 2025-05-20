import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
  tags = [],
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col border-2 border-[#08a045] hover:shadow-lg transition-shadow duration-300">
    <Image src={image} alt={title} width={400} height={200} className="object-cover w-full h-48" />
    <div className="p-4 flex-1 flex flex-col">
      <h3 className="text-lg font-bold text-[#08a045] mb-2">{title}</h3>
      <p className="text-gray-700 mb-3 flex-1">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span key={tag} className="bg-[#e6f4ea] text-[#08a045] px-2 py-1 rounded text-xs">{tag}</span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-[#08a045] font-semibold hover:underline"
        >
          View Project
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;