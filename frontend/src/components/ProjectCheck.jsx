import React, { useState } from 'react'
import styled from "styled-components";
import { datas } from "../data/data";

const Title = styled.div`
    font-size: 16px;
    margin: 7px;
    margin-top: 50px;
    text-align: left;
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
    padding-left: 2px;
`;

const Hr = styled.hr`
    margin: 7px;
    border: 0.5px solid;
    width: 170px;
    color: #606060;
`;

const Label = styled.label`
    text-align: left;
    font-weight: 600;
    font-size: 15px;
    color: #606060;
    padding: 2px;
`;

const Checkbox = styled.input`
    width: 20px;
    color: var(--blue);
`


export default function ProjectCheck() {
    const [selectedCheckboxe, setSelectedCheckboxe] = useState([]);

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedCheckboxe([...selectedCheckboxe, value]);
        } else {
            setSelectedCheckboxe(
                selectedCheckboxe.filter((checkbox) => checkbox !== value)
            );
        }
    };


    const filteredDatas = datas.filter((data) =>
        selectedCheckboxe.every((checkbox) => data.tags.includes(checkbox))
    );


    return (
        <div>
            {/* sidebar */}
            <div>
                <Title> SUBCRIPTION </Title>
                <Hr />
                <Label htmlFor="Free">
                    <Checkbox
                        type="checkbox"
                        checked={selectedCheckboxe.includes("Free")}
                        onChange={handleCheckboxChange}
                        value="Free"
                        id="Free"
                    />
                    Free
                </Label>

                <Label htmlFor="Premium">
                    <Checkbox
                        type="checkbox"
                        checked={selectedCheckboxe.includes("Premium")}
                        onChange={handleCheckboxChange}
                        value="Premium"
                        id="Preminum"
                    />
                    Premium
                </Label>


                <Title> ACTIVITY TYPE</Title>
                <Hr />
                <Label htmlFor="Animation">
                    <Checkbox
                        type="checkbox"
                        checked={selectedCheckboxe.includes("Animation")}
                        onChange={handleCheckboxChange}
                        value="Animation"
                        id="Animation"
                    />
                    Animation
                </Label>

                <Label htmlFor="Game">
                    <Checkbox
                        type="checkbox"
                        checked={selectedCheckboxe.includes("Game")}
                        onChange={handleCheckboxChange}
                        value="Game"
                        id="Game"
                    />
                    Game
                </Label>

                <Label htmlFor="Chatbot">
                    <Checkbox
                        type="checkbox"
                        checked={selectedCheckboxe.includes("Chatbot")}
                        onChange={handleCheckboxChange}
                        value="Chatbot"
                        id="Chatbot"
                    />
                    Chatbot
                </Label>

                <Label htmlFor="Augmented Reality">
                    <Checkbox
                        type="checkbox"
                        checked={selectedCheckboxe.includes("Augmented Reality")}
                        onChange={handleCheckboxChange}
                        value="Augmented Reality"
                        id="Augmented Reality"
                    />
                    Augmented Reality
                </Label>


                <Title> YEAR LEVEL</Title>
                <Hr />
                <Label htmlFor="Beginner">
                    <Checkbox
                        type="checkbox"
                        checked={selectedCheckboxe.includes("Beginner")}
                        onChange={handleCheckboxChange}
                        value="Beginner"
                        id="Beginner"
                    />
                    1 - 4
                </Label>

                <Label htmlFor="Intermediate">
                    <Checkbox
                        type="checkbox"
                        checked={selectedCheckboxe.includes("Intermediate")}
                        onChange={handleCheckboxChange}
                        value="Intermediate"
                        id="Intermediate"
                    />
                    5 - 6
                </Label>

                <Label htmlFor="Advance">
                    <Checkbox
                        type="checkbox"
                        checked={selectedCheckboxe.includes("Advance")}
                        onChange={handleCheckboxChange}
                        value="Advance"
                        id="Advance"
                    />
                    7 - 8
                </Label>

                <Label htmlFor="Expert">
                    <Checkbox
                        type="checkbox"
                        checked={selectedCheckboxe.includes("Expert")}
                        onChange={handleCheckboxChange}
                        value="Expert"
                        id="Expert"
                    />
                    9 - 13
                </Label>


                <Title> SUBJECT MATTER</Title>
                <Hr />
                <Label htmlFor="Computer Science">
                    <Checkbox
                        type="checkbox"
                        checked={selectedCheckboxe.includes("Computer Science")}
                        onChange={handleCheckboxChange}
                        value="Computer Science"
                        id="Computer Science"
                    />
                    Computer Science
                </Label>

                <Label htmlFor="Maths">
                    <Checkbox
                        type="checkbox"
                        checked={selectedCheckboxe.includes("Maths")}
                        onChange={handleCheckboxChange}
                        value="Maths"
                        id="Maths"
                    />
                    Maths
                </Label>

                <Label htmlFor="Science Language">
                    <Checkbox
                        type="checkbox"
                        checked={selectedCheckboxe.includes("Science Language")}
                        onChange={handleCheckboxChange}
                        value="Science Language"
                        id="Science Language"
                    />
                    Science Language
                </Label>

                <Label htmlFor="Art">
                    <Checkbox
                        type="checkbox"
                        checked={selectedCheckboxe.includes("Art")}
                        onChange={handleCheckboxChange}
                        value="Art"
                        id="Art"
                    />
                    Art
                </Label>

                <Label htmlFor="Music">
                    <Checkbox
                        type="checkbox"
                        checked={selectedCheckboxe.includes("Music")}
                        onChange={handleCheckboxChange}
                        value="Music"
                        id="Music"
                    />
                    Music
                </Label>
            </div>


            {/* mapdata */}
            <div>
                <ul>
                    {filteredDatas.map((data) => (
                        <li key={data.id}>
                            <img src={data.project_pic} alt={data.name} />
                            <h3>{data.name} </h3>
                            <p>{data.year_level} | {data.subject_matter}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}