import ProfileCard from "./components/ProfileCard";
import "./App.css";

const p1 = {
  name: "Bharath Royal",
  img: "./src/assets/Profile.jpeg",
  role: "Python Full Stack Developer",
  bio: "A Passionate Full Stack Developer...",
  linkedin: "https://www.linkedin.com/in/chevvuru-bharath-kumar/",
  Github: "https://github.com/bharathroyal918",
};
const p2 = {
  name: "Sumathi Reddy",
  img: "./src/assets/suma.jpeg",
  role: "Data Analyst",
  bio: "A Passionate Data Analyst...",
  linkedin: "https://www.linkedin.com/in/sumathi-reddy-9168bb267/",
};
const p3 = {
  name: "Gowtham Reddy",
  img: "./src/assets/Gowtham.png",
  role: "Java Full Stack Developer",
  bio: "A Passionate Java Full Stack Developer...",
  linkedin: "https://www.linkedin.com/in/v-gowtham-reddy/",
};
const p4 = {
  name: "Sunil Reddy",
  img: "./src/assets/sunil.jpeg",
  role: "Data Scientist",
  bio: "A Passionate Data Scientist...",
  linkedin: "https://www.linkedin.com/in/sunil-reddy-6385bb271/",
};
const p5 = {
  name: "Reddy Babu",
  img: "./src/assets/reddy.jpeg",
  role: "Data Analyst",
  bio: "A Passionate Data Analyst...",
  linkedin: "https://www.linkedin.com/in/chevvuru-bharath-kumar/",
};
const p6 = {
  name: "Sumanth",
  img: "./src/assets/sumanth.jpeg",
  role: "Portrait Drawing Specialist",
  bio: "A Passionate Full Stack Developer...",
  linkedin: "https://www.linkedin.com/in/sumanth-rachineni/",
};
const p7 = {
  name: "Jagadeesh",
  img: "./src/assets/jagadeesh.jpeg",
  role: "Associate Engineer @TCS",
  bio: "Jr. Associate Engineer",
  linkedin: "https://www.linkedin.com/in/chevvuru-bharath-kumar/",
};
const p8 = {
  name: "Satheesh",
  img: "./src/assets/satheesh.jpeg",
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
