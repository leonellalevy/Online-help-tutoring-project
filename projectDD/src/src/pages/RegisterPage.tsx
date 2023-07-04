import React from "react";
import "../script";

const RegisterPage: React.FC = () => {
    return (
        <div className="main">
            <div className="main__container">
                <div className="main__content">
                    <form method="post">
                        <h1>Helper Registration</h1>
                        <label htmlFor="username">Username:</label>
                        <br />
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                        />
                        <br />
                        <label htmlFor="email">Email:</label>
                        <br />
                        <input type="text" id="email" name="email" required />
                        <br />
                        <label htmlFor="password">Password:</label>
                        <br />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                        />
                        <br />
                        <label htmlFor="enable2fa">Enable 2-FA?</label>
                        <input
                            type="checkbox"
                            id="enable2fa"
                            name="enable2fa"
                            value="true"
                        />
                        <br />
                        <br />
                        <input
                            className="main__btn"
                            type="submit"
                            value="Register"
                        />

                        <h5 style={{ textAlign: "center" }}>
                            Already registered? Click <a href="login">here</a>{" "}
                            to login
                        </h5>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
