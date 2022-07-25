import { useState, Fragment } from "react";

import Nav from "../components/Nav";
import Main from "../components/Main";
import About from "../components/About";
import Projects from "../components/Projects";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Head from "next/head";

export default function Home() {
  const sections = [Main, About, Projects, Work, Contact];
  const [active, setActive] = useState(0); // <-- used to show the selected page
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
      {sections.map((Page, idx) => {
        return <Page key={idx} active={active} idx={idx} mode={mode} />;
      })}

      <Nav active={active} setActive={setActive} />
      {/* <!-- Light Button --> */}
      <div className="theme-btn xs:w-[50px] xs:h-[50px]" onClick={toggleMode}>
        <i className="text-[1.4rem] text-colorGrey2 pointer-events-none fas fa-adjust"></i>
      </div>
    </Fragment>
  );
}
