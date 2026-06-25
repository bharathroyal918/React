import "./ProfileCard.css";

export default function ProfileCard({
  img,
  name,
  role,
  bio,
  linkedin,
  insta,
  Github,
}) {
  return (
    <div className="profile-card">
      <img src={img} alt="profile logo" />
      <h1 className="name">{name}</h1>
      <h3 className="title"> {role} </h3>
      <p>{bio}</p>
      <div className="links">
        <a href={linkedin} target="_blank">
          Linkedin
        </a>
        <a href={insta} target="_blank">
          Instagram
        </a>
        <a href={Github} target="_blank">
          Github
        </a>
      </div>
    </div>
  );
}
