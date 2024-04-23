'use client'



import { useState } from 'react'

import "../../styles/primary.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '@/components/NavBar';
import Title from '@/components/Title';
import ProjectCard from '@/components/Project';
import VerticalModal from '@/components/VerticalModal';


import { Fade, Hinge, Bounce, Flip, JackInTheBox, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";


export default function Projects() {

    const [modalShow, setModalShow] = useState(false);

    // document.body.style.backgroundColor = isChecked ? 'black' : 'white';
    // TO-DO
    // light mode
    // About Me
    // Cool bg action for components
    // make titles cooler, maybe same radial gradient stuff
    // navbar to the right?

    return (
        <>
            <NavbarComponent />

            <div className='px-5 my-3 text-light' >
                <Title title="Projects" />
                <div className='blur' > </div>

                {/* <Fade cascade={true} damping={0.1} duration={5000}> */}
                <Zoom triggerOnce={true}>
                    <ProjectCard title={"Surprise Me!"} tech={"NextJS, PostgreSQL to store info, Supabase (Backend as a Service)"} details={"Lightweight fullstack app for friends & family."} path={"files/surprise.gif"} git={"https://github.com/vicatel/surprise-me-public.git"} id={"mobile"} show={() => setModalShow(true)}/>
                    <ProjectCard title={"Chatbot App"} tech={"NextJS, Flask for Python backend, MySQL to store info"} details={"Made a fullstack app for a school project."} path={"files/chatbot.gif"} git={"https://github.com/vicatel/seii-project.git"} show={() => setModalShow(true)} />

                    <ProjectCard title={"Simple Flashcards"} tech={"Reach,ViteJS"}
                        details={"Simple React Components (from CodePath)"} path={"files/flashcard.gif"} show={() => setModalShow(true)} />

                    <ProjectCard title={"Rockets API"} tech={"React, ViteJS"}
                        details={"Using Routes and Making API calls"} path={"files/rocket.gif"} show={() => setModalShow(true)} />

                </Zoom>
                <div className="alert alert-light d-flex align-items-center  mb-4" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2 alert-svg" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                    <div>
                        Reusable Components...very cool <i className='bx bxs-cool'> </i>
                    </div>
                </div>
                <Title title="Other Projects, Relevant tutorials & Lessons Learned" />
                COMING SOON
            </div>


            <VerticalModal
                show={modalShow}
                onHide={() => setModalShow(false)
                }
                backdrop="static"
                text={<>
                    To-do:
                    <br />
                    Add product backlog, figma design, other designs, thought process, problem-solution, etc.
                </>} />
        </>
    )
}

// Our address verification service has detected and made some suggested corrections to your address.
// <br />
// Please confirm the selection below.
// <hr />
// <strong> Suggested Address : </strong>
// <br />
// <hr />
// <button className="btn btn-dark"
//     onClick={(e) => {
//         router.push(`/longform/id-info/${id}`);
//     }}>
//     Use Suggested Address
// </button>



{/* <div className="p-3 bg-white text-dark bg-info-outline-subtle border border-info-subtle rounded-3 my-2">
                 <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg> Example element with utilities
                </div> */}

// {"I simply followed instructions to create an app that has these features (from CodePath)"}