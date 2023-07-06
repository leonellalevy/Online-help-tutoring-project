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
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
