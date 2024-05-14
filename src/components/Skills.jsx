import { skillsData } from "../data";

const Skills = () => {
  return (
    <section className="bg-white flex js-center outline padding-top-3 padding-bottom-3">
      <div
        className="flex column alg-center outline gap-3"
        style={{ flexBasis: "80%" }}
      >
        <h1 className="fw-500 lh-4 fs-900" style={{ flexBasis: "40%" }}>
          Skills
        </h1>
        <div
          className="flex js-center gap-2   outline"
          style={{ flexBasis: "60%" }}
        >
          {skillsData.map((item) => (
            <div
              key={item.name}
              className="flex column uppercase alg-center"
              style={{ width: "100%" }}
            >
              {" "}
              <div>
                <img
                  style={{
                    aspectRatio: "1/1",
                    backgroundColor: "purple",
                    objectFit: "cover",
                    width: "100%",
                  }}
                  src={item.img.src}
                  alt={item.img.alt}
                />
              </div>{" "}
              <p>{item.name}</p>{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
