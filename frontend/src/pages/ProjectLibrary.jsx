// import ProjectCheck from '../Components/ProjectCheck';
import ProjectComponent from '../components/ProjectComponent';
import styled from "styled-components";
import NavBar from "../components/Navbar";
import Footer from '../components/Footer';

const Container = styled.div`
    padding: 0 11%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const BttBtn = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-bottom: 150px;
`;

const BackToTop = styled.div`
    background-color: var(--yellow);
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

export default function ProjectLibrary() {

    return (
        <div>
            <NavBar />
            <Container>
                <ProjectComponent />
                <BttBtn>
                    <BackToTop styled onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}>
                        BACK TO TOP </BackToTop>
                </BttBtn>
            </Container>
            <Footer />
        </div>
    );
}
