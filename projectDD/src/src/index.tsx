// import React from "react";
// import ReactDOM from "react-dom/client";

// import {
//     faCheckSquare,
//     faHouseLaptop,
//     faWindowMaximize,
// } from "@fortawesome/free-solid-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";
// library.add(faHouseLaptop, faCheckSquare, faWindowMaximize);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root")

if (container) {
    createRoot(container).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error("Root container element not found");
  }
