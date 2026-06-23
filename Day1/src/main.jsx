// import { createRoot } from "react-dom/client";

// const root = createRoot(document.getElementById("root"));

// root.render(<h1>helllo to react js</h1>);

import { createRoot } from "react-dom/client";

let name = "Bharath Royal";
const d = new Date();

createRoot(document.getElementById("root")).render(
  <div className="container">
    <h1>
      Hello this is {name.toUpperCase()}, <br /> & I'm learninng the React..
    </h1>
    <h3>Today Date is : {d.getDate()} </h3>
  </div>,
);
