import React from 'react';
import { FaPaintBrush, FaCamera, FaCode, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      <section className=" pt-28 pb-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">About Me</h2>
          
          <div className="bg-white shadow-lg rounded-lg p-8 space-y-8 text-left w-full">
            <p className="text-lg text-gray-700 leading-relaxed">
            I am a <span className="font-semibold text-indigo-600">Computer Science and Engineering graduate</span> with a strong passion for modern, responsive, and user-friendly web development. I have expertise in <strong>HTML, CSS, and JavaScript</strong>, and I effectively leverage <strong>Vite</strong> for swift and efficient development.
            </p>
            
            

            <div className="mt-8">
              <p className="text-lg text-gray-700 leading-relaxed">
              My programming journey started during my university life, where my curiosity grew into a true passion. I specialize in <strong>HTML, CSS, JavaScript, and React</strong>, with a focus on building modern web experiences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                I enjoy working on <strong>creative and interactive UI/UX designs</strong>, making the web more accessible and engaging.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Apart from coding, I love <strong>painting, photography, and exploring new tech trends</strong>. I also enjoy watching movies and spending time in nature.
              </p>
            </div>
            <div className="lg:flex justify-center lg:gap-8 mt-6">
              <div className="text-center">
                <FaCode className="text-4xl text-indigo-600 mb-3" />
                <p className="text-lg text-gray-700">Frontend Development</p>
              </div>
              <div className="text-center">
                <FaLaptopCode className="text-4xl text-indigo-600 mb-3" />
                <p className="text-lg text-gray-700">Web Technologies</p>
              </div>
              <div className="text-center">
                <FaPaintBrush className="text-4xl text-indigo-600 mb-3" />
                <p className="text-lg text-gray-700">Creative Design</p>
              </div>
              <div className="text-center">
                <FaCamera className="text-4xl text-indigo-600 mb-3" />
                <p className="text-lg text-gray-700">Photography</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
