'use client'



import { useState } from 'react'

import "../../styles/primary.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '@/components/NavBar';
import Title from '@/components/Title';
import { Bounce } from 'react-awesome-reveal';

export default function Counter() {
    const [count, setCount] = useState(0)

    return (

        <>
            <NavbarComponent />
            <div className='px-5 my-3'>
                <Title title="Skills" />


                {/* <div className="vict" >
                    COMING SOON
                </div> */}

                <div className='blur' > </div>

                <strong>
                    FRAMEWORKS/TOOLS
                </strong>

                <Bounce>
                <div className='container'>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/skills/react-original.svg" alt="React" /><p className='text-light'>React</p></div>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/skills/nextjs-original-wordmark.svg" id='next' alt="NextJS" /><p className='text-light'>Next.JS</p></div>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/skills/bootstrap-original.svg" alt="Bootstrap" /><p className='text-light'>Bootstrap</p></div>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/skills/jquery-original.svg" alt="jQuery" /><p className='text-light'>jQuery</p></div>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/skills/redux-original.svg" alt="Redux" /><p className='text-light'>Redux</p></div>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/skills/mysql-original.svg" alt="MySql" /><p className='text-light'>MySQL</p></div>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/skills/mongodb-original.svg" alt="MongoDB" /><p className='text-light'>MongoDB</p></div>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/skills/graphql-plain.svg" alt="GraphQL" /><p className='text-light'>GraphQL</p></div>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/skills/github-original-wordmark.svg" id="next" alt="Github" /><p className='text-light'>GitHub</p></div>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/skills/figma-original.svg" alt="Figma" /><p className='text-light'>Figma</p></div>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/skills/flutter-plain.svg" alt="Flutter" /><p className='text-light'>Flutter</p></div>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/skills/flask-original.svg" id='next' alt="Flask" /><p className='text-light'>Flask</p></div>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/skills/dot-net-original.svg" alt=".NET" /><p className='text-light'>.NET</p></div>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/skills/docker-plain.svg" alt="Docker" /><p className='text-light'>Docker</p></div>
                    <div className='text-light'>
                        {/* <i class='bx bxl-flask'></i> */}
                        <br />
                        <br />
                        <br />
                        <br />

                        <strong>
                            TECHNICAL SKILLS
                        </strong>

                        : Linux CLI, GitHub, Agile Methodologies, MS Excel, Web Design
                        <br />

                        <strong>
                            PROGRAMMING LANGUAGES
                        </strong>

                        : Python, JavaScript, TypeScript, HTML, CSS, C#, SQL, Dart
                        <br />
                        {/* 
                    <strong>
                        FRAMEWORKS/TOOLS
                    </strong>

                    : React.js, Next.js, jQuery, Bootstrap, .NET , GraphQL, Figma, MongoDB, MySQL, Flask, Redux, Jenkins, Jira
                    <br /> */}

                        <strong>
                            SOFT SKILLS
                        </strong>

                        : Multilingual, Communication, Knowledge Sharing, Teamwork,  
                        Collaborative, Proactive; Efficient.
                    </div>
                </div>
                </Bounce>


                {/* <strong>
                        FRAMEWORKS/TOOLS
                    </strong>

                <div className='container'>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/avi.svg" alt="HTML" /><p className='text-light'>HTML</p></div>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/avi.svg" alt="HTML" /><p className='text-light'>HTML</p></div>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/avi.svg" alt="HTML" /><p className='text-light'>HTML</p></div>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/avi.svg" alt="HTML" /><p className='text-light'>HTML</p></div>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/avi.svg" alt="HTML" /><p className='text-light'>HTML</p></div>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/files/chatbot.gif" alt="HTML" /><p className='text-light'>HTML</p></div>
                </div>

                <strong>
                        FRAMEWORKS/TOOLS
                    </strong>

                <div className='container'>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/avi.svg" alt="HTML" /><p className='text-light'>HTML</p></div>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/avi.svg" alt="HTML" /><p className='text-light'>HTML</p></div>
                    <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/avi.svg" alt="HTML" /><p className='text-light'>HTML</p></div> */}
                {/* <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/avi.svg" alt="HTML" /><p className='text-light'>HTML</p></div> */}
                {/* <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/avi.svg" alt="HTML" /><p className='text-light'>HTML</p></div> */}
                {/* <div className="skills-div text-center" style={{ display: "inline-block" }}><img src="/files/chatbot.gif" alt="HTML" /><p className='text-light'>HTML</p></div> */}
                {/* </div> */}

                {/* <div class="skills-div" style={{display: "inline-block"}}><img src="/avi.svg" alt="HTML" style={{height: "75px", width: "75px", margin: "10px 10px 0px"}}/><p><b>HTML</b></p></div> */}





            </div>
        </>
    )
}