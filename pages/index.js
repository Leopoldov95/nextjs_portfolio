import { useState, Fragment } from "react";

import Nav from "../components/Nav";
import Main from "../components/Main";
import About from "../components/About";
import Projects from "../components/Projects";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Head from "next/head";

export default function Home() {
  const [active, setActive] = useState("main"); // <-- used to show the selected page
  const [mode, setMode] = useState(false);
  const toggleMode = () => {
    document.body.classList.toggle("light-mode");
    setMode(!mode);
  };
  return (
    <Fragment>
      <Head>
        <title>Leo Ortega</title>
      </Head>
      <Main mode={mode} active={active} setActive={setActive} name="main" />
      <About mode={mode} active={active} name="about" />
      <Projects mode={mode} active={active} name="projects" />
      <Work mode={mode} active={active} name="work" />
      <Contact mode={mode} active={active} name="contact" />

      <Nav active={active} setActive={setActive} mode={mode} />
      {/* <!-- Light Button --> */}
      <div className="theme-btn xs:w-[50px] xs:h-[50px]" onClick={toggleMode}>
        <i
          className={`text-[1.4rem] text-colorGrey2 pointer-events-none fas fa-adjust ${
            mode && "text-white"
          }`}
        ></i>
      </div>
    </Fragment>
  );
}
