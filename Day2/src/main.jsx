// understanding component and creating the component

import { createRoot } from "react-dom/client";
import("./index.css");

let name = "Bharath";

const Greetings = () => {
  return <h1>Hello, How are you... Mr. {name}</h1>;
};

createRoot(document.getElementById("root")).render(<Greetings />);
