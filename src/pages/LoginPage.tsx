import React from "react";
import "../script";

const LoginPage: React.FC = () => {
    return (
        <div className="main">
            <div className="main__container">
                <div className="main__content">
                    <h1>Login</h1>
                    <form method="post">
                        <label htmlFor="username">Username:</label>
                        <br />
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                        />
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
                        <input
                            className="main__btn"
                            type="submit"
                            value="Login"
                        />
                        <br />

                        <h5 style={{ textAlign: "center" }}>
                            Not registered? Click <a href="register">here</a> to
                            register
                        </h5>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
