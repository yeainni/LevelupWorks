User
import styles from "../HelpRequest/HelpRequests.module.css";
import { useState, useEffect } from "react";

const reqStudents = [
    {
        firstName: "Aiden",
        lastName: "Andrews",
        gender: "b",
        profile_pic: "/images/students/AidenAndrews.png",
        date_created: "DateTime",
    },
    {
        firstName: "Rawiri",
        lastName: "Fletcher",
        gender: "b",
        profile_pic: "/images/students/RawiriFletcher.png",
        date_created: "DateTime",
    },
    {
        firstName: "Neveah",
        lastName: "Machenry",
        gender: "g",
        profile_pic: "/images/students/NeveahMachenry.png",
        date_created: "DateTime",
    },
    {
        firstName: "Javier",
        lastName: "Fuego",
        gender: "b",
        profile_pic: "/images/students/JavierFuego.png",
        date_created: "DateTime",
    },
    {
        firstName: "Tokio",
        lastName: "Han",
        gender: "b",
        profile_pic: "/images/students/TokioHan.png",
        date_created: "DateTime",
    },
];

export default function RequestItems() {
    const [isChecked, setIsChecked] = useState([]);

    const handleCheckBox = (e) => {
        let { id, checked } = e.target;
        if (checked) {
            setIsChecked([...isChecked, id])
        } else {
            setIsChecked(isChecked.filter((e) => e !== id))
        }
    };

    // const handleCheckBox = (e) => {
    //     const { id, checked } = e.target;
    //     setIsChecked((prevChecked) => {
    //         if (checked) {
    //             return [...prevChecked, parseInt(id)];
    //         } else {
    //             return prevChecked.filter((e) => e !== parseInt(id));
    //         }
    //     });
    // };

    useEffect(() => console.log(isChecked), [isChecked]);

    const deleteList = () => {
        const updatedStudents = reqStudents.filter((student, index) => !isChecked.includes(index));
        setReqStudents(updatedStudents);
        setIsChecked([]);
    };


    return (
        <div>
            <h3>HELP REQUESTS</h3>
            <button>REPLY</button>
            <button onClick={deleteList}>MARK AS DONE</button>

            {reqStudents.map((student, index) => (
                <div className={styles.lists} key={index}>
                    <input
                        type="checkbox"
                        checked={isChecked.includes(index)}
                        onChange={handleCheckBox}
                        id={index} />
                    <img src={student.profile_pic} className={styles.profilePic} alt="img of student" />
                    <div className={styles.helpMsg}>
                        {`${student.firstName} needs help with ${student.gender === "b" ? `his` : `her`}
            project`}
                    </div>
                    <div className={styles.requestTime}>{student.date_created}</div>
                </div>
            ))}
        </div>
    );
}