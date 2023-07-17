import { useEffect, useState } from "react";
import styles from "./MainPageST.module.css";
import axios from "axios";

export default function MainPageST({ selectedFilter }) {
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [projectData, setProjectData] = useState([]);
    const [activeButton, setActiveButton] = useState("");
    const [showProjects, setShowProjects] = useState("All");
    const [selectCourse, setSelectCourse] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:4000/projectex")
            .then((res) => {
                const data = res.data;
                setProjectData(data);
                setFilteredProjects(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    useEffect(() => {
        filterProjects(selectedFilter.subscriptionType, selectedFilter.activityType);
    }, [selectedFilter, selectCourse]);

    const filterProjects = (subscriptionType, activityType) => {
        const filtered = projectData.filter((project) => {
            const matchesSubscription =
                subscriptionType.length === 0 || subscriptionType.includes(project.subscription.toLowerCase());
            const matchesActivity =
                activityType.length === 0 || activityType.includes(project.activity_type.toLowerCase());
            const matchesCourse =
                selectCourse === "" || project.course.toLowerCase() === selectCourse.toLowerCase();
            return matchesSubscription && matchesActivity && matchesCourse;
        });
        setFilteredProjects(filtered);
    };


    const handleCourseChange = (course) => {
        setSelectCourse(course.toLowerCase());
    };


    function handleShowProjects(num) {
        setShowProjects(num);
    }


    return (
        <div className={styles.container}>
            <header className={styles.projectLibraryHeader}>
                <h1>PROJECTS</h1>
                <p>
                    Welcome to the project library. You can use the filters on the right
                    to help you search for specific projects.
                </p>
            </header>

            <div className={styles.topButtons}>
                <div className={styles.difficultyLevel}>
                    <button
                        value=""
                        onClick={() => handleCourseChange("")}
                        className={activeButton === "" ? styles.active : ""}
                    >
                        ALL
                    </button>

                    <button
                        value="Beginner"
                        onClick={() => handleCourseChange("beginner")}
                        className={activeButton === "Beginner" ? styles.active : ""}
                    >
                        BEGINNER
                    </button>

                    <button
                        value="Intermediate"
                        onClick={() => handleCourseChange("intermediate")}
                        className={activeButton === "Intermediate" ? styles.active : ""}
                    >
                        INTERMEDIATE
                    </button>

                    <button
                        value="Advanced"
                        onClick={() => handleCourseChange("advanced")}
                        className={activeButton === "Advanced" ? styles.active : ""}
                    >
                        ADVANCED
                    </button>
                </div>

                <div className={styles.pagesToShow}>
                    <p className={styles.pagesNav}>SHOW</p>
                    <button onClick={() => handleShowProjects(5)}>5</button>
                    <button onClick={() => handleShowProjects(10)}>10</button>
                    <button onClick={() => handleShowProjects("All")}>All</button>
                </div>
            </div>

            <div className={styles.allGridItems}>
                {filteredProjects &&
                    filteredProjects
                        .slice(0, showProjects === "All" ? undefined : showProjects)
                        .map((project) => (
                            <div key={project.project_id}>
                                <img
                                    className={styles.eachElementOfPL}
                                    src={project.project_pic}
                                    alt={project.name}
                                />
                                <div className={styles.textBelowImages}>
                                    <h3>{project.name}</h3>
                                    <h4>
                                        {project.course.toUpperCase()} | {project.activity_type}
                                    </h4>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    );
}
