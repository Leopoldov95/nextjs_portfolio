import Image from "next/image";
import jsonData from "../data/info.json";
const Projects = ({ active, name }) => {
  const { projects } = jsonData;
  return (
    <section className={`container ${active === name ? "active" : "hidden"}`}>
      {/* <!-- Main title --> */}
      <div className="main-title">
        <h2>
          My <span className="text-colorSecondary">Portfolio</span>
          <span className="bg-text">My Work</span>
        </h2>
      </div>
      {/* Portfolio subheader */}
      <p className="py-4 text-center xs:mt-4 mobile:text-left">
        Personal & Professional Projects I have created as a way of learning
        more about these amazing tools and technology.
      </p>
      {/* Projects cards */}
      <div className="flex flex-col gap-8 mt-12 xs:pb-24 xs:mt-4 ">
        {projects.map((item, idx) => (
          <div
            key={idx}
            className={`
  ${
    idx !== 0
      ? "before:content-[''] before:absolute before:left-1/2 before:w-[40%] before:h-[1px] before:top-0 before:bg-colorGrey5 before:-translate-x-1/2"
      : 0
  }
  ${idx % 2 !== 0 ? "flex-row-reverse" : ""}
  py-8 w-full flex relative md_project:flex-col md_project:items-center md_project:justify-center md_project:gap-8
`}
          >
            <img
              className="w-[400px] h-[300px] rounded-[14px] shadow-[1px_2px_15px_rgba(0,0,0,0.1)] object-cover brightness-95 xxs:h-[280px] xxs:w-full xxs:object-top"
              src={`/static/images/projects/${item.img}`}
              alt=""
            ></img>
            <div className="py-0 px-8 w-full flex justify-between flex-col md_project:text-center md_project:items-center md_project:justify-center mobile:text-left mobile:px-0">
              <div>
                <h2 className="text-colorSecondary text-xl">{item.title}</h2>
                <div className="flex gap-4 my-4">
                  {item.stack.map((skill, idx) => (
                    <img
                      className="tech-icon w-6 mobile:w-4"
                      key={idx}
                      src={`/static/images/icons/${skill}.svg`}
                    ></img>
                  ))}
                </div>
              </div>
              <p>{item.blurb}</p>
              {/* containers for code & link */}
              <div className="flex mt-4">
                <a
                  className={`icon__link hover:bg-colorWhite shadow-[1px_2px_15px_rgba(0,0,0,0.2)] ${
                    item.git.length === 0 ? "disabled" : ""
                  }`}
                  href={item.git}
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="text-2xl text-colorWhite mx-4 fab fa-github hover:text-colorPrimary"></i>
                </a>
                <a
                  className={`icon__link hover:bg-colorWhite shadow-[1px_2px_15px_rgba(0,0,0,0.2)] ${
                    item.link.length === 0 ? "disabled" : ""
                  }`}
                  href={item.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="text-2xl text-colorWhite mx-4 fas fa-link hover:text-colorPrimary"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
