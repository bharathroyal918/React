import ProfileCard from "./components/ProfileCard";
import "./App.css";
export default function App() {
  return (
    <div className="cards-container">
      <ProfileCard name="Bharath Royal" role="Python FSD" />
      <ProfileCard name="Lucky" role="Java FSD" />
      <ProfileCard name="Sathish" role="Testing Engineer " />
      <ProfileCard name="Sailu" role="Data Analyst" />
      <ProfileCard name="Sreeja" role="Data Scientist" />
      <ProfileCard name="Karthik" role="React Developer" />
    </div>
  );
}
