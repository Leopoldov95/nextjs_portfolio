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
          <h4 className="text-[2rem] uppercase">Information about me</h4>
          <p className="leading-8 p-4 text-colorGrey1 xs:pl-0">
            My name is Leopoldo Ortega, I am a Web Developer specializing in
            Front-End Development and have also worked with the Back-End. I
            enjoy solving problems through code and enjoy working alongside
            other excellent developers.
          </p>
          <p className="leading-8 p-4 text-colorGrey1 xs:pl-0">
            By building interactive websites that look great across all
            platforms using mainly HTML, SASS, JavaScript, and ReactJS, I get
            the opportunity to experiment with new tools and learn new skills. I
            find Web Development to be a perfect blend of technical challenges
            and creativity. You can find me cycling, going on a hike, or
            traveling when I&apos;m not coding.
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
                <p className="text-3xl font-semibold text-colorSecondary h-[4.5rem]">
                  {item.title}
                </p>
                <p className="about-box-text pl-12 relative uppercase text-[1rem] text-colorGrey1 tracking-[2px] before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-8 before:h-[2px] before:bg-colorGrey5">
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
