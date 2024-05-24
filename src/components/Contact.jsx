import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import emailjs from "emailjs-com";
import { Link } from "react-scroll";
import contact from "../assets/contact.png";
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
    <div name="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid grid-cols-6 gap-8">
          {/**left */}

          <div className="col-span-6 lg:col-span-2 w-full h-full shadow-lg shadow-gray-300 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contact}
                  width="800"
                  height="1000"
                  alt="/"
                />
              </div>
              <div className="pt-8">
                <h2 className="py-4">Pratik Mane</h2>

                <p className="py-4">
                  I am excited about the opportunities .I've attached my resume
                  for your review, which details my background and projects. I'm
                  open to full-time roles, internships, or assignments to
                  demonstrate my abilities further.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 pb-4 text-[#5651e5] font-semibold">
                  Connect With Me
                </p>
                <div className="flex items-center justify-between py-4 max-w-[330px]">
                  <a href="https://www.linkedin.com/in/pratik-mane-09s09/">
                    <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href="https://github.com/PratikMane09">
                    <div className="rounded-full shadow-lg shadow-gray-300 p-6  cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <Link to={"contact"}>
                    <div className="rounded-full shadow-lg shadow-gray-300 p-6  cursor-pointer hover:scale-105 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <a href="https://drive.google.com/file/d/1rJ2Tz40ZD0aKvMkSWRBC-eSwOZslBZ49/view?usp=sharing">
                    <div className="rounded-full shadow-lg shadow-gray-300 p-6  cursor-pointer hover:scale-105 ease-in duration-300">
                      <BsFillPersonFill />
                    </div>
                  </a>
                  <a href="https://medium.com/@Pratik_Mane_9">
                    <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaMediumM />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/** right*/}
          <div className="col-span-6 lg:col-span-4 w-full h-auto shadow-lg shadow-gray-300 rounded-xl lg:p-4">
            <div className="p-4">
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link to={"home"}>
            <div className="rounded-full shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
