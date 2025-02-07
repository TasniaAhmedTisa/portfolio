const Education = () => {
  return (
      <section className="py-28 bg-black">
          <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center text-gray-100 mb-10">Education Qualification</h2>

              <div className="max-w-3xl mx-auto space-y-8">
                  {/* Bachelor's Degree */}
                  <div className="bg-gradient-to-r from-purple-200 skeleton to-pink-300 hover:from-cyan-100 hover:to-blue-400 transition-all p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-semibold text-gray-800">Bachelor of Science in Computer Science & Engineering</h3>
                      <p className="text-lg text-gray-600 mt-1">United International University</p>
                      <p className="text-gray-500">2019 - 2023</p>
                      <p className="mt-2 text-gray-700">
                          Focused on web development, data structures, algorithms, and database management. Completed multiple projects in 
                          frontend and backend development.
                      </p>
                  </div>

                  {/* High School */}
                  <div className="bg-gradient-to-r from-purple-200 skeleton to-pink-300 hover:from-cyan-400 hover:to-blue-400 transition-all p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-semibold text-gray-800">Higher Secondary Certificate (HSC)</h3>
                      <p className="text-lg text-gray-600 mt-1">Birsrestha Munshi Abdur Rouf public College</p>
                      <p className="text-gray-500">2016 - 2018</p>
                      <p className="mt-2 text-gray-700">
                          Studied science with a focus on mathematics, physics, and programming fundamentals. Developed a strong foundation in logical thinking.
                      </p>
                  </div>

                  {/* Secondary School */}
                  <div className="bg-gradient-to-r from-purple-200 skeleton to-pink-300 hover:from-cyan-400 hover:to-blue-400 transition-all p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-semibold text-gray-800">Secondary School Certificate (SSC)</h3>
                      <p className="text-lg text-gray-600 mt-1">Agrani School & College</p>
                      <p className="text-gray-500">2014 - 2016</p>
                      <p className="mt-2 text-gray-700">
                          Developed early interest in technology and programming. Participated in science fairs and coding competitions.
                      </p>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Education;
