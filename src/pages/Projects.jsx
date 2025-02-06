import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className="py-28 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src="/path/to/project1-image.jpg" alt="Project 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Project 1 Name</h3>
            <p className="text-gray-600 mb-4">Brief description of the project. This will be a short overview of what the project does.</p>
            <Link to="/project-details/1" className="btn bg-gradient-to-r from-green-500 to-blue-400 hover:from-cyan-400 hover:to-blue-400 transition-all text-black hover:underline">View More</Link>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src="/path/to/project2-image.jpg" alt="Project 2" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Project 2 Name</h3>
            <p className="text-gray-600 mb-4">Brief description of the project. This will be a short overview of what the project does.</p>
            <Link to="/project-details/2" className="btn bg-gradient-to-r from-green-500 to-blue-400 hover:from-cyan-400 hover:to-blue-400 transition-all text-black hover:underline">View More</Link>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src="/path/to/project3-image.jpg" alt="Project 3" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Project 3 Name</h3>
            <p className="text-gray-600 mb-4">Brief description of the project. This will be a short overview of what the project does.</p>
            <Link to="/project-details/3" className="btn bg-gradient-to-r from-green-500 to-blue-400 hover:from-cyan-400 hover:to-blue-400 transition-all text-black">View More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
