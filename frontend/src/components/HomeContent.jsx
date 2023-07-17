import { useState } from "react";
import './Home.css';
import animation from "../assets/home/animation.png";
import games from "../assets/home/games.png";
import chatbots from "../assets/home/chatbots.png";
import augreality from "../assets/home/augreality.png";
import Group1 from "../assets/home/Group 1.png";
import Group2 from "../assets/home/Group 2.png";
import Group3 from "../assets/home/Group 3.png";
import Group4 from "../assets/home/Group 4.png";
import Star from "../assets/home/Star.png";
import classroom from "../assets/home/classroom.png";
import Signup from "./Signup";
import "./HomeCarousel.css";
import { HomeCarousel } from "./HomeCarousel";


export default function HomeContent() {
    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    };


    // homeMidContents
    const [activePart, setActivePart] = useState(0);

    const handlePartClick = (index) => {
        setActivePart(index);
    };


    return (
        <div className="homeContent">
            {/* homeHead */}
            <div className='homeHead'>
                <div className='homeHeadBold'>
                    <h1> Prepare young minds for a better <span>future</span></h1>
                    <p>Let us help you advance students in Digital</p>
                    <p>Technologies and other learning areas with</p>
                    <p>our project-based learning programme.</p>
                </div>
                <div className='homeHeadBtn'>
                    <button className='blueBtn'>LEARN MORE</button>
                    <div className='btnComment'>
                        <button className='pinkBtn' onClick={toggleModal}>SIGN UP</button>
                        <p>*Basic subscription includes the first 15 projects free of</p>
                        <Signup isOpen={openModal} onClose={toggleModal} />
                    </div>
                </div>
            </div>

            {/* homeTop */}
            <div className="homeTop">
                <div className='homeTopText'>
                    <h1>What we offer</h1>
                    <p>The Creative Problem Solving programme is series of digital creation projects aimed to encourage self-motivation and student agency, designed by New Zealand's leading IT industry experts and schools.</p>
                    <h2>What will students create?</h2>
                    <div className="homeTopBlue">
                        <img src={animation} alt="animation" />
                        <img src={games} alt="games" />
                        <img src={chatbots} alt="chatbots" />
                        <img src={augreality} alt="augreality" />
                    </div>
                </div>

                {/* HomeCarousel */}
                <HomeCarousel />
            </div>

            {/* homeMid */}
            <div className="homeMid">
                <h2>Teaching kids programming and digital skills is MORE than just writing code.</h2>
                <div className="homeMidPic">
                    <img src={Group1} alt="Group1" />
                    <img src={Group2} alt="Group2" />
                    <img src={Group3} alt="Group3" />
                    <img src={Group4} alt="Group4" />
                </div>

                <h1>How our programme helps teachers and schools</h1>
                <div className="homeMidBtn">
                    <button
                        className={`${activePart === 0 ? "grayBtn active" : "blueBtn"
                            }`}
                        onClick={() => handlePartClick(0)}
                    > LEARNING PATHWAYS
                    </button>

                    <button
                        className={`${activePart === 1 ? "grayBtn active" : "blueBtn"
                            }`}
                        onClick={() => handlePartClick(1)}
                    > DIGITAL TECHNOLOGIES
                    </button>

                    <button
                        className={`${activePart === 2 ? "grayBtn active" : "blueBtn"
                            }`}
                        onClick={() => handlePartClick(2)}
                    >KEY COMPETENCIES
                    </button>

                    <button
                        className={`${activePart === 3 ? "grayBtn active" : "blueBtn"
                            }`}
                        onClick={() => handlePartClick(3)}
                    >IR4.0
                    </button>
                </div>
            </div>

            {/* homeMidGray */}
            <div className="homeMidGray">

                {activePart === 0 && (
                    <div>
                        <h1>Interlinking Pathways</h1>
                        <h2>This programme gives us 5 important interlinking Learning Pathways.</h2>
                        <div className="homeMidGrayStar">
                            <img src={Star} alt="Star" />
                            <div className="homeMidGrayList">
                                <h3>COMPUTATIONAL THINKING</h3>
                                <p>Within the programme the students are enabled to express problems and form solutions that will be designed so a computer can be used to create diverse and encapsulating applications. </p>
                            </div>
                        </div>
                        <div className="homeMidGrayStar">
                            <img src={Star} alt="Star" />
                            <div className="homeMidGrayList">
                                <h3> DEVELOPING DIGITAL OUTCOMES </h3>
                                <p> This programme is designed to strengthen the outcomes of each students personally to form strong applications. </p>
                            </div>
                        </div>
                        <div className="homeMidGrayStar">
                            <img src={Star} alt="Star" />
                            <div className="homeMidGrayList">
                                <h3>DESIGNING PROCESSED OUTCOMES </h3>
                                <p>Students will be taught the ways of how outcomes are processed, thought about, and produced. </p>
                            </div>
                        </div>
                        <div className="homeMidGrayStar">
                            <img src={Star} alt="Star" />
                            <div className="homeMidGrayList">
                                <h3>DEVELOP VISUAL AND SOCIAL COMMUNICATIONS </h3>
                                <p>Students will learn to design visually pleasing applications used to both keep the user aware of what is happening on the screen.</p>
                            </div>
                        </div>
                        <div className="homeMidGrayStar">
                            <img src={Star} alt="Star" />
                            <div className="homeMidGrayList">
                                <h3>STRONG TECHNOLOGICAL PRACTICES </h3>
                                <p>The programme will show students the best practices to think and solve the problems brought on by using technology.</p>
                            </div>
                        </div>
                    </div>
                )}

                {activePart === 1 && (
                    <div>
                        <h1>Expands Digital Knowledge Base</h1>
                        <h2>This programme gives you the 5 major capabilities to be confident in Digital Technologies.</h2>
                        <div className="homeMidGrayStar">
                            <img src={Star} alt="Star" />
                            <div className="homeMidGrayList">
                                <h3>PROBLEM SOLVING </h3>
                                <p>The programme challenges are designed to think around multiple issues and challenges the way students interact with computers and other related technology. </p>
                            </div>
                        </div>
                        <div className="homeMidGrayStar">
                            <img src={Star} alt="Star" />
                            <div className="homeMidGrayList">
                                <h3>DECISION-MAKING </h3>
                                <p>The programme uses technology to make the lives of many people happier through the decisions made when creating digital applications. </p>
                            </div>
                        </div>
                        <div className="homeMidGrayStar">
                            <img src={Star} alt="Star" />
                            <div className="homeMidGrayList">
                                <h3>CONFIDENCE</h3>
                                <p>When having the skills to manipulate the applications and learning to use it brings self-confidence into your life. </p>
                            </div>
                        </div>
                        <div className="homeMidGrayStar">
                            <img src={Star} alt="Star" />
                            <div className="homeMidGrayList">
                                <h3>HIGHER SELF-EXPECTATIONS </h3>
                                <p>This programme develops students to think the best of themselves to bring higher expectations to their learning and lives as young adults.</p>
                            </div>
                        </div>
                        <div className="homeMidGrayStar">
                            <img src={Star} alt="Star" />
                            <div className="homeMidGrayList">
                                <h3>COHERENCE</h3>
                                <p>This programme offers all students a broader education that makes links within and across learning areas.</p>
                            </div>
                        </div>
                    </div>
                )}

                {activePart === 2 && (
                    <div>
                        <h1>Enhance key competencies</h1>
                        <h2>The programme enhances capabilities of students in the 5 Key Competencies identified in the New Zealand Curriculum:</h2>
                        <div className="homeMidGrayStar">
                            <img src={Star} alt="Star" />
                            <div className="homeMidGrayList">
                                <h3>THINKING</h3>
                                <p>In particular the programme focused on problem solving, design thinking and computational thinking. </p>
                            </div>
                        </div>
                        <div className="homeMidGrayStar">
                            <img src={Star} alt="Star" />
                            <div className="homeMidGrayList">
                                <h3> DISCERNING CODES</h3>
                                <p> Analysing language, symbols, and texts in order to understand and make sense of the codes in which knowledge is expressed. </p>
                            </div>
                        </div>
                        <div className="homeMidGrayStar">
                            <img src={Star} alt="Star" />
                            <div className="homeMidGrayList">
                                <h3>SELF-MANAGEMENT</h3>
                                <p>Projects and challenges are designed to motivate students to explore and experiment with self-motivation</p>
                            </div>
                        </div>
                        <div className="homeMidGrayStar">
                            <img src={Star} alt="Star" />
                            <div className="homeMidGrayList">
                                <h3>RELATIONSHIPS WITH PEERS</h3>
                                <p>The programme is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognise different points of view, and share ideas.</p>
                            </div>
                        </div>
                        <div className="homeMidGrayStar">
                            <img src={Star} alt="Star" />
                            <div className="homeMidGrayList">
                                <h3>PARTICIPATION AND COLLABORATION</h3>
                                <p>The programme encourages students to be involved in communities, such as family, whānau, school, and contribute and make connections with other people</p>
                            </div>
                        </div>
                    </div>
                )}

                {activePart === 3 && (
                    <div>
                        <h1>IR4.0</h1>
                        <h2>Designed with IT industry experts, the programme develops the students to find applicable jobs and careers in the Fourth Industrial Revolution. (IR4.0)</h2>
                        <div className="homeMidGrayStar">
                            <img src={Star} alt="Star" />
                            <div className="homeMidGrayList">
                                <h3>LEARNING TO LEARN </h3>
                                <p>The programme will set challenges at the end of every project to encourage students to explore and learn how to learn. </p>
                            </div>
                        </div>
                        <div className="homeMidGrayStar">
                            <img src={Star} alt="Star" />
                            <div className="homeMidGrayList">
                                <h3>COMMUNITY ENGAGEMENT</h3>
                                <p>The programme encourages students to be involved in the communities, such as family, friends, and in school, to contribute and make connections with other people. </p>
                            </div>
                        </div>
                        <div className="homeMidGrayStar">
                            <img src={Star} alt="Star" />
                            <div className="homeMidGrayList">
                                <h3>CULTURAL DIVERSITY </h3>
                                <p>This programme is designed in New Zealand and reflects NZ's cultural diversity.</p>
                            </div>
                        </div>
                        <div className="homeMidGrayStar">
                            <img src={Star} alt="Star" />
                            <div className="homeMidGrayList">
                                <h3>INCLUSION </h3>
                                <p>In particular theprogramme is designed with acknowledgement to the student's identities and talents, allowing them to be creative to their personal ability.</p>
                            </div>
                        </div>
                        <div className="homeMidGrayStar">
                            <img src={Star} alt="Star" />
                            <div className="homeMidGrayList">
                                <h3>FUTURE FOCUS </h3>
                                <p>The programme leads students to explore future themes such as artificial intelligence and augmented reality.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* homeBottom */}
            <div className="homeBottom">
                <img src={classroom} alt="classroom" />
                <div className="homeBottomText">
                    <h1> What are you waiting for? </h1>
                    <h2> Start teaching Digital Technologies today.</h2>
                    <h3> If you need more information, we are happy to answer any quesiton you may have.</h3>
                    <div className="homeBottomBtn">
                        <button className="blueBtn">ENQUIRE NOW</button>
                        <button className="pinkBtn" onClick={toggleModal}>SIGN UP</button>
                    </div>
                </div>
            </div>

        </div>

    );
}
