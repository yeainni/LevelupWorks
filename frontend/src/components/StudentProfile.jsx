import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 70px;
`;

const SPimg = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 575px;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    border: 2px solid #E2DFDF;
`;

const SPbtn = styled.button`
    font-family: "Nunito", sans-serif;
    width: 175px;
    height: 35px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 800;
    background-color: white;
    border: 4px solid #43c0f6;
    color: #43c0f6;
    margin: 20px 0;
    cursor: pointer;
`;

const SPinfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 820px;
    height: 650px;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    border: 2px solid #E2DFDF;  
    padding-bottom: 3rem;
`;

const SPname = styled.div`
    color: #707070;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 60px;
`;

const SPtable = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

const SProw = styled.tr`
    
`;

const SPhead = styled.td`
    color: #A5A5A5;
    font-size: 30px;
    font-family: "Open Sans", sans-serif;
    text-align: left;
    padding-left: 70px;
`;

const SPdata = styled.th`
    color: #707070;
    font-size: 30px;
    font-family: "Nunito", sans-serif;
    text-align: left;
    padding: 10px;
`;


export default function StudentProfile() {
    const { id } = useParams();
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Fetch student from the server
        axios.get(`http://localhost:4000/student/${id}`)
            .then(res => {
                const studentData = res.data;
                console.log(studentData);
                setStudents(studentData);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id]);


    if (!students) {
        return <div>Loading...</div>;
    }

    // day/month/year
    // const formatDoB = students.length > 0 ? new Date(students[0].date_of_birth).toLocaleDateString() : "";

    const formatDoB = students.length > 0 ? new Date(students[0].date_of_birth).toLocaleDateString('en-NZ', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }) : '';


    return (
        <div>
            {students.map((student) =>
                <ProfileContainer key={student.student_id}>
                    <SPimg>
                        <img src={student.profile_pic} alt={student.name} width={'175px'} />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            paddingBottom: '40px'
                        }}>
                            <SPbtn>EDIT PROFILE</SPbtn>
                            <SPbtn>CHANGE PHOTO</SPbtn>
                        </div>
                    </SPimg>

                    <SPinfo>
                        <SPname>{student.name}</SPname>
                        <SPtable>
                            <SProw>
                                <SPhead>School</SPhead>
                                <SPdata>{student.school}</SPdata>
                            </SProw>
                            <SProw>
                                <SPhead>Teacher</SPhead>
                                <SPdata>{student.teacher_name}</SPdata>
                            </SProw>
                            <SProw>
                                <SPhead>Course</SPhead>
                                <SPdata>{student.course}</SPdata>
                            </SProw>
                            <SProw>
                                <SPhead>Date of Birth</SPhead>
                                <SPdata>{formatDoB}</SPdata>
                            </SProw>
                            <SProw>
                                <SPhead>Contact No</SPhead>
                                <SPdata>{student.contact_number}</SPdata>
                            </SProw>
                            <SProw>
                                <SPhead>Email Address</SPhead>
                                <SPdata>{student.email}</SPdata>
                            </SProw>
                        </SPtable>
                    </SPinfo>
                </ProfileContainer>
            )}
        </div>
    )
}
