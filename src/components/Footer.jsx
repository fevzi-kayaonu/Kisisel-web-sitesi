import { footerData } from "../data";
const Footer = () => {
  return (
    <>
      <footer className="padding-bottom-3  padding-top-3">
        <div className="flex js-center alg-center gap-4 padding-top-3 padding-bottom-3 position-relative  ">
          <div className="flex column  alg-end fs-800 fw-500 lh-4 padding-bottom-3 ">
            <p className="z-index-2">{footerData.en[0]}</p>
            <p>{footerData.en[1]}</p>
            <div className="bigstick-blue position-absolute"></div>
          </div>

          <div className="flex column fs-600 fw-500 lh-2 padding-bottom-3">
            <a href="/" className="">
              Github
            </a>
            <a href="/" className="">
              {footerData.en[2]}
            </a>
            <a href="/" className="">
              {" "}
              Linkedin
            </a>
            <a href="/" className="">
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
