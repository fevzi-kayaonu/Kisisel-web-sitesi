const Profile = () => {
  return (
    <section className="bg-gray flex js-center">
      <div className="bg-gray flex column js-center alg-center">
        <h1>Profile</h1>
        <div className="flex alg-center">
          <article className="flex column bg-white">
            <h3>Basic Information</h3>{" "}
            <div>
              <p>Doğum tarihi </p>
              <p>24.03.1996</p>
            </div>
            <div>
              <p>İkamet şehri</p>
              <p>Ankara</p>
            </div>
            <div>
              <p>Eğitim durumu</p>
              <p>Hacettepe Ünv. Biyoloji Lisans, 2016</p>
            </div>
            <div>
              <p>Tercih Ettiği Rol</p>
              <p>Frontend, UI</p>
            </div>
          </article>
          <article className="flex column">
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
