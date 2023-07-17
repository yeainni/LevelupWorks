import './Home.css';
import styled from "styled-components";
import Logo from '../assets/navLogin/LevelUpWorks-white.png';
import UserAvatar from '../assets/navLogin/Avatar-white.png';
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


export default function Navbar() {
    return (
        <nav>
            <Link to="/">
                <img src={Logo} alt='Logo' width={"174px"} height={"55px"} padding-bottom={"5px"} />
            </Link>

            <ul>
                <StyledLink to="/">HOME</StyledLink>
                <StyledLink to="/projectlibrary">FEATURES</StyledLink>
                <StyledLink to="/teacher/:id">TEACHERS</StyledLink>
            </ul>

            <div className='navLast'>
                <div className='Lang'>
                    <div className='lang'> LANG </div>
                    <img src={NZFlag} alt='NZ Flag' width={"24px"} height={"12px"} />
                    <img src={MaoriFlag} alt='Maori Flag' width={"21.6px"} height={"12px"} />
                </div>

                <div className='NavRege'>
                    <img src={UserAvatar} alt='User Avatar' width={"22px"} height={"22px"} />
                    <div className='rege'> REGISTER | LOGIN </div>
                </div>
            </div>
        </nav>
    )
}