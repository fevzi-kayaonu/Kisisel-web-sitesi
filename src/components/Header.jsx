import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { headerData } from "../data";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("tr");

  const toogle = (e) => {
    const name = e.target.name;
    if (name === "mode") setDarkMode(!darkMode);
    else if (name === "language") setLang(lang === "tr" ? "en" : "tr");
  };
  return (
    <>
      <header className="bg-gray flex js-center padding-top-3 padding-bottom-3 position-relative">
        <div className="polo-gray position-absolute"></div>
        <div className="circle position-absolute"></div>
        <div className="diglet-pink position-absolute"></div>

        <div className="flex column alg-center gap-3 flex-basis-80 padding-bottom-3 ">
          <div className="flex mode alg-center gap-1 padding-top-3 padding-bottom-3 uppercase ">
            <button className="radio-btn" name="mode" onClick={toogle}>
              <div className={`radio-inner ${darkMode ? "active" : ""}`}></div>
            </button>
            <div className="fw-700 lh-1 tx-gray uppercase">
              {headerData[lang].selections.mode[darkMode ? 1 : 0]} |{" "}
              <button
                className="tx-red fw-700 lh-1 uppercase"
                name="language"
                onClick={toogle}
              >
                {headerData[lang].selections.language}
              </button>
            </div>
          </div>

          <div className="flex  space-between alg-center gap-3 ">
            <div
              style={{ flexBasis: "65%" }}
              className=" flex column gap-3 position-relative "
            >
              <p className="fs-700 fw-400"> {headerData[lang].title}👋</p>
              <div className="stick-pink position-absolute"></div>
              <h1 className="fs-800 fw-500 lh-4 z-index-2">
                {headerData[lang].content}
              </h1>
              <div className="flex gap-2 padding-top-1">
                <FontAwesomeIcon className="fa-3x" icon={faLinkedin} />
                <FontAwesomeIcon className="fa-3x" icon={faGithub} />
                <i></i>
              </div>
              <div className="fs-500 fw-400 lh-2">
                <p>
                  {headerData[lang].text[0]}{" "}
                  <span className="tx-red">{headerData[lang].text[1]}</span>{" "}
                  {headerData[lang].text[2]}{" "}
                  <span className="tx-red"> {headerData[lang].text[3]}</span>{" "}
                  {headerData[lang].text[4]}
                </p>
                <p>
                  {headerData[lang].text[5]} -{" "}
                  <a href="pratamaiosi@gmail.com" className="tx-red">
                    pratamaiosi@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div
              className="padding-top-1 padding-bottom-1 "
              style={{ flexBasis: "35%" }}
            >
              <div className="profileimg"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
