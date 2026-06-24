const Profile = () => {
  return (
    <div className="container">
      <div className="header">
        <img className="img" src="../src/assets/react.svg" alt="profile-img" />
        <h2>Bharath Royal</h2>
        <p>Web Developer</p>
      </div>
      <div className="text">
        <p>
          Passionate web Developer with 1 year of experience in creating
          responsive and user-friendly websites.
        </p>
      </div>
      <div className="links">
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">Linkedin</a>
      </div>
    </div>
  );
};

export default Profile;
