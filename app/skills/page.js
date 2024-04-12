'use client'



import { useState } from 'react'

import "../../styles/primary.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '@/components/NavBar';
import Title from '@/components/Title';

export default function Counter() {
    const [count, setCount] = useState(0)

    return (

        <>
            <NavbarComponent />
            <div className='px-5 my-5'>
                <Title title="Skills" />


                <div className="vict" >
                    COMING SOON
                    
                </div>


                <div className='text-light'>
                {/* <i class='bx bxl-flask'></i> */}

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

                    <strong>
                        FRAMEWORKS/TOOLS
                    </strong>

                    : React.js, Next.js, jQuery, Bootstrap, .NET , GraphQL, Figma, MongoDB, MySQL, Flask, Redux, Jenkins, Jira
                    <br />

                    <strong>
                    SOFT SKILLS
                </strong> 
                    
                    : Multilingual,Communication, Diversity, Motivated, Passion, Supporting, Knowledge Sharing, Teamwork,
                    Coordination, Dependability; Focused, Independent, Integrity, Strategic, Flexible, Leadership, Resilience, Passionate,
                    Collaborative, Proactive; Efficient.
                </div>
            </div>
        </>
    )
}