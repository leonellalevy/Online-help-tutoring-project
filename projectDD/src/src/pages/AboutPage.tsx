import React from "react";
import "../script";

const AboutPage: React.FC = () => {
    const randomNumber = Math.floor(Math.random() * 100);

    return (
        <div>
            <h1>About Page</h1>
            <p>Welcome to the About page!</p>
            <p>This is a random number: {randomNumber}</p>
        </div>
    );
};

export default AboutPage;
