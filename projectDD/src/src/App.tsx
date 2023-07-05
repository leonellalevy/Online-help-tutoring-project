// import "./index.css";
// import "style-loader!./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import StudentPage from "./pages/StudentPage";
import AboutPage from "./pages/AboutPage";
import HelperPage from "./pages/HelperPage";
import { Helmet } from "react-helmet";
import React, { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import "./script";
// const s = require("./style.css");
interface LayoutProps {
    children: ReactNode;
}

// // //LOOK FOR ERRORS CUZ ME DON'T UNDERSTAND ERRORS! (console ,inspect)
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>DD project</title>
                <link rel="stylesheet" href="./index.css" />
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
                    integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <div>
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    );
};

// const App: React.FC = () => {
//     return (
//         <Router>
//             <Layout>
//                 <Routes>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/student" element={<StudentPage />} />
//                     <Route path="/login" element={<LoginPage />} />
//                     <Route path="/about" element={<AboutPage />} />
//                     <Route path="/register" element={<RegisterPage />} />
//                     <Route path="/helper" element={<HelperPage />} />
//                 </Routes>
//             </Layout>
//         </Router>
//     );
// };

// export default App;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App: React.FC = () => {
//     const [data, setData] = useState<any>(null);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     function fetchData1() {
//         axios
//             .get("/api/data")
//             .then((response) => {
//                 console.log(response.data);
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }
//     fetchData1();

//     const fetchData = () => {
//         axios
//             .get("/api/data")
//             .then((response) => {
//                 setData(response.data);
//                 console.log(data);
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     };

//     return (
//         <div>
//             <h1>Welcomepopo with me app!</h1>
//             {data &&
//                 data.data && ( // Add a null check for data.data
//                     <div>
//                         <h2>{data.message}</h2>
//                         <ul>
//                             {data.data.map((item: string, index: number) => (
//                                 <li key={index}>{item}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//         </div>
//     );
// };

// export default App;

const App: React.FC = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("/api/data");
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        // <div>
        //     <h1>Welcome to my withjhj me app!</h1>
        //     {data && (
        //         <div>
        //             <h2>{data.message}</h2>
        //         </div>
        //     )}
        // </div>
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/student" element={<StudentPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/helper" element={<HelperPage />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
