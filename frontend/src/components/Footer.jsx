// export default function Footer() {
//     return (
//         <footer>
//             <ul>
//                 <h3>COMPANY</h3>
//                 <p> About Us</p>
//                 <p> Careers</p>
//                 <p> Partners</p>
//             </ul>

//             <ul>
//                 <h3>COURSES</h3>
//                 <p> Register</p>
//                 <p> Login</p>
//                 <p> Projects</p>
//                 <p> Teachers</p>
//                 <p> Partners</p>
//                 <p> Resources</p>
//             </ul>

//             <ul>
//                 <h3>SUPPORT</h3>
//                 <p> FAQs</p>
//                 <p> Helpdesk</p>
//                 <p> Contact Us</p>
//             </ul>

//             <ul>
//                 <h3>LEGAL</h3>
//                 <p> Terms & Conditions</p>
//                 <p> Privacy Policy</p>
//             </ul>

//             <ul>
//                 <h3 style={{marginBottom: "10px"}}>LevelUp Works</h3>
//                 <p> LevelUp Works is an Auckland-based
//                     dedicated to developing game-
//                     based learning software to help teachers in
//                     response to the New Zealand Digital
//                     Technologies & Hangarau Matihiko.
//                     ala@levelupworks.com
//                     (021) 668 185
//                 </p>
//             </ul>

//         </footer>
//     );
// }


import styled from "styled-components";

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #b2e4fa;
    color: #606060;
    padding: 100px 12%;
`;

const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const FooterTitle = styled.h3`
    margin-bottom: 10px;
`;

const FooterListItem = styled.li`
    display: flex;
    flex-wrap: wrap;
    margin: 4px 0;
    cursor: pointer;
`;

const LevelUpWorksSection = styled(FooterSection)`
    flex-basis: 40%;
    max-width: 470px;
`;


export default function Footer() {
    const sections = [
        { title: 'COMPANY', items: ['About Us', 'Careers', 'Partners'] },
        { title: 'COURSES', items: ['Register', ' Login', ' Projects', 'Teachers', 'Partners', ' Resources'] },
        { title: 'SUPPORT', items: ['FAQs', 'Helpdesk', 'Contact Us'] },
        { title: 'LEGAL', items: ['Terms & Conditions', 'Privacy Policy'] },
        { title: 'LevelUp Works', items: ['LevelUp Works is an Auckland-based dedicated to developing game-based learning software to help teachers in response to the New Zealand Digital Technologies & Hangarau Matihiko.', ' alan@levelupworks.com', '(021) 668 185'] },
    ];

    return (
        <FooterContainer>
            {sections.map((section, index) => {
                if (section.title === 'LevelUp Works') {
                    return (
                        <LevelUpWorksSection key={index}>
                            <FooterTitle>{section.title}</FooterTitle>
                            <ul>
                                {section.items.map((item, index) => (
                                    <FooterListItem key={index}>{item}</FooterListItem>
                                ))}
                            </ul>
                        </LevelUpWorksSection>
                    );
                }
                return (
                    <FooterSection key={index} style={{ flex: `0 0 auto` }}>
                        <FooterTitle>{section.title}</FooterTitle>
                        <ul>
                            {section.items.map((item, index) => (
                                <FooterListItem key={index}>{item}</FooterListItem>
                            ))}
                        </ul>
                    </FooterSection>
                );
            })}
        </FooterContainer>
    );
}