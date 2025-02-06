import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ProfileImage from '../../public/images/pp.jpg'

const Home = () => {
    return (
        <div>
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between">
    <img
      src={ProfileImage}
      className="max-w-sm lg:max-w-lg rounded-full shadow-2xl" />
    <div className='w-3/4'>
      <h1 className="text-5xl font-bold">Hello! I am Tasnia Ahmed</h1>
      <p className='pt-2 text-xl font-bold italic'>A Web Developer</p>
      <p className="py-5">
      An ambitious Computer Science and Engineering student with strong skills in web development technologies like HTML, CSS, and JavaScript
      </p>
      <button className="btn bg-gradient-to-r from-green-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-400 transition-all">Resume</button>
    </div>
  </div>
</div>  
{/* social links   */}
<div className='mt-10 mb-20'>
  <h1 className='text-3xl font-bold italic text-center py-8'>Social Links</h1>
  <div className="flex gap-4 justify-center">
      <a href="https://github.com/TasniaAhmedTisa" target="_blank">
      <button className="btn lg:btn-wide bg-gradient-to-r from-green-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-400 transition-all"><FaGithub/> GitHub</button>

      </a>
      <a href="https://www.linkedin.com/in/tasnia-ahmed-8051aa219" target="_blank" >
      <button className="btn lg:btn-wide bg-gradient-to-r from-green-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-400 transition-all"><FaLinkedin /> LinkedIn</button>

      </a>
      <a href="https://x.com/home" target="_blank">       
       <button className="btn lg:btn-wide bg-gradient-to-r from-green-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-400 transition-all"><FaTwitter /> Twitter</button>
      </a>
      <a href="https://www.facebook.com/share/1HgXXu1z6x/" target="_blank">
      <button className="btn lg:btn-wide bg-gradient-to-r from-green-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-400 transition-all"><FaFacebook /> Facebook</button>

      </a>
    </div>
</div>
    </div>
    );
};

export default Home;