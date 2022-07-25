import Image from "next/image";
import jsonData from "../data/info.json";
const Projects = ({ active, idx }) => {
  const { projects } = jsonData;
  return (
    <section className={`container ${active === idx ? "active" : "hidden"}`}>
      {/* <!-- Main title --> */}
      <div className="main-title">
        <h2>
          My <span className="text-colorSecondary">Portfolio</span>
          <span className="bg-text">My Work</span>
        </h2>
      </div>
      {/* Portfolio subheader */}
      <p className="py-4 text-center ">
        Projects I have created as a way of learning more about these amazing
        tools.
      </p>
      {/* Projects cards */}
      <div className="grid grid-cols-3 gap-8 mt-12 lg:grid-cols-2 x_sm:grid-cols-1 xs:grid-cols-1 xs:pb-24 xs:mt-4">
        {projects.map((item, idx) => (
          <div key={idx} className="portfolio-items relative">
            <div className=" h-[300px]">
              <Image
                layout="fill"
                className="w-full h-[300px] rounded-[15px] object-cover"
                src={`/static/images/projects/${item.img}`}
                alt=""
              />
            </div>
            <div className="hover-items">
              <h3 className="text-2xl text-colorWhite mb-6">{item.title}</h3>
              <div className=" flex justify-center items-center">
                <a
                  className="icon hover:bg-colorWhite"
                  href={item.git}
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="text-2xl text-colorWhite mx-4 fab fa-github hover:text-colorPrimary"></i>
                </a>
                <a
                  className="icon hover:bg-colorWhite"
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
