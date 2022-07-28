import jsonData from "../data/info.json";
const Main = ({ active, name, setActive }) => {
  const { cv_link } = jsonData;
  return (
    <header className={`container ${active === name ? "active" : "hidden"}`}>
      {/* Header Content */}
      <div className=" grid grid-cols-2 min-h-screen h-full xs:grid-cols-1 xs:pb-24 md_s:grid-cols-1 md_s:pb-24">
        {/* Left Content Header */}
        <div className=" flex items-center relative">
          {/* Header Shape */}
          <div className="h-full w-[65%] duration-400 ease-in-out transition-all bg-colorSecondary absolute left-0 top-0 -z-[1] header-bg-clip xs:hidden md_s:hidden"></div>
          {/* header image container */}
          <div className="rounded-[14px] relative bg-black h-[90%] w-[68%] ml-16 duration-400 ease-in-out transition-all md_s:w-[90%] md_s:mx-auto md_s:my-0">
            {/* Header Image */}
            <img
              className="h-full object-cover w-full duration-400 ease-in-out transition-all grayscale hover:grayscale-0 xs:m-[0_auto] xs:w-[90%]"
              src="/static/images/me.png"
              alt="hero img"
            ></img>
          </div>
        </div>
        {/* <!-- Right Header content --> */}
        <div className="flex flex-col justify-center pr-72 xl:pr-52 lg:pr-36 xs:grid-rows-1 xs:pr-0 xs:w-[90%] xs:m-[0_auto] md_s:row-span-full md_s:pr-0 md_s:w-[90%] md_s:mx-auto md_s:my-0">
          {/* <!-- Name --> */}
          <h1 className="text-5xl xs:text-[2.5rem] xs:text-center xs:pt-12 md_s:text-[2.5rem] md_s:text-center md_s:pt-12">
            Hi, Im <span className="text-colorSecondary">Leopoldo Ortega.</span>{" "}
            A Web Developer
          </h1>
          <p className="m-6 leading-8">
            I am a self-taught Frontend Web Developer working at Frequence. I
            specialize in HTML, CSS, and JavaScript and use React as my
            preferred frontend framework. Additionally, I also have knowledge
            with the backend and have used Node.js, Express, and databases to
            build Full-Stack Web Applications.
          </p>
          {/* <!-- header main button --> */}
          {/* <!-- Header Button container --> */}
          <div className="flex pt-[5px] self-start flex-wrap items-baseline md:justify-start xs:justify-center xs:mx-auto xs:flex-col">
            {/* <!-- Call to Action --> */}
            <a
              className="main-btn mr-4 mb-4 xs:mr-0"
              onClick={() => setActive("projects")}
            >
              <span className="px-8">See Projects</span>
              <span className="btn-icon icon-1">
                <i className="fas fa-code"></i>
              </span>
            </a>
            {/* <!-- Link to resume here --> */}
            <a
              href={cv_link}
              className="main-btn"
              rel="noreferrer"
              target="_blank"
            >
              <span className="px-8">Download CV</span>
              <span className="btn-icon">
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Main;
