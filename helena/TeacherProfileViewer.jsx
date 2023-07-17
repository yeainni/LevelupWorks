import styles from "./TeacherProfileViewer.module.css";
import ProfileEditor from "./ProfileEditor";
import ProfileDetails from "./ProfileDetails";
import { useEffect, useState } from "react";

export default function TeacherProfileViewer() {
    // const [studentUsers, setStudentUsers] = useState([]);
    const [teacherUsers, setTeacherUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/teacher/:id")
            .then((res) => res.json())
            .then((res) => setTeacherUsers(res));
    }, []);

    // useEffect(() => {
    //   fetch("http://localhost:4000/students/:id")
    //     .then((res) => res.json())
    //     .then((res) => setStudentUsers(res));
    // }, []);

    return (
        <div className={styles.background}>


            {/** Contents*/}
            <div className={styles.profiles}>
                {/** Contents Left*/}
                <ProfileEditor teacherUsers={teacherUsers}
                //  studentUser={condition ? StudentUser : undefined} 
                />

                {/** Contents Right */}
                <ProfileDetails teacherUsers={teacherUsers} />
            </div>


        </div>
    );
}
