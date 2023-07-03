import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { checkboxOptions, datas } from "../data/data";

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
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({});
    const [selectLevel, setSelectLevel] = useState('Beginner');
    const [selectShow, setSelectShow] = useState(10);


    const handleCheckboxChange = (e, title) => {
        const { value, checked } = e.target;

        setSelectedCheckboxes((prevCheckboxes) => {
            if (checked) {
                // Add the selected checkbox to the list
                return [...prevCheckboxes, { title, value }];
            } else {
                // Remove the deselected checkbox from the list
                return prevCheckboxes.filter(
                    (checkbox) => !(checkbox.title === title && checkbox.value === value)
                );
            }
        });
    };

    useEffect(() => {
        // Update the selected filters whenever the selected checkboxes change
        const filters = {};

        selectedCheckboxes.forEach((checkbox) => {
            const { title, value } = checkbox;

            if (filters[title]) {
                // Add the value to an existing filter title
                filters[title].push(value);
            } else {
                // Create a new filter title and initialize it with the value
                filters[title] = [value];
            }
        });

        setSelectedFilters(filters);
    }, [selectedCheckboxes]);

    // (checkbox) => checkbox.title !== title || checkbox.value !== value

    const filteredDatas = datas.filter((data) =>
        Object.entries(selectedFilters).every(([title, values]) => {
            switch (title) {
                case 'Subscription':
                    return values.includes('All') || values.includes(data.subscription);
                case 'Activity Type':
                    return values.includes('All') || values.includes(data.activity_type);
                case 'Year Level':
                    return values.includes('All') || values.includes(data.year_level);
                case 'Subject Matther':
                    return values.includes('All') || values.includes(data.subject_matter);
                default:
                    return true;
            }
        })
    ).filter((data) => data.year_level === selectLevel);

    // const projectsCount = filteredDatas.slice(0, selectShow);
    const projectsCount = selectShow === 'All' ? filteredDatas : filteredDatas.slice(0, parseInt(selectShow));


    return (
        <ProjectContainer>
            <SidebarWrapper>
                {checkboxOptions.map((option) => (
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

