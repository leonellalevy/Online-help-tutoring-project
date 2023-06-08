import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
    faB,
    faCheckSquare,
    faCoffee,
    faDatabase,
    faHouseLaptop,
    faS,
    faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(
    faB,
    faS,
    faHouseLaptop,
    faCheckSquare,
    faCoffee,
    faDatabase,
    faWindowMaximize
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
