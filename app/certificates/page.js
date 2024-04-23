'use client'



import { useState } from 'react'

import "../../styles/cert.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '@/components/NavBar';
import Title from '@/components/Title';
import ProjectCard from '@/components/Project';
import CertificateCard from '@/components/CertificateCard';

import { Slide} from "react-awesome-reveal";


export default function Certificates() {

    return (
        <>
            <NavbarComponent />
            <div className='px-5 my-5 text-light' >
                <Title title="Certificates" />
                <div className='blur' > </div>
                <Slide triggerOnce={true}>
                    <CertificateCard title={"IBM Full-Stack Software Developer Professional Certificate"} details={"Covers Software Engineering Fundamentals, GitHub, React, NodeJS, MongoDB Express, Agile Development, Containers, Microservices & Serverless"} progress={90} />
                    <CertificateCard title={"Google Foundations of Project Management"} details={"Covers Project Management Lifecycle and Methodologies"} progress={20} />
                    <CertificateCard title={"Introduction to Modern Web Development with ASP.NET Core by EDUCBA"} details={"Covers core concepts and features of ASP.NET Core, Entity Framework Core for data access and management"} progress={50} />
                </Slide>
                <Title title="Completed" />
                <Slide triggerOnce={true} cascade={true}>
                    <CertificateCard title={"Cloud Web Apps Development"} details={"Covers Cloud deployment, GCP, Firebase tools and management"} done={true} />
                    <CertificateCard title={"AWS Cloud Practictioner"} details={"Covers AWS tools and management"} done={true} />
                    <CertificateCard title={"Python For Everybody"} details={"Covers variables, loops, functions, classes, etc."} done={true} />
                    <CertificateCard title={"2023 Web Development BootCamp by Angela Yu"} details={"Covers HTML, CSS and JS. React, MongoDB, etc."} done={true} />
                </Slide>

            </div>
        </>
    )
}