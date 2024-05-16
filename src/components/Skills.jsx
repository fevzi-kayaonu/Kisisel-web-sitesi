import { skillsData } from "../data";

const Skills = () => {
  return (
    <section className="bg-white flex js-center padding-top-3 padding-bottom-3 position-relative">
      <div className="flex column alg-center flex-container gap-3 padding-top-3 padding-bottom-3">
        <div className="diglet-gray position-absolute"></div>
        <h2 className="flex-basis-40 fw-500 lh-4 fs-900">
          {skillsData.en.title}
        </h2>
        <div className="flex js-center gap-2 padding-bottom-3 wrap">
          {skillsData.skills.map((item) => (
            <figure
              key={item.name}
              className="flex column alg-center gap-1 fs-600 uppercase "
            >
              {" "}
              <div>
                <img src={item.img.src} alt={item.img.alt} />
              </div>{" "}
              <figcaption>{item.name}</figcaption>{" "}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
