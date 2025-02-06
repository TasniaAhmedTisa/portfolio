import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-28 px-6 md:px-12 lg:px-24">
        <div>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Let's Connect!</h1>
      <p className="py-6">
      Please fill out the form on this section to contact with me or call between 9:00 A.M and 8.00 P.M ET, Monday through Friday.

      </p>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-indigo-600" />
              <a href="mailto:tasniaahmed055@gmail.com" className="text-lg text-gray-700 hover:text-indigo-600">
                tasniaahmed055@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-2xl text-indigo-600" />
              <a href="tel:+1234567890" className="text-lg text-gray-700 hover:text-indigo-600">
                +1 234-567-890
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-2xl text-green-500" />
              <a href="https://wa.me/1234567890" className="text-lg text-gray-700 hover:text-green-500">
                WhatsApp: +1 234-567-890
              </a>
            </div>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Your name</span>
          </label>
          <input type="text" placeholder="Your name" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <label className="label">
            <span className="label-text">Message</span>
          </label>
        <textarea
        placeholder="Messasge"
        className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
        <div className="form-control mt-6">
          <button className="btn bg-gradient-to-r from-green-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-400 transition-all">Submit</button>
        </div>
        
      </form>
    </div>
  </div>
</div>
        </div>
        
      <div>
        
      </div>
    </div>
  );
};

export default Contact;
