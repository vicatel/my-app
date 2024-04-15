'use client'



import { useState } from 'react'

import "../../styles/cert.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '@/components/NavBar';
import Title from '@/components/Title';
import ProjectCard from '@/components/Project';
import CertificateCard from '@/components/CertificateCard';


export default function Certificates() {
    const [count, setCount] = useState(0)

    return (

        <>
            <NavbarComponent />
            <div className='px-5 my-5 text-light' >
                <Title title="Certificates" />
                <div className='blur' > </div>
                <CertificateCard title={"IBM Full-Stack Software Developer Professional Certificate"} details={"Covers Software Engineering Fundamentals, GitHub, React, NodeJS, MongoDB Express, Agile Development, Containers, Microservices & Serverless"} progress={90} />
                <CertificateCard title={"Google Foundations of Project Management"} details={"Covers Project Management Lifecycle and Methodologies"} progress={20} />
                <CertificateCard title={"Introduction to Modern Web Development with ASP.NET Core by EDUCBA"} details={"Covers core concepts and features of ASP.NET Core, Entity Framework Core for data access and management"} progress={50} />
                <Title title="Completed" />
                <CertificateCard title={"Cloud Web Apps Development"} details={"Covers Cloud deployment, GCP, Firebase tools and management"} progress={100} />
                <CertificateCard title={"AWS Cloud Practictioner"} details={"Covers AWS tools and management"} progress={100} />
                <CertificateCard title={"Python For Everybody"} details={"Covers variables, loops, functions, classes, etc."} progress={100} />
                <CertificateCard title={"2023 Web Development BootCamp by Angela Yu"} details={"Covers HTML, CSS and JS. React, MongoDB, etc."} progress={100} />

            </div>
        </>
    )
}