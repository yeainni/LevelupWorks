import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const ProjectContainer = styled.div`
    display  : flex;
    justify-content:space-between;
    gap: 10%;
`;

const SidebarWrapper = styled.div`
    margin-top: 200px;
`;

const SidebarContent = styled.div`
    display  : flex;
    flex-direction: column;
`;

const Heading = styled.div`
    font-size: 42px;
    margin: 7px;
    text-align: left;
    font-weight: 900;
    font-family: 'Nunito', sans-serif;
    padding-left: 3px;
    margin-top: 70px;
`;

const HeadingInfo = styled.div`
    font-size: 22px;
    text-align: left;
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
    padding-left: 3px;
    margin: 15px 7px;
`;

const Title = styled.div`
    font-size: 16px;
    margin: 7px;
    margin-top: 50px;
    text-align: left;
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
    padding-left: 3px;
`;

const Hr = styled.hr`
    margin: 7px;
    border: 0.5px solid;
    width: 170px;
    color: #606060;
`;

const CheckWrapper = styled.div`
    display  : flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px;
    gap: 7px;
`;

const Checkbox = styled.input`
    /* background-color: ${({ checked }) => (checked ? '#419CFC' : 'transparent')};
    box-shadow: inset 0 3px 2px #D1CBCB; */
`;

const Label = styled.label`
    text-align: left;
    font-weight: 600;
    font-size: 14px;
    color: #606060;
`;

const BtnList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const BtnWrap = styled.div`
    display: flex;
    margin: 6px;
    margin-top: 60px;
`;

const BtnShow = styled.button`
    background-color: ${({ active }) => (active ? '#419CFC' : '#F7F0F0')};
    color: ${({ active }) => (active ? 'white' : 'black')};
    font-weight: 800;
    padding: 4px 18px;
    border: 2px solid #D1CBCB;
    min-width: 50px;
    cursor: pointer;
    
    &:first-child {
        margin-right: -1px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    &:last-child {
        margin-left: -1px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`;


