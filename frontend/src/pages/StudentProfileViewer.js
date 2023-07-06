import StudentProfile from "../components/StudentProfile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #EEEEEE;
`;

const SPwrapper = styled.div`
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


export default function StudentProfileViewer() {
    return (
        <ProfileWrapper>
            <Navbar />
            <SPwrapper>
                <StudentProfile />
            </SPwrapper>
            <BttBtn>
                <BackToTop styled onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}>
                    BACK TO TOP </BackToTop>
            </BttBtn>
            <Footer />
        </ProfileWrapper>
    )
}
