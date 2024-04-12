'use client'



import { useState } from 'react'

import "../../styles/primary.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '@/components/NavBar';
import Title from '@/components/Title';
import ProjectCard from '@/components/Project';

export default function Projects() {

    return (



        <>

            <NavbarComponent />
            <div className='px-5 my-5 text-light' >
                <Title title="Projects" />


                <div className='blur' >
                </div>


                <ProjectCard title={"Chatbot App"} tech={"NextJS, Flask for Python backend"} details={"School project to make a fullstack app."} />

                <ProjectCard title={"Simple Flashcard App"} tech={"Reach,ViteJS"}
                    details={"I simply followed instructions to create an app that has these features. (from CodePath)"} />

                <ProjectCard title={"Rockets API App"} tech={"React, ViteJS"}
                    details={"I simply followed instructions to create an app that has these features. (from CodePath)"} />



                <div className="alert alert-light d-flex align-items-center w-75 mb-4" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">

                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />

                    </svg>
                    <div>
                        Reusable Components...very cool <i class='bx bxs-cool'> </i>
                    </div>
                </div>

            </div>
        </>
    )
}


{/* <div className="p-3 bg-white text-dark bg-info-outline-subtle border border-info-subtle rounded-3 my-2">
                 <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg> Example element with utilities
                </div> */}