import { styled } from "styled-components";
import styles from "./ProfileEditor.module.css";
import { useEffect, useState } from "react";

const BlueBorderButton = styled.button`
    border: 1px solid #43C0F6;
    background-color: white;
    color: #43C0F6;
    width: 170px;
    height: 25px;
    margin: 15px;
    padding-left:10px;
    padding-right:10px;
    font-size:13px;
    font-weight: bolder;
    border-radius: 5px;
    letter-spacing:1px;
    box-shadow: 2px 2px 5px rgb(149, 147, 147);
`;


export default function ProfileEditor({ teacherUsers, studentUsers }) {

    const [isStudent, setIsStudent] = useState(false);

    useEffect(() => {
        if (teacherUsers.length > 0) {
            setIsStudent(false);
        } else if (studentUsers.length > 0) {
            setIsStudent(true);
        }
    }, [teacherUsers, studentUsers]);

    return (
        <div>
            <div className={styles.profileEditorBox}>
                {isStudent ? (
                    <div>
                        {studentUsers.map((studentUser) => (
                            <div key={studentUser.id}>
                                <img className={styles.studentImg} src={studentUsers.profile_pic} alt="student image" />
                                <div className={styles.btnContainer}>
                                    <BlueBorderButton>EDIT PROFILE  </BlueBorderButton>
                                    <BlueBorderButton> CHANGE PHOTO </BlueBorderButton>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        {teacherUsers.map((teacherUser) => (
                            <div key={teacherUser.id}>
                                <img className={styles.teacherImg} src={teacherUsers.profile_pic} alt="teacher image" />
                                <div className={styles.btnContainer}>
                                    <BlueBorderButton name="EDIT PROFILE" />
                                    <BlueBorderButton name="CHANGE PHOTO" />
                                    <BlueBorderButton name="SETTINGS" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
