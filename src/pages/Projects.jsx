import { Link } from 'react-router-dom';

import projectsData from '../../public/data.json';

const Projects = () => {
  return (
    <section className="py-28 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-100 mb-10">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link to={`/project-details/${project.id}`} className="btn text-black bg-gradient-to-r from-purple-500 to-pink-300 hover:from-cyan-400 hover:to-blue-400 transition-all">
                View More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
