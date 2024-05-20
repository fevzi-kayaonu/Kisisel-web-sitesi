import { footerData } from "../data";
import { useContext } from "react";
import { Context } from "../context/context";

const Footer = () => {
  const { data } = useContext(Context);

  const direction = (e) => {
    //window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTop = 0;
    e.prevent.default();
  };

  return (
    <>
      <footer className=" flex js-center bg-white padding-bottom-3 padding-top-3 ">
        <div className="flex js-center alg-center gap-4  padding-bottom-3 position-relative flex-container padding-top-3  ">
          <div className="flex column  alg-end fs-800 fw-500 lh-4 padding-bottom-3 ">
            <p className="text-blue-big z-index-2">{data[0]?.footerData[0]}</p>
            <p>{data[0]?.footerData[1]}</p>
          </div>

          <div className="flex column fs-600 fw-500 lh-2 padding-bottom-3">
            <a href="/" className="" target="_blank">
              Github
            </a>
            <a href="#top" className="tx-black" onClick={direction}>
              {data[0]?.footerData[2]}
            </a>
            <a href="/" className="" target="_blank">
              {" "}
              Linkedin
            </a>
            <a href="/" className="" target="_blank">
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
