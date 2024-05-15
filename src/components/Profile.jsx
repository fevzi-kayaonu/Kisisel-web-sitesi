import { profileData } from "../data";

const Profile = () => {
  return (
    <section className="bg-gray flex js-center  padding-top-3 padding-bottom-3 position-relative">
      <div className="bg-gray flex column js-center alg-center gap-2 flex-basis-80 padding-bottom-3">
        <div className="polo-pink position-absolute"></div>
        <h2 className="fs-800 fw-500 lh-3">{profileData.en.titles[0]}</h2>
        <div className="flex js-center alg-center gap-4 ">
          <article className="profile-card bg-white  flex column  gap-1  flex-basis-40 padding-top-2 padding-bottom-2 padding-left-1">
            <h3 className="ff-play fs-600 tx-red">
              {profileData.en.titles[1]}
            </h3>{" "}
            {Object.entries(profileData.en.information).map(([key, value]) => (
              <div className="flex" key={key}>
                <p className="flex-basis-40 fw-600">{value.name}</p>
                <p className="flex-basis-40 fw-400">{value.value}</p>
              </div>
            ))}
          </article>
          <article className=" flex column gap-2 flex-basis-40 position-relative">
            <div className="stick-blue position-absolute"></div>
            <h3 className="fs-600 fw-400 lh-2 ff-play z-index-2">
              {profileData.en.about.title}
            </h3>
            <p className="fs-500 fw-400 lh-2">
              {profileData.en.about.content[0]}
            </p>
            <p className="fs-500 fw-400 lh-2">
              {profileData.en.about.content[1]}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Profile;
