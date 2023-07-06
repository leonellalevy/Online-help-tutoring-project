import React, { useState, useEffect, useLayoutEffect } from "react";

interface Helper {
    username: string;
    rating: number;
    price: number;
}

interface College {
    college_id: number;
    college_name: string;
}

interface Course {
    course_id: number;
    course_name: string;
    course_teacher: string;
    course_session: string;
    course_college: string;
}

interface Teacher {
    teacher_id: number;
    teacher_fname: string;
    teacher_lname: string;
}

interface Session {
    session_id: number;
    session_name: string;
    session_year: string;
}

const StudentPage: React.FC = () => {
    const [colleges, setColleges] = useState<College[]>([]);
    const [courses, setCourses] = useState<Course[]>([]);
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [sessions, setSessions] = useState<Session[]>([]);
    const [showTable, setShowTable] = useState(false);
    const [helpers, setHelpers] = useState<Helper[]>([]);
    const [selectedHelper, setSelectedHelper] = useState<Helper | null>(null);
    const [showDialog, setShowDialog] = useState(false);
    const bob = 0;

    useLayoutEffect(() => {
        fetchColleges();
        fetchCourses();
        fetchTeachers();
        fetchSessions();
    }, []);

    const fetchColleges = async () => {
        try {
            const response = await fetch("/api/colleges/");
            const data = await response.json();

            setColleges(data.colleges);
        } catch (error) {
            console.log("Error fetching colleges:", error);
        }
    };

    const fetchCourses = async () => {
        try {
            const response = await fetch("/api/courses/");
            const data = await response.json();

            console.log("Courses data:", data); // Add this line

            setCourses(data.courses);
        } catch (error) {
            console.log("Error fetching courses:", error);
        }
    };

    const fetchTeachers = async () => {
        try {
            const response = await fetch("/api/teachers/");
            const data = await response.json();

            setTeachers(data.teachers);
        } catch (error) {
            console.log("Error fetching teachers:", error);
        }
    };

    const fetchSessions = async () => {
        try {
            const response = await fetch("/api/sessions/");
            const data = await response.json();

            setSessions(data.sessions);
        } catch (error) {
            console.log("Error fetching sessions:", error);
        }
    };

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        // Perform search logic and update the 'helpers' state with the search results
        const searchResults: Helper[] = [
            {
                username: "Marinella Levy Martel",
                rating: 5,
                price: 15,
            },
            {
                username: "Centro comercial Moctezuma",
                rating: 5,
                price: 15,
            },
            {
                username: "Ernst Handel",
                rating: 1,
                price: 15,
            },
            {
                username: "Island Trading",
                rating: 2,
                price: 15,
            },
            {
                username: "Laughing Bacchus Winecellars",
                rating: 3,
                price: 15,
            },
            {
                username: "Magazzini Alimentari Riuniti",
                rating: 3,
                price: 15,
            },
        ];

        setHelpers(searchResults);
        setShowTable(true);
    };

    const renderStars = (rating: number) => {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<span key={i} className="fa fa-star"></span>);
            } else {
                stars.push(<span key={i} className=""></span>);
            }
        }

        return stars;
    };

    const handleAskForHelp = (helper: Helper) => {
        setSelectedHelper(helper);
        setShowDialog(true);
    };

    const handleCloseDialog = () => {
        setShowDialog(false);
    };

    console.log(courses);

    return (
        <div className="main">
            <div className="main__container">
                <div className="main__content">
                    <h1>Im looking for this!</h1>
                    <form onSubmit={handleSearch}>
                        <label htmlFor="username">College:</label>
                        <br />
                        <select name="college" id="college">
                            <option value="0">Select a college</option>

                            {colleges.map((college) => (
                                <option
                                    key={college.college_id}
                                    value={college.college_id}
                                >
                                    {college.college_name}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="username">Course:</label>
                        <br />
                        <select name="course" id="course">
                            <option value="">Select a course</option>
                            {courses.map((course) => (
                                <option
                                    key={course.course_id}
                                    value={course.course_id} // Fix the value here
                                >
                                    {course.course_name}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="password">Session:</label>
                        <br />
                        <select name="session" id="session">
                            <option value="0">Select a session</option>

                            {sessions.map((session) => (
                                <option
                                    key={session.session_id}
                                    value={session.session_id}
                                >
                                    {session.session_name +
                                        " " +
                                        session.session_year}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="password">Teacher:</label>
                        <br />
                        <select name="teacher" id="teacher">
                            <option value="0">Select a teacher</option>

                            {teachers.map((teacher) => (
                                <option
                                    key={teacher.teacher_id}
                                    value={teacher.teacher_id}
                                >
                                    {teacher.teacher_fname +
                                        " " +
                                        teacher.teacher_lname}
                                </option>
                            ))}
                        </select>
                        <input
                            className="main__btn"
                            type="submit"
                            value="Search"
                        />
                    </form>
                </div>
                {showTable && (
                    <div className="main__content">
                        <table>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Rating</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {helpers.map((helper, index) => (
                                    <tr key={index}>
                                        <td>{helper.username}</td>
                                        <td>{renderStars(helper.rating)}</td>
                                        <td>{helper.price}$</td>
                                        <td>
                                            <button
                                                className="ask-button"
                                                onClick={() =>
                                                    handleAskForHelp(helper)
                                                }
                                            >
                                                Ask for Help
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            {showDialog && (
                <div className="dialog-overlay" onClick={handleCloseDialog}>
                    <div className="dialog">
                        <h2>Ask for Help</h2>
                        <p>Selected Helper: {selectedHelper?.username}</p>
                        <p>Want to send a invitation to that helper?</p>
                        <button
                            className="dialog-button"
                            onClick={handleCloseDialog}
                        >
                            Accept
                        </button>
                        <button
                            className="dialog-button"
                            onClick={handleCloseDialog}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentPage;
