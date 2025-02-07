import { useParams } from 'react-router-dom';
import projectsData from '../../public/data.json';

const ProjectDetail = () => {
  const { projectId } = useParams(); 
  const project = projectsData.projects.find(p => p.id.toString() === projectId); 

  if (!project) {
    return <div className="text-center py-10">Project not found!</div>;
  }

  return (
    <section className="py-28 bg-black">
      <div className="container mx-auto px-6">
        {/* Project Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-64 object-cover rounded-md mb-6"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{project.name}</h2>
          <p className="text-lg text-gray-600 mb-4">{project.description}</p>

          {/* Project Links */}
          <div className="flex gap-4 mb-6">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-r from-purple-500 to-pink-300 text-white"
            >
              Live Project
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-r from-gray-500 to-blue-400 text-white"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        {/* Project Details */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Used</h3>
          <ul className="list-disc pl-6 mb-6">
            {project.techStack.map((tech, index) => (
              <li key={index} className="text-gray-600">{tech}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Challenges Faced</h3>
          <p className="text-gray-600 mb-6">{project.challenges}</p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Potential Improvements</h3>
          <p className="text-gray-600">{project.improvements}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
