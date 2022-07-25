const Nav = ({ active, setActive }) => {
  const idx = [
    "fas fa-home",
    "fas fa-user",
    "fas fa-code",
    "fas fa-briefcase",
    "fas fa-envelope-open",
  ];
  const handleClick = (e) => {
    let newVal = Number(e.target.dataset.id);
    setActive(newVal);
  };
  return (
    <div className="controls">
      {idx.map((item, id) => (
        <div
          key={id}
          className={`control ${
            active === id ? "active-btn" : ""
          } xs:my-4 xs:mx-[.3rem]`}
          data-id={id}
          onClick={handleClick}
        >
          <i
            className={`text-[1.2rem] text-colorGrey2 pointer-events-none ${item}`}
          ></i>
        </div>
      ))}
    </div>
  );
};

export default Nav;