export default function ProjectComponent() {
    const datas = [
        {
            id: 1,
            name: 'Introduction',
            project_pic: '../..//projects/project01.png',
            activity_type: 'Augented Reality',
            year_level: 'Beginner',
            course: '',
            subscription: 'Free',
            subject_matter: 'Computer Science',
        },
        {
            id: 2,
            name: 'My Birthday',
            project_pic: '../..//projects/project02.png',
            activity_type: 'Animation',
            year_level: 'Beginner',
            course: '',
            subscription: 'Free',
            subject_matter: 'Maths',
        },
        {
            id: 3,
            name: '10 Block Challenge',
            project_pic: '../..//projects/project03.png',
            activity_type: 'Animation',
            year_level: 'Beginner',
            course: '',
            subscription: 'Free',
            subject_matter: 'Science Language',
        },
        {
            id: 4,
            name: 'Build a band',
            project_pic: '../..//projects/project04.png',
            activity_type: 'Animation',
            year_level: 'Beginner',
            course: '',
            subscription: 'Premium',
            subject_matter: 'Computer Science',
        },
        {
            id: 5,
            name: 'The bear and the monkey',
            project_pic: '../..//projects/project05.png',
            activity_type: 'Animation',
            year_level: 'Beginner',
            course: '',
            subscription: 'Free',
            subject_matter: 'Computer Science',
        },
        {
            id: 6,
            name: 'Debugging',
            project_pic: '../..//projects/project06.png',
            activity_type: 'Animation',
            year_level: 'Beginner',
            course: '',
            subscription: 'Premium',
            subject_matter: 'Computer Science',
        },
        {
            id: 7,
            name: 'About Me',
            project_pic: '../..//projects/project07.png',
            activity_type: 'Animation',
            year_level: 'Intermediate',
            course: '',
            subscription: 'Free',
            subject_matter: 'Computer Science',
        },
        {
            id: 8,
            name: 'I am here!',
            project_pic: '../..//projects/project08.png',
            activity_type: 'Animation',
            year_level: 'Beginner',
            course: '',
            subscription: 'Premium',
            subject_matter: 'Computer Science',
        },
        {
            id: 9,
            name: 'Funny faces',
            project_pic: '../..//projects/project09.png',
            activity_type: 'Animation',
            year_level: 'Advanced',
            course: '',
            subscription: 'Free',
            subject_matter: 'Computer Science',
        },
        {
            id: 10,
            name: 'It tickles!',
            project_pic: '../..//projects/project10.png',
            activity_type: 'Animation',
            year_level: 'Intermediate',
            course: '',
            subscription: 'Free',
            subject_matter: 'Computer Science',
        },
        {
            id: 11,
            name: 'Penguin in a Dessert',
            project_pic: '../..//projects/project11.png',
            activity_type: 'Animation',
            year_level: 'Beginner',
            course: '',
            subscription: 'Free',
            subject_matter: 'Computer Science',
        },
        {
            id: 12,
            name: 'Time Travel',
            project_pic: '../..//projects/project12.png',
            activity_type: 'Animation',
            year_level: 'Beginner',
            course: '',
            subscription: 'Free',
            subject_matter: 'Computer Science',
        },
        {
            id: 13,
            name: 'It tickles!',
            project_pic: '../..//projects/project13.png',
            activity_type: 'Animation',
            year_level: 'Beginner',
            course: '',
            subscription: 'Premium',
            subject_matter: 'Computer Science',
        },
        {
            id: 14,
            name: 'The Lion and the Mouse Part 1',
            project_pic: '../..//projects/project14.png',
            activity_type: 'Animation',
            year_level: 'Beginner',
            course: '',
            subscription: 'Free',
            subject_matter: 'Computer Science',
        },
        {
            id: 15,
            name: 'The Lion and the Mouse Part 2',
            project_pic: '../..//projects/project15.png',
            activity_type: 'Animation',
            year_level: 'Advanced',
            course: '',
            subscription: 'Free',
            subject_matter: 'Computer Science',
        },
    ];


    const checkboxOptions = [
        {
            title: 'Subscription',
            options: [
                { label: 'Free', value: 'Free' },
                { label: 'Premium', value: 'Premium' }
            ],
        },
        {
            title: 'Activity Type',
            options: [
                { label: "Animation", value: "Animation" },
                { label: "Game", value: "Game" },
                { label: "Chatbot", value: "Chatbot" },
                { label: "Augented Reality", value: "Augented Reality" }
            ],
        },
        {
            title: 'Year Level',
            options: [
                { label: '1 - 4', value: "Beginner" },
                { label: '5 - 6', value: "Intermediate" },
                { label: '7 - 8', value: "Advanced" },
                { label: '9 - 13', value: "Expert" }
            ],
        },
        {
            title: 'Subject Matther',
            options: [
                { label: "Computer Science", value: "Computer Science" },
                { label: "Maths", value: "Maths" },
                { label: "Science Language", value: "Science Language" },
                { label: "Art", value: "Art" },
                { label: "Music", value: "Music" }
            ],
        },
    ];


    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [projectShow, setProjectShow] = useState(10);
    const [selectLevel, setSelectLevel] = useState('Beginner');
    const [selectShow, setSelectShow] = useState('10');


    const handleCheckboxChange = (e, title) => {
        const { value, checked } = e.target;
        setSelectedCheckboxes((prevCheckboxes) => {
            if (checked) {
                return [...prevCheckboxes, { title, value }];
            } else {
                return prevCheckboxes.filter(
                    (checkbox) => checkbox.title !== title || checkbox.value !== value
                );
            }
        });
    };

    const filteredDatas = datas.filter((data) =>
        selectedCheckboxes.every((checkbox) => {
            switch (checkbox.title) {
                case 'Subscription':
                    return data.subscription === checkbox.value;
                case 'Activity Type':
                    return data.activity_type === checkbox.value;
                case 'Year Level':
                    return data.year_level === checkbox.value;
                case 'Subject Matther':
                    return data.subject_matter === checkbox.value;
                default:
                    return true;
            }
        })
    ).filter((data) => data.year_level === selectLevel);

    const projectsCount = filteredDatas.slice(0, projectShow);


    const handleLevelChange = (year_level) => {
        setSelectLevel(year_level);
    };



    return (
        <ProjectContainer>
            <SidebarWrapper>
                {checkboxOptions.map((option) => (
                    // <SidebarContent>
                    //     <Title>YEAR LEVEL</Title>
                    //     <Hr />
                    //     {checkboxOptions
                    //         .find((option) => option.title === 'Year Level')
                    //         .options.map((checkbox) => (
                    //             <CheckWrapper key={checkbox.value}>
                    //                 <Checkbox
                    //                     type="checkbox"
                    //                     checked={checkbox.value === selectLevel}
                    //                     onChange={() => handleLevelChange(checkbox.value)}
                    //                     value={checkbox.value}
                    //                     id={checkbox.value}
                    //                 />
                    //                 <Label htmlFor={checkbox.value}>{checkbox.label}</Label>
                    //             </CheckWrapper>
                    //         ))}
                    // </SidebarContent>
                    <SidebarContent key={option.title}>
                        <Title>{option.title.toUpperCase()}</Title>
                        <Hr />
                        {option.options.map((checkbox) => (
                            <CheckWrapper>
                                <Checkbox
                                    type="checkbox"
                                    checked={selectedCheckboxes.some(
                                        (item) => item.title === option.title && item.value === checkbox.value
                                    )}
                                    onChange={(e) => handleCheckboxChange(e, option.title)}
                                    value={checkbox.value}
                                    id={checkbox.value}
                                />
                                <Label key={checkbox.value} htmlFor={checkbox.value}>
                                    {checkbox.label}
                                </Label>
                            </CheckWrapper>
                        ))}
                    </SidebarContent>
                ))}
            </SidebarWrapper>

            <div>
                <Heading>PROJECTS</Heading>
                <HeadingInfo>Welcome to the project library. You can use the filters on the right to help you search for specific projects.</HeadingInfo>
                <BtnList>
                    <BtnWrap>
                        <BtnShow
                            active={selectLevel === 'Beginner'}
                            onClick={() => setSelectLevel('Beginner')}
                        // className={selectedLevel === "Beginner" ? "active" : ""}

                        >
                            BEGINNER
                        </BtnShow>
                        <BtnShow
                            active={selectLevel === 'Intermediate'}
                            onClick={() => setSelectLevel('Intermediate')}
                        >
                            INTERMEDIATE
                        </BtnShow>
                        <BtnShow
                            active={selectLevel === 'Advanced'}
                            onClick={() => setSelectLevel('Advanced')}
                        >
                            ADVANCED
                        </BtnShow>
                    </BtnWrap>

                    <BtnWrap>
                        <BtnShow
                            active={projectShow === '5'}
                            onClick={() => {
                                setProjectShow(5);
                                setSelectShow('5');
                            }}
                        >
                            5
                        </BtnShow>
                        <BtnShow
                            active={projectShow === '10'}
                            onClick={() => {
                                setProjectShow(10);
                                setSelectShow('10');
                            }}
                        >
                            10
                        </BtnShow>
                        <BtnShow
                            active={projectShow === 'All'}
                            onClick={() => {
                                setProjectShow(filteredDatas.length);
                                setSelectShow('All');
                            }}
                        >
                            All
                        </BtnShow>
                    </BtnWrap>
                </BtnList>
                <ProjectCard filteredDatas={projectsCount} />
            </div>

            {/* <ul>
        {filteredlevel.map((data) => (
        <li key={data.id}>{data.image}</li>
        ))}
      </ul> */}
        </ProjectContainer >

    );
}

