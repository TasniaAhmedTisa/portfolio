import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const Skills = () => {
    return (
        <section className="py-28 bg-black text-center">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-100 mb-10">My Skills</h2>

                {/* Frontend Skills */}
                <div className="mb-10">
                    <h3 className="text-2xl font-semibold text-gray-400 mb-3">Frontend Development</h3>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
                            <FaHtml5 className="text-orange-500 text-2xl" />
                            <span>HTML</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
                            <FaCss3Alt className="text-blue-500 text-2xl" />
                            <span>CSS</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
                            <FaJs className="text-yellow-500 text-2xl" />
                            <span>JavaScript</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
                            <FaReact className="text-blue-400 text-2xl" />
                            <span>React.js</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
                            <SiTailwindcss className="text-teal-500 text-2xl" />
                            <span>Tailwind CSS</span>
                        </div>
                    </div>
                </div>

                {/* Backend Skills */}
                <div className="mb-10">
                    <h3 className="text-2xl font-semibold text-gray-400 mb-3">Backend Development</h3>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
                            <FaNodeJs className="text-green-500 text-2xl" />
                            <span>Node.js</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
                            <SiExpress className="text-gray-700 text-2xl" />
                            <span>Express.js</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
                            <SiMongodb className="text-green-500 text-2xl" />
                            <span>MongoDB</span>
                        </div>
                    </div>
                </div>

                {/* Tools & Other Skills */}
                <div>
                    <h3 className="text-2xl font-semibold text-gray-400 mb-3">Tools & Other Skills</h3>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
                            <FaGitAlt className="text-red-500 text-2xl" />
                            <span>Git</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
                            <FaDatabase className="text-gray-500 text-2xl" />
                            <span>Database Management</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
