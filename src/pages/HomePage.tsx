import React from "react";
import "../script";
// TODO the navbar is not closing when selecting a new page, correct that

const HomePage: React.FC = () => {
    return (
        <div className="main">
            <div className="main__container">
                <div className="main__content">
                    <h1>Project for DD</h1>
                    <h2>Get help to not fail your classes</h2>
                    <button className="main__btn">
                        <a href="#">I'm a student!</a>
                    </button>
                    <button className="main__btn">
                        <a href="#">I'm a helper!</a>
                    </button>
                </div>
                <div className="main__img--container">
                    <img
                        id="main__img"
                        src="https://thumbs.dreamstime.com/b/tutoring-tutor-his-online-education-teaching-tutoring-learning-teacher-coach-management-82168018.jpg"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
