'use client'



import { useState } from 'react'

import "../../styles/primary.css";
import "../../styles/cert.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '@/components/NavBar';
import Title from '@/components/Title';
import CertificateCard from '@/components/CertificateCard';

import { Bounce, Slide, Zoom } from "react-awesome-reveal";

export default function Counter() {
    const [count, setCount] = useState(0)

    return (

        <>
            <NavbarComponent />
            <div className='px-5 my-5 text-light'>
                <Title title="Plans" />


                <div className="vict text-light" >
                </div>

                <div className='blur' > </div>

                <Bounce>

                    <div className={"project my-5"} >
                        <div className="container text-light text-start ">
                            <div className="row ">
                                <div className="col">

                                    <div className="row ">
                                        <div className="col rounded">
                                            {/* <i class='bx bxs-certification'></i>  */}
                                            VT Planner - An all around daily planner to increase productivity.
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"project my-5"} >
                        <div className="container text-light text-start ">
                            <div className="row ">
                                <div className="col">

                                    <div className="row ">
                                        <div className="col rounded">
                                            {/* <i class='bx bxs-certification'></i>  */}
                                            Surprise Me! - Gift giving app for family and friends.
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"project my-5"} >
                        <div className="container text-light text-start ">
                            <div className="row ">
                                <div className="col">

                                    <div className="row ">
                                        <div className="col rounded">
                                            {/* <i class='bx bxs-certification'></i>  */}
                                            BookMarkIt - An app to bookmark social media posts & organize them exactly how i want, using Open Graph Protocol.
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <CertificateCard title={"Meta Database Engineer- Certificate"} details={"Not Started"} progress={0} />

                </Bounce>





                <div className="alert alert-light d-flex align-items-center  mb-4" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2 alert-svg" viewBox="0 0 16 16" role="img" aria-label="Warning:">

                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />

                    </svg>
                    <div>
                        I will be developing these using the Scrum Methodology and adding the development process later on. Software Design, Product Backlog, Website Design, etc.
                    </div>
                </div>

            </div>
        </>
    )
}