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

const TPimg = styled.div`
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

const TPbtn = styled.button`
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

const TPinfo = styled.div`
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

const TPname = styled.div`
    color: #707070;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 60px;
`;

const TPtable = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

const TProw = styled.tr`
    
`;

const TPhead = styled.td`
    color: #A5A5A5;
    font-size: 30px;
    font-family: "Open Sans", sans-serif;
    text-align: left;
    padding-left: 70px;
`;

const TPdata = styled.th`
    color: #707070;
    font-size: 30px;
    font-family: "Nunito", sans-serif;
    text-align: left;
    padding: 10px;
`;


export default function TeacherProfile() {
    const { id } = useParams();
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        // Fetch teacher from the server
        axios.get(`http://localhost:4000/teacher/${id}`)
            .then(res => {
                const teacherData = res.data;
                console.log(teacherData);
                setTeachers(teacherData);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id]);


    if (!teachers) {
        return <div>Loading...</div>;
    }

    const formattedDoB = teachers.length > 0 ? new Date(teachers[0].date_of_birth).toLocaleDateString('en-NZ', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }) : '';

    return (
        <div>
            {teachers.map((teacher) =>
                <ProfileContainer key={teacher.teacher_id}>
                    <TPimg>
                        <img src={teacher.profile_pic} alt={teacher.name} width={'175px'} />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            paddingBottom: '40px'
                        }}>
                            <TPbtn>EDIT PROFILE</TPbtn>
                            <TPbtn>CHANGE PHOTO</TPbtn>
                            <TPbtn>SETTINGS</TPbtn>

                        </div>
                    </TPimg>

                    <TPinfo>
                        <TPname>{teacher.name}</TPname>
                        <TPtable>
                            <TProw>
                                <TPhead>School</TPhead>
                                <TPdata>{teacher.school}</TPdata>
                            </TProw>
                            <TProw>
                                <TPhead>Date of Birth</TPhead>
                                <TPdata>{formattedDoB}</TPdata>
                            </TProw>
                            <TProw>
                                <TPhead>Contact No</TPhead>
                                <TPdata>{teacher.contact_number}</TPdata>
                            </TProw>
                            <TProw>
                                <TPhead>Email Address</TPhead>
                                <TPdata>{teacher.email}</TPdata>
                            </TProw>
                        </TPtable>
                    </TPinfo>
                </ProfileContainer>
            )}
        </div>
    )
}
