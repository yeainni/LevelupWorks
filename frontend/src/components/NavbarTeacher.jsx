import './Home.css';
import styled from "styled-components";
import Logo from '../assets/navLogin/LevelUpWorks-blue.png';
import NZFlag from '../assets/navLogin/NZFlag.png';
import MaoriFlag from '../assets/navLogin/MaoriFlag.png';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default function NavbarTeacher() {
    return (
        <nav style={{ backgroundColor: "white" }}>
            <img src={Logo} alt='Logo' width={"155px"} padding-bottom={"5px"} />

            <ul>
                <StyledLink to="/">Take Screenshot</StyledLink>
                <StyledLink to="/">Help Centre</StyledLink>
                <StyledLink to="/">More Projects</StyledLink>
            </ul>

            <div className='navTeacher'>
                <img src={NZFlag} alt='NZ Flag' width={"24px"} height={"12px"} />
                <img src={MaoriFlag} alt='Maori Flag' width={"21.6px"} height={"12px"} />
            </div>
        </nav>
    )
}
