const Nav = ({ active, setActive, mode }) => {
  const idx = [
    {
      name: "main",
      icon: "fas fa-home",
    },
    {
      name: "about",
      icon: "fas fa-user",
    },
    {
      name: "projects",
      icon: "fas fa-code",
    },
    {
      name: "work",
      icon: "fas fa-briefcase",
    },
    {
      name: "contact",
      icon: "fas fa-envelope-open",
    },
  ];
  const handleClick = (e) => {
    let newVal = e.target.dataset.id;
    setActive(newVal);
  };
  return (
    <div className="controls">
      {idx.map((item) => (
        <div
          key={item.name}
          className={`control ${
            active === item.name ? "active-btn" : ""
          } xs:my-4 xs:mx-[.3rem]`}
          data-id={item.name}
          onClick={handleClick}
        >
          <i
            className={`text-[1.2rem] text-colorGrey2 pointer-events-none ${
              item.icon
            } ${mode ? "text-white" : ""}`}
          ></i>
        </div>
      ))}
    </div>
  );
};

export default Nav;
