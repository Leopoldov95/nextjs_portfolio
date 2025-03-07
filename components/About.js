import jsonData from "../data/info.json";
const About = ({ active, name, mode }) => {
  const { skills_tech, cv_link, about } = jsonData;
  return (
    <section className={`container ${active === name ? "active" : "hidden"}`}>
      {/* <!-- Main title --> */}
      <div className="main-title">
        <h2>
          About <span className="text-colorSecondary">me</span>
          <span className="bg-text">info</span>
        </h2>
      </div>
      {/*  About Container */}
      <div className="grid grid-cols-2 pt-14 pb-20 xs:grid-cols-1 md:grid-cols-1">
        {/* <!-- left about --> */}
        <div className="pr-20 xs:pr-0 md_s:pr-0 md_s:text-center">
          <h4 className="text-[2rem] uppercase mobile:text-left">
            Information about me
          </h4>
          <p className="leading-8 pr-4 py-4 text-colorGrey1 xs:pl-0 sm:text-left">
            As a frontend developer, I excel at building intuitive web
            applications using technologies like HTML, CSS, JavaScript, and
            React. My work includes creating reusable Web Components that
            streamline development workflows and collaborating with
            cross-functional teams to deliver scalable solutions. By improving
            processes and reducing errors, I’ve made meaningful contributions to
            team productivity.
          </p>
          <p className="leading-8 pr-4 py-4 text-colorGrey1 xs:pl-0 sm:text-left">
            Beyond frontend development, I’m actively growing my skills in
            backend and mobile development. My personal projects include
            building RESTful APIs with Node.js, implementing databases with
            MongoDB, and developing mobile apps using React Native. These
            efforts reflect my dedication to continuous learning and my drive to
            deliver innovative solutions across various platforms.
          </p>
          {/* <!-- button container --> */}
          <div className="flex self-start">
            {/* <!-- Link to resume here --> */}
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
        </div>
        {/* <!-- right about --> */}
        <div className="grid grid-cols-2 gap-8 xs:grid-cols-1 xs:pt-10 md:pt-6 md:gap-4">
          {/* <!-- about items --> */}
          {about.map((item, idx) => (
            <div
              key={idx}
              className="transition-all duration-400 ease-out border-1 border-solid border-colorGrey5 rounded-[5px] shadow-[1px_2px_15px_rgba(0,0,0,0.1)] hover:cursor-default hover:-translate-y-[5px] hover:border-1 hover:border-solid hover:border-colorSecondary"
            >
              {/* <!-- about text --> */}
              <div className="p-6 flex flex-col">
                <p className="text-[1.75rem] font-semibold text-colorSecondary h-[4.5rem] leading-7">
                  {item.title}
                </p>
                <p className="about-box-text pl-8 relative uppercase text-[1rem] text-colorGrey1 tracking-[2px] before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-6 before:h-[2px] before:bg-colorGrey5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Tech Section */}
      <div className="pb-16">
        <h4 className="uppercase text-[1.4rem] text-center py-14 relative before:content-[''] before:absolute before:left-1/2 before:w-[40%] before:h-[1px] before:top-0 before:bg-colorGrey5 before:-translate-x-1/2">
          My Skills & Tech
        </h4>
        {/* <!-- About Tech Container --> */}
        <div className="flex flex-wrap gap-4 justify-center max-w-[900px] mx-auto">
          {/* <!-- About Tech Cards --> */}
          {skills_tech.map((item) => (
            <div key={item.name} className="about-card">
              <div className="px-3 pt-2 transition-all ease-in-out duration-400">
                <img
                  className={`w-full transition-all ease-in-out duration-400 px-2 filter-green ${
                    mode ? "icon-light" : ""
                  }`}
                  src={`/static/images/icons/${item.img}`}
                  alt=""
                />
              </div>

              <h4 className="text-center text-colorSecondary mt-2 text-xs">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
