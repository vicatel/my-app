'use client'



import { useState } from 'react'

import "../../styles/test.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '@/components/NavBar';
import Title from '@/components/Title';

export default function Counter() {

    return (

        <>
            <NavbarComponent />
            <div className='px-5 my-5 text-light' >
                <Title title="/fonts/fonttt.svg" />


                <div className='vic' >
                </div>

                <div className="alert alert-light d-flex align-items-center w-50 my-2" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <div>
                        Still experimenting to create a reusable component for all projects.
                    </div>
                </div>

                 {/* <div className="p-3 bg-white text-dark bg-info-outline-subtle border border-info-subtle rounded-3 my-2">
                 <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg> Example element with utilities
                </div> */}

                <div className="project">
                <div className="container  text-center ">
                    <div className="row ">
                        <div className="col-md-8">

                            <div className="row ">
                                <div className="col rounded">
                                    <p style={{ display: 'block' }}>Simple Flashcard App</p>
                                    {/* <div className="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
                                        <p style={{ display: 'block' }}>This is a block-level paragraph.</p>
                                    </div> */}
                                </div>
                                {/* <div className="col-6">.col-6</div> */}
                            </div>
                            <div className="row ">
                                <div className="col">
                                 React
                                </div>
                                {/* <div className="col-6">.col-6</div> */}
                            </div>
                            <div className="row ">
                                <div className="col-6">
                                    <a href="">
                                        See more
                                        <i className="bx bx-link-external"></i>
                                    </a>
                                </div>
                                <div className="col-6"> <details>
                                    <summary>More Details</summary>
                                    <p>I simply followed instructions to create an app that has these features. (from CodePath)</p>
                                </details>
                                </div>
                            </div>




                        </div>
                        <div className=" col-md-4">
                            <div className="image-container">
                                    <small className='fst-italic'> hover </small>
                                <img src="https://i.imgur.com/3sST4dm.gif" alt="Image" className="zoom-image" />
                            </div>
                        </div>
                    </div>

                    {/* <div className="row">
                        <div className="col-6">.col-6</div>
                        <div className="col-6">.col-6</div>
                    </div> */}
                </div>
                </div>

               

            </div>
        </>
    )
}