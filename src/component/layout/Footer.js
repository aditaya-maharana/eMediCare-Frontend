import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div >
            <div>
                <div class=" text-center text-white bg-dark " >
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="col-2"></div>
                            <div class="col-2  ">
                                <div class="row">
                                <h6>E-Medicare</h6>
                                </div>
                                <div class="row">
                                <Link className="text-decoration-none text-light" to="/about">About</Link>
                                </div>
                                <div class="row">
                                <a className="text-decoration-none text-light" href="#">Articles</a>
                                </div>
                                <div class="row">
                                <Link className="text-decoration-none text-light" href="#">Contact Us</Link>
                                </div>
                            </div>
                            <div class="col-2  ">
                                <div class="row">
                                <h6>Patient</h6>
                                </div>
                                <div class="row">
                                <Link className="text-decoration-none text-light" to="/bookappoinments">Book Appoinment</Link>
                                </div>
                                <div class="row">
                                <Link className="text-decoration-none text-light" to="/viewdoctor">View Doctor</Link>
                                </div>
                                <div class="row">
                                <Link className="text-decoration-none  text-light" href="#">Submit feedback</Link>
                                </div>
                            </div>
                            <div class="col-2 ">
                                <div class="row">
                                <h6>Doctor</h6>
                                </div>
                                <div class="row">
                                <Link className="text-decoration-none text-light" href="#">View Appoinments</Link>
                                </div>
                                <div class="row">
                                <Link className="text-decoration-none text-light" href="#">Edit Details</Link>
                                </div><br></br>
                            </div>
                            <div class="col-2 ">
                                <div class="row">
                                <h6>Help&Support</h6>
                                </div>
                                <div class="row">
                                <a className="text-decoration-none text-light" href="#">Complaince</a>
                                </div>
                                <div class="row">
                                <a className="text-decoration-none text-light" href="#">support</a>
                                </div>
                                <br></br>
                            </div> 
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p className="h3">E-Medicare</p>
                        <span>Copyright © 2021, E-Medicare.</span>
                        <span>All rights reserved.</span>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                </div>
            </div>
        </div>
    )
}
