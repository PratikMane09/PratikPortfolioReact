import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import emailjs from "emailjs-com";
import { Link } from "react-scroll";
import contact from "../assets/contact.jpg";
const Contact = () => {
  //SENDING MESSAGES USING EMAILJS
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });
  const publicKey = "ve_oRrHiaP8X29-Kj";

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = "service_8151qfa";
    const templateId = "template_kudb314";

    try {
      const response = await emailjs.sendForm(
        serviceId,
        templateId,

        "#contactForm",
        publicKey,
        {
          name: formData.name,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );
      console.log("SUCCESS!", response.status, response.text);
      alert("Your message has been sent successfully!");
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("FAILED...", err);
      alert("There was an error sending your message. Please try again later.");
    }
  };
  return (
    <div name="contact" className="w-full min-h-screen bg-gray-50">
      <div className="max-w-[1240px] m-auto px-4 py-20 w-full">
        <p className="text-lg tracking-widest uppercase text-[#5651e5] font-medium">
          Contact
        </p>
        <h2 className="py-4 text-3xl font-bold text-gray-800">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left side - Profile section */}
          <div className="lg:col-span-4 w-full h-full shadow-md rounded-xl overflow-hidden bg-white">
            <div className="h-full flex flex-col">
              <div className="overflow-hidden">
                <img
                  className="w-full object-cover transition-transform "
                  src={contact}
                  alt="Profile"
                />
              </div>
              <div className="p-6 flex-grow">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Pratik Mane
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  I am excited about the opportunities that align with my skills
                  and aspirations. I've attached my resume for your review,
                  which details my background and projects. I'm open to
                  full-time roles, internships, or assignments to demonstrate my
                  abilities further.
                </p>
              </div>
              <div className="p-6 border-t border-gray-100">
                <p className="uppercase text-sm font-semibold text-[#5651e5] mb-4">
                  Connect With Me
                </p>
                <div className="flex items-center justify-between py-2 max-w-[330px]">
                  <a
                    href="https://www.linkedin.com/in/pratik-mane-09s09/"
                    aria-label="LinkedIn Profile"
                    className="rounded-full shadow-md bg-white p-3 cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300"
                  >
                    <FaLinkedinIn className="text-[#0077b5] text-lg" />
                  </a>
                  <a
                    href="https://github.com/PratikMane09"
                    aria-label="GitHub Profile"
                    className="rounded-full shadow-md bg-white p-3 cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300"
                  >
                    <FaGithub className="text-gray-800 text-lg" />
                  </a>
                  <Link
                    to={"contact"}
                    aria-label="Email Contact"
                    className="rounded-full shadow-md bg-white p-3 cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300"
                  >
                    <AiOutlineMail className="text-[#5651e5] text-lg" />
                  </Link>
                  <a
                    href="https://drive.google.com/file/d/1aaIQr4qsqkjHx-OVz4cd11LuXtz3TWpv/view?usp=sharing"
                    aria-label="Resume"
                    className="rounded-full shadow-md bg-white p-3 cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300"
                  >
                    <BsFillPersonFill className="text-gray-700 text-lg" />
                  </a>
                  <a
                    href="https://medium.com/@Pratik_Mane_9"
                    aria-label="Medium Profile"
                    className="rounded-full shadow-md bg-white p-3 cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300"
                  >
                    <FaMediumM className="text-black text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="lg:col-span-8 w-full h-auto shadow-md rounded-xl overflow-hidden bg-white">
            <div className="p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Send Me a Message
              </h3>
              <form
                id="contactForm"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label
                      className="text-sm font-medium text-gray-700 mb-1"
                      htmlFor="name"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#5651e5] focus:border-transparent transition"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="text-sm font-medium text-gray-700 mb-1"
                      htmlFor="phoneNumber"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phoneNumber"
                      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#5651e5] focus:border-transparent transition"
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium text-gray-700 mb-1"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#5651e5] focus:border-transparent transition"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium text-gray-700 mb-1"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#5651e5] focus:border-transparent transition"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity / Project Collaboration / etc."
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium text-gray-700 mb-1"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#5651e5] focus:border-transparent transition"
                    rows={7}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#5651e5] text-white font-medium rounded-lg hover:bg-[#4540b3] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#5651e5] focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <div className="flex justify-center py-12">
          <Link to={"home"} aria-label="Back to top">
            <div className="rounded-full shadow-md bg-white p-3 cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={24} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Contact;
