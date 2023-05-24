import React from "react";

const StudentPage: React.FC = () => {
    return (
        <div className="main">
            <div className="main__container">
                <div className="main__content">
                    <h1>Im looking for this!</h1>
                    <form action="#" method="post">
                        <label htmlFor="username">College:</label>
                        <br />
                        <select name="cars" id="cars">
                            <optgroup label="In Montreal">
                                <option value="volvo">Vanier</option>
                                <option value="saab">Dawson</option>
                            </optgroup>
                            <optgroup label="Outside Montreal">
                                <option value="mercedes">Bob</option>
                                <option value="audi">Bob</option>
                            </optgroup>
                        </select>
                        <label htmlFor="password">Subject:</label>
                        <br />
                        <select name="cars" id="cars">
                            <optgroup label="Maths">
                                <option value="volvo">Cal 1</option>
                                <option value="saab">Cal 2</option>
                            </optgroup>
                            <optgroup label="Chemistry">
                                <option value="mercedes">1</option>
                                <option value="audi">2</option>
                            </optgroup>
                        </select>
                        <label htmlFor="password">Class:</label>
                        <br />
                        <select name="cars" id="cars">
                            <option value="volvo">1</option>
                            <option value="saab">2</option>
                        </select>
                        <label htmlFor="password">Teacher:</label>
                        <br />
                        <select name="cars" id="cars">
                            <option value="mercedes">1</option>
                            <option value="audi">2</option>
                        </select>
                        <input
                            className="main__btn"
                            type="submit"
                            value="Search"
                        />
                    </form>
                </div>
                <div className="main__content">
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Rating</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Alfreds Futterkiste</td>
                                <td>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </td>
                                <td>15$</td>
                            </tr>
                            <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </td>
                                <td>15$</td>
                            </tr>
                            <tr>
                                <td>Ernst Handel</td>
                                <td>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </td>
                                <td>15$</td>
                            </tr>
                            <tr>
                                <td>Island Trading</td>
                                <td>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </td>
                                <td>15$</td>
                            </tr>
                            <tr>
                                <td>Laughing Bacchus Winecellars</td>
                                <td>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </td>
                                <td>15$</td>
                            </tr>
                            <tr>
                                <td>Magazzini Alimentari Riuniti</td>
                                <td>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </td>
                                <td>15$</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentPage;
