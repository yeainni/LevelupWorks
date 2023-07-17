import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { checkboxOptions } from "../data/data";
import axios from 'axios';

const ProjectContainer = styled.div`
    display  : flex;
    justify-content:space-between;
    gap: 10%;
`;

const SidebarWrapper = styled.div`
    margin-top: 15rem;
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


export default function ProjectFinal() {
    const [projectData, setProjectData] = useState([]);
    const [selectedCheckbox, setSelectedCheckbox] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState({});
    const [selectCourse, setSelectCourse] = useState('');
    const [selectShow, setSelectShow] = useState('All');


    useEffect(() => {
        // Fetch data from the server
        axios.get('http://localhost:4000/projectlibrary')
            .then(res => {
                const data = res.data;
                console.log(data);
                setProjectData(data);
                setSelectedCheckbox(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);


    useEffect(() => {
        const filters = {};

        selectedCheckbox.forEach((checkbox) => {
            const { title, value } = checkbox;
            if (value !== undefined) { // Exclude checkboxes with undefined values
                if (filters[title]) {
                    filters[title].push(value);
                } else {
                    filters[title] = [value];
                }
            }
        });

        setSelectedFilter(filters);
    }, [selectedCheckbox]);


    const filteredDatas = projectData.filter((data) =>
        Object.entries(selectedFilter).every(([title, values]) => {
            switch (title) {
                case 'Subscription':
                    return values.includes('All') || values.some((value) =>
                        data.subscription.toLowerCase() === value.toLowerCase()
                    );
                case 'Activity Type':
                    return values.includes('All') || values.some((activity) =>
                        data.activity_type.toLowerCase().split(',').map((a) => a.trim()).includes(activity.toLowerCase())
                    );
                case 'Year Level':
                    return values.includes('All') || values.some((value) =>
                        value.split(',').map((y) => y.trim()).includes(data.year_level.toString())
                    );
                case 'Subject Matter':
                    return values.includes('All') || values.some((subject) =>
                        data.subject_matter.toLowerCase().split(',').map((s) => s.trim()).includes(subject.toLowerCase())
                    );
                default:
                    return true;
            }
        })
    ).filter((data) => {
        if (selectCourse === '') {
            return true;
        } else {
            return data.course.toLowerCase() === selectCourse.toLowerCase();
        }
    });


    const handleCheckbox = (e, title) => {
        const { value, checked } = e.target;

        setSelectedCheckbox((prevCheckboxes) => {
            if (checked) {
                return [...prevCheckboxes, { title, value }];
            } else {
                return prevCheckboxes.filter(
                    (checkbox) => !(checkbox.title === title && checkbox.value === value)
                );
            }
        });
    };


    const projectsCount = selectShow === 'All' ? filteredDatas : filteredDatas.slice(0, parseInt(selectShow));


    return (
        <ProjectContainer>
            <SidebarWrapper>
                {checkboxOptions.map((option) => (
                    <SidebarContent key={option.title}>
                        <Title>{option.title.toUpperCase()}</Title>
                        <Hr />
                        {option.options.map((checkbox) => (
                            <CheckWrapper key={checkbox.value}>
                                <Checkbox
                                    type="checkbox"
                                    value={checkbox.value}
                                    id={checkbox.value}
                                    checked={selectedCheckbox.some(
                                        (item) =>
                                            item.title === option.title &&
                                            item.value === checkbox.value
                                    )}
                                    onChange={(e) => handleCheckbox(e, option.title)}
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
                <HeadingInfo>Welcome to the projectData library. You can use the filters on the right to help you search for specific projectData.</HeadingInfo>
                <BtnList>
                    <BtnWrap>
                        <BtnShow
                            active={selectCourse === 'Beginner'}
                            onClick={() => setSelectCourse(selectCourse === 'Beginner' ? '' : 'Beginner')}

                        >
                            BEGINNER
                        </BtnShow>
                        <BtnShow
                            active={selectCourse === 'Intermediate'}
                            onClick={() => setSelectCourse(selectCourse === 'Intermediate' ? '' : 'Intermediate')}

                        >
                            INTERMEDIATE
                        </BtnShow>
                        <BtnShow
                            active={selectCourse === 'Advanced'}
                            onClick={() => setSelectCourse(selectCourse === 'Advanced' ? '' : 'Advanced')}

                        >
                            ADVANCED
                        </BtnShow>
                    </BtnWrap>

                    <BtnWrap>
                        <BtnShow
                            active={selectShow === '5'}
                            onClick={() => {
                                setSelectShow('5');
                            }}
                        >
                            5
                        </BtnShow>
                        <BtnShow
                            active={selectShow === '10'}
                            onClick={() => {
                                setSelectShow('10');
                            }}
                        >
                            10
                        </BtnShow>
                        <BtnShow
                            active={selectShow === 'All'}
                            onClick={() => {
                                setSelectShow('All');
                            }}
                        >
                            All
                        </BtnShow>
                    </BtnWrap>
                </BtnList>
                <ProjectCard filteredDatas={projectsCount} />
            </div>
        </ProjectContainer >

    );
}