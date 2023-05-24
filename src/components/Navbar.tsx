import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

interface NavbarProps {
    // Define any props you want to pass to the Navbar component
}

const Navbar: React.FC<NavbarProps> = (props) => {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to="/" id="navbar__logo">
                    <i className="fas fa-baby"></i>PROJECT FOR DD
                </Link>

                <div className="navbar__toggle" id="mobile-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <Link to="/" className="navbar__links">
                            Home
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/register" className="navbar__links">
                            More
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/student" className="navbar__links">
                            Student
                        </Link>
                    </li>
                    <li className="navbar__btn">
                        <Link to="/tech" className="navbar__links">
                            Tech
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
