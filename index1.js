import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "namste react");
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
root.render(heading);