import React, { ReactNode } from "react";
import styled from "styled-components";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import TechPage from "./pages/TechPage";
import StudentPage from "./pages/StudentPage";
import { Helmet } from "react-helmet";

interface LayoutProps {
    children: ReactNode;
}

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
                <link rel="stylesheet" href="styles.css" />
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

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/student" element={<StudentPage />} />
                    <Route path="/tech" element={<TechPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
