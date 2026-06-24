import "./ProfileCard.css";

export default function ProfileCard(props) {
  return (
    <div className="profile-card">
      <img src="./src/assets/Profile.jpeg" alt="profile logo" />
      <h1 className="name">{props.name}</h1>
      <h3 className="title"> {props.role} </h3>
      <p>A Passionate React Developer in Full Stack Developer</p>
      <div className="links">
        <a href="#">Linkedin</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
      </div>
    </div>
  );
}
