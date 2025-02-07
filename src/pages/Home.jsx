import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ProfileImage from '../../public/images/pp.jpg'

const Home = () => {
    return (
        <div>
<div className="hero bg-black min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between">
    <img
      src={ProfileImage}
      className="max-w-sm lg:max-w-lg rounded-full shadow-2xl pt-4" />
    <div className='w-3/4'>
      <h1 className="text-5xl font-bold text-white">Hello! I am Tasnia Ahmed</h1>
      <p className='pt-2 text-lg font-bold italic text-white'>A Web Developer</p>
      <p className="py-5 text-gray-400">
      An ambitious Computer Science and Engineering student with strong skills in web development technologies like HTML, CSS, and JavaScript
      </p>
      <button className="btn bg-gradient-to-r from-purple-500 to-pink-300 hover:from-cyan-400 hover:to-blue-400 transition-all">Resume</button>
    </div>
  </div>
</div>  
{/* social links   */}
<div className='bg-black mt-10 mb-10'>
                <h1 className='text-3xl font-bold italic text-center pb-4 pt-8 text-white'>Social Links</h1>
                <p className='text-center text-lg text-gray-400'>Click to visit my social accounts</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 pb-28 justify-center px-5">
                    <a href="https://github.com/TasniaAhmedTisa" target="_blank" rel="noopener noreferrer">
                        <div className="card bg-gradient-to-r from-purple-500 to-pink-300 hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg rounded-lg p-6 flex flex-col items-center transform hover:scale-105">
                            <FaGithub className="text-4xl mb-4" />
                            <h3 className="text-xl font-semibold text-white">GitHub</h3>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/tasnia-ahmed-8051aa219" target="_blank" rel="noopener noreferrer">
                        <div className="card bg-gradient-to-r from-purple-500 to-pink-300 hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg rounded-lg p-6 flex flex-col items-center transform hover:scale-105">
                            <FaLinkedin className="text-4xl mb-4" />
                            <h3 className="text-xl font-semibold text-white">LinkedIn</h3>
                        </div>
                    </a>
                    <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
                        <div className="card bg-gradient-to-r from-purple-500 to-pink-300 hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg rounded-lg p-6 flex flex-col items-center transform hover:scale-105">
                            <FaTwitter className="text-4xl mb-4" />
                            <h3 className="text-xl font-semibold text-white">Twitter</h3>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/share/1HgXXu1z6x/" target="_blank" rel="noopener noreferrer">
                        <div className="card bg-gradient-to-r from-purple-500 to-pink-300 hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg rounded-lg p-6 flex flex-col items-center transform hover:scale-105">
                            <FaFacebook className="text-4xl mb-4" />
                            <h3 className="text-xl font-semibold text-white">Facebook</h3>
                        </div>
                    </a>
                </div>
            </div>
    </div>
    );
};

export default Home;