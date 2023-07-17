import StudentProfile from "../components/StudentProfile";
import TeacherProfile from "../components/TeacherProfile";
import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #EEEEEE;
`;

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const BttBtn = styled.div`
    display: flex;
    width: 87%;
    justify-content: flex-end;
    margin-bottom: 150px;
`;

const BackToTop = styled.div`
    background-color: var(--pink);
    width: 200px;
    height: 25px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 2px 4px 2px rgb(179, 173, 173);
    color: white;
    font-weight: 800;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
    padding: 0.4rem;
    padding-top: 0.7rem;
`;


export default function ProfileViewer() {
    const { id } = useParams();
    const [teachers, setTeachers] = useState([]);
    const [students, setStudents] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:4000/teacher/${id}`)
            .then(res => {
                const teachersData = res.data;
                console.log(teachersData);
                setTeachers(teachersData);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id]);


    useEffect(() => {
        axios.get(`http://localhost:4000/student/${id}`)
            .then(res => {
                const studentsData = res.data;
                console.log(studentsData);
                setStudents(studentsData);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id]);


    if (!students && !teachers) {
        return <div>Loading...</div>;
    }

    const profileData = students.length > 0 ? students[0] : teachers[0];
    // const isStudent = students.length > 0;

    console.log(profileData);

    return (
        <ProfileContainer>
            <Navbar />
            <ProfileWrapper>
                {profileData && profileData.type === 'student' ?
                    (
                        <StudentProfile studentData={studentsData} />
                    ) : profileData && profileData.type === 'teacher' ? (
                        <TeacherProfile teacherData={teachersData} />
                    ) : (
                        <div>No profile data available</div>
                    )}

            </ProfileWrapper>
            <BttBtn>
                <BackToTop styled onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}>
                    BACK TO TOP </BackToTop>
            </BttBtn>
            <Footer />
        </ProfileContainer>
    )
}
