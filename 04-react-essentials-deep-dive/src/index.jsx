import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);

// Below is the non-jsx approach of creating element using React. It is verbose and not necessary intuitive.
// ReactDOM.createRoot(entryPoint).render(React.createElement(App));
