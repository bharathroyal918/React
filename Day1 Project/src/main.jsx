import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <div className="container">
    <div className="heading">
      <img className="img" src="../src/assets/react.svg" alt="react-logo" />
      <h1 className="h1">Rules of jsx</h1>
    </div>

    <div className="rules">
      <ul>
        <li>Must have enclose JSX in a Root Element</li>
        <li>Close the Tags Properly </li>
        <li>Use className for CSS class as class is reserved word inn js</li>
        <li>use camelCase for attributes</li>
        <li>use flower brackets for js</li>
      </ul>
    </div>
  </div>,
);
