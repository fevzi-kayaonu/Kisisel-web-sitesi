const profileData = {
  birthday: {
    en: { name: "Birth Date", value: "24.03.1996" },
    tr: { name: "Doğum Tarihi", value: "24.03.1996" },
  },
  city: {
    en: { name: "City", value: "Ankara" },
    tr: { name: "İkamet Şehri", value: "Ankara" },
  },
  education: {
    en: { name: "Education", value: "Hacettepe Ünv. Biyoloji Lisans, 2016" },
    tr: {
      name: "Eğitim Durumu",
      value: "Hacettepe Ünv. Biyoloji Lisans, 2016",
    },
  },
  preferred: {
    en: { name: "Preferred Role", value: "Frontend,UI" },
    tr: { name: "Tercih Ettiği Rol", value: "Frontend,UI" },
  },
};

const Profile = () => {
  return (
    <section className="bg-gray flex js-center outline padding-top-3 padding-bottom-3">
      <div className="bg-gray flex column js-center alg-center gap-2 flex-basis-80 outline">
        <h1 className="fs-800 fw-500 lh-3">Profile</h1>
        <div className="flex js-center alg-center gap-3 outline">
          <article className="bg-white  flex column  gap-1 outline flex-basis-40 padding-top-2 padding-bottom-2 ">
            <h3 className="fs-600 tx-red">Basic Information</h3>{" "}
            {Object.entries(profileData).map(([key, value]) => (
              <div className="flex" key={key}>
                <p className="flex-basis-40">{value.en.name}</p>
                <p className="flex-basis-40">{value.en.value}</p>
              </div>
            ))}
          </article>
          <article className="flex column flex-basis-40">
            <h3>About me</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <p>
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!{" "}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Profile;
