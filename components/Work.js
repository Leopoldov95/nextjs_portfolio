import jsonData from "../data/info.json";
const Work = ({ active, name }) => {
  const { work } = jsonData;
  return (
    <section className={`container ${active === name ? "active" : "hidden"}`}>
      {/* <!-- Main title --> */}
      <div className="main-title">
        <h2>
          My <span className="text-colorSecondary">Experience</span>
          <span className="bg-text">Career</span>
        </h2>
      </div>
      {/* <!-- Work Section container --> */}
      <div className="pt-14 pb-20">
        <h4 className="uppercase text-[1.4rem] text-center pb-14 relative">
          My Work Timeline
        </h4>
        <div className="gap-8 pb-12">
          {work.map((item, idx) => (
            <div
              key={idx}
              className="mb-6 relative pl-12 text-start border-l-[1px] border-solid border-colorGrey5 md_s:ml-5 xs:ml-4"
            >
              <div className="tl-icon">
                <i className="fas fa-briefcase text-[1.3rem]"></i>
              </div>
              <p className="tl-duration">{item.dates}</p>
              <h5 className="py-4 uppercase text-[1.3rem] font-semibold">
                {item.title}
                <span className="text-colorGrey2 font-medium text-[1.2rem]">
                  - {item.company}
                </span>
                {item.location && (
                  <span className="text-colorGrey2 italic font-medium text-[1rem]">
                    - {item.location}
                  </span>
                )}
              </h5>
              <ul>
                {item.duties.map((duty, idx) => (
                  <li key={idx} className="text-colorGrey2">
                    {duty}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
