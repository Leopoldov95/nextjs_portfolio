import { useState } from "react";
import jsonData from "../data/info.json";
const Contact = ({ active, name }) => {
  const { cv_link, social, contact } = jsonData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className={`container ${active === name ? "active" : "hidden"}`}>
      {/* <!-- Main title --> */}
      <div className="main-title">
        <h2>
          Contact <span className="text-colorSecondary">Me</span>
          <span className="bg-text">Contact</span>
        </h2>
      </div>
      {/* <!-- Contact Content Container --> */}
      <div className="flex pt-14 xs:flex-col xl:flex-col">
        {/* <!-- Left Contact --> */}
        <div className="flex-[2]">
          <h4 className="mt-4 text-[2rem] uppercase">Contact me here</h4>
          <p className="my-4 leading-8">
            Want to learn more about me? Feel free to get in touch! I&apos;m not
            very active on my social media. So the best way to reach me would be
            through email or though this contact form.
          </p>
          <div>
            {/* <!-- contact items --> */}
            {contact.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between xs:flex-col xs:mx-0 xs:my-4 sm:pr-[8%] xs:pr-0 mobile:text-left mobile:items-start"
              >
                <div className="grid grid-cols-[40px_1fr] xs:grid-cols-[25px_1fr]">
                  <i
                    className={`flex items-center text-[1.3rem] ${item.icon}`}
                  ></i>
                  <span className="text-[15px]">{item.key}</span>
                </div>
                <p className="p-0 leading-8 my-[0.3rem] xs:text-[15px] text-colorGrey2">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          {/* <!-- contact social media --> */}
          <div>
            <div className="contact-icon flex mt-8 xs:justify-center">
              {social.map((item, idx) => (
                <a key={idx} href={item.url} rel="noreferrer" target="_blank">
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* <!-- Right Contact --> */}
        <div className="flex-[3] ml-12 xs:mb-24 xl:ml-0 xl:mt-6 xl:mb-24">
          <form
            className="contact-form"
            data-netlify="true"
            name="contact"
            method="post"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="input-control i-c-2">
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                placeholder="Your Email"
              />
            </div>
            <div className="input-control">
              <input
                type="text"
                name="subject"
                required
                onChange={handleChange}
                placeholder="Enter Subject"
              />
            </div>
            <div className="input-control">
              <textarea
                name="message"
                cols="15"
                rows="8"
                required
                onChange={handleChange}
                placeholder="Message Here..."
              ></textarea>
            </div>
            <div className="flex justify-start xs:flex-col xs:items-center">
              {/* <!-- Link to resume here --> */}
              <button className="main-btn px-8 mr-6 xs:mr-0 py-[0.8rem] xs:mb-4">
                Send Message
                <span className="btn-icon">
                  <i className="fa-regular fa-paper-plane"></i>
                </span>
              </button>
              <a
                href={cv_link}
                rel="noreferrer"
                target="_blank"
                className="main-btn"
              >
                <span className="px-8">Download CV</span>
                <span className="btn-icon">
                  <i className="fas fa-download"></i>
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
