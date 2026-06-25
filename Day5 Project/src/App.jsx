import ProfileCard from "./components/ProfileCard";
import "./App.css";
import profileImg from "./assets/Profile.jpeg";
import sumaImg from "./assets/suma.jpeg";
import gowthamImg from "./assets/Gowtham.png";
import sunilImg from "./assets/sunil.jpeg";
import reddyImg from "./assets/reddy.jpeg";
import sumanthImg from "./assets/sumanth.jpeg";
import jagadeeshImg from "./assets/jagadeesh.jpeg";
import satheeshImg from "./assets/satheesh.jpeg";

const p1 = {
  name: "Bharath Royal",
  img: profileImg,
  role: "Python Full Stack Developer",
  bio: "A Passionate Full Stack Developer...",
  linkedin: "https://www.linkedin.com/in/chevvuru-bharath-kumar/",
  Github: "https://github.com/bharathroyal918",
};
const p2 = {
  name: "Sumathi Reddy",
  img: sumaImg,
  role: "Data Analyst",
  bio: "A Passionate Data Analyst...",
  linkedin: "https://www.linkedin.com/in/sumathi-reddy-9168bb267/",
};
const p3 = {
  name: "Gowtham Reddy",
  img: gowthamImg,
  role: "Java Full Stack Developer",
  bio: "A Passionate Java Full Stack Developer...",
  linkedin: "https://www.linkedin.com/in/v-gowtham-reddy/",
};
const p4 = {
  name: "Sunil Reddy",
  img: sunilImg,
  role: "Data Scientist",
  bio: "A Passionate Data Scientist...",
  linkedin: "https://www.linkedin.com/in/sunil-reddy-6385bb271/",
};
const p5 = {
  name: "Reddy Babu",
  img: reddyImg,
  role: "Data Analyst",
  bio: "A Passionate Data Analyst...",
  linkedin: "https://www.linkedin.com/in/chevvuru-bharath-kumar/",
};
const p6 = {
  name: "Sumanth",
  img: sumanthImg,
  role: "Portrait Drawing Specialist",
  bio: "A Passionate Full Stack Developer...",
  linkedin: "https://www.linkedin.com/in/sumanth-rachineni/",
};
const p7 = {
  name: "Jagadeesh",
  img: jagadeeshImg,
  role: "Associate Engineer @TCS",
  bio: "Jr. Associate Engineer",
  linkedin: "https://www.linkedin.com/in/chevvuru-bharath-kumar/",
};
const p8 = {
  name: "Satheesh",
  img: satheeshImg,
  role: "Data Scientist",
  bio: "A Passionate Data Scientist...",
  linkedin: "https://www.linkedin.com/in/golla-sathish/",
};

export default function App() {
  return (
    <>
      <h1 className="heading">Friends in Different Professions </h1>
      <div className="cards-container">
        <ProfileCard {...p1} />
        <ProfileCard {...p2} />
        <ProfileCard {...p3} />
        <ProfileCard {...p4} />
        <ProfileCard {...p5} />
        <ProfileCard {...p6} />
        <ProfileCard {...p7} />
        <ProfileCard {...p8} />
        {/* <ProfileCard name="Lucky" role="Java FSD" />
      <ProfileCard name="Sathish" role="Testing Engineer " />
      <ProfileCard name="Sailu" role="Data Analyst" />
      <ProfileCard name="Sreeja" role="Data Scientist" />
      <ProfileCard name="Karthik" role="React Developer" /> */}
      </div>
    </>
  );
}
