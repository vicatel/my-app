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

            </div>
        </>
    )
}