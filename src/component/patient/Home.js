import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

export default class home extends Component {
    render() {
        return (
            <div className="container-fluid" >

{/*introduction text*/}
                <div class="jumbotron bg-white text-dark" style={{height:"300px" ,width:"1450px"}}>
                        <div >
                            <h3 class="card-title">Welcome to E-Medicare</h3>
                            <p class="card-text">Book Appoinments online,View Doctors according to your health needs, manage Your health records and more.</p>
                            <a href="#" class="btn btn-primary btn-lg">Get started</a>
                        </div>
                </div>
              

{/*covid related cards*/}

                {/*
                </div><div className="row">
                    <div className="card bg-light text-dark">
                        <h3>Symptoms of covid 19..</h3>

                    </div>
                    <div className="card bg-light text-dark">
                        <h3
                    </div>
        </div>*/}

{/*appoinments  cards*/}
        
                <table>
                    <tr>
                        <td width="480px">
                            <div class="jumbotron bg-white text-dark" style={{height:"300px" ,width:"450px"}} >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf-BSVtkhp6O1SjmGEc1_MoMd743ujLmTLCg&usqp=CAU" height="200px" class="card-img-top" alt=".." ></img>
                                <div className="card-body">
                                    <h3 className="card-title">Book Appoinments</h3>
                                    <p className="card-text">Select the Doctor and time slot to book an appoinment</p>
                                    <button type="button" className="btn btn-primary">Book Appoinment</button>
                                </div>
                            </div>
                        </td>
                        <td width="80px"></td>
                        <td width="500px">
                            <div class="jumbotron bg-white text-dark" style={{height:"300px" ,width:"450px"}}>
                                <img src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxtZWRpY2FsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="230px" class="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h3 className="h3">View Doctors</h3>
                                    <p className="card-text">Select a Doctor according to your health concern</p>
                                    <button type="button" className="btn btn-primary">View Doctors</button>
                                </div>
                            </div>
                        </td>
                        <td width="100px"></td>
                        <td width="500px">
                            <div class="jumbotron bg-white text-dark" style={{height:"300px" ,width:"450px"}}>
                                <img src="https://media.istockphoto.com/photos/diabetes-under-magnifying-glass-picture-id467163246?k=6&m=467163246&s=612x612&w=0&h=YpTXyyIIwhMjfvwxkynAWJNLyOrglKbS2NAZ5k0BNKQ=" height="230px" class="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h3 className="h3">Articles</h3>
                                    <p className="card-text">Update Yourself with the latest news and articles</p>
                                    <button type="button" className="btn btn-primary">View Article</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
                <div> 
                <br></br><br></br><br></br><br></br><br></br><br></br>

{/*health problems cards*/}

                <div class="jumbotron bg-white text-dark" style={{height:"550px" ,width:"1450px"}}>
                <span className="h2">Consult doctors online for any health concern</span><br></br>
                <span >Private online consultations with verified doctors in all specialization</span>
                <table >
                    <tr>
                        <td width="300px">
                            < a className=" text-decoration-none" href="#">
                            <div class="jumbotron bg-white text-dark" style={{height:"325px"}}>
                                <img src="data:image/jpeg;base64,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" height="150px" class="card-img-top" alt=".." ></img>
                                <div className="card-body">
                                    <p className="card-title">Health problems for child</p>
                                </div>
                            </div>
                            </a>
                        </td>
                        
                        <td width="250px">
                        < a className="text-decoration-none" href="#" >
                            <div class="jumbotron bg-white text-dark" style={{height:"325px"}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsbLZIJC4lWiteL040hkZZJa-4YYwjV7BqA&usqp=CAU" height="160px" class="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <p className="card-title">Skin care</p>
                                </div>
                            </div>
                            </a>
                        </td>
                        
                        <td width="250px" >
                        < a className="text-decoration-none" href="#" style={{height:"325px"}}>
                            <div class="jumbotron bg-white text-dark">
                            <br></br>
                            <br></br>
                                <img src="https://i.pinimg.com/474x/12/f8/36/12f836d98b4fb80849075f0af6367d8f.jpg" height="150px" class="card-img-top" alt="..."></img>
                                <div className="card-body">
                                <p className="card-title">Cold,cough,fever</p>
                                </div>
                            </div>
                            </a>
                        </td>
                        
                        <td width="250px">
                        < a className="text-decoration-none" href="#">
                            <div class="jumbotron bg-white text-dark" style={{height:"325px"}}>
                            <br></br>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRubwiHHcq6x1DJY8jJ382eli0sYyZfhEPUQ&usqp=CAU" height="125px" class="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <p className="card-title">Mental health problems</p>
                                </div>
                            </div>
                            </a>
                        </td>
                        
                        <td width="250px">
                        < a className="text-decoration-none" href="#">
                            <div class="jumbotron bg-white text-dark" style={{height:"325px"}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9YW5G79e19AaeKD8-tJqh3cJU3KjZnGh_Q&usqp=CAU" height="150px" class="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <p className="card-title">Digestion Problems</p>
                                </div>
                            </div>
                            </a>
                        </td>
                        
                        <td width="250px">
                        < a className="text-decoration-none" href="#">
                            <div class="jumbotron bg-white text-dark" style={{height:"325px"}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JoxGXyNNF6v-WdVb2ZOBOvQUYzd2z7jCXg&usqp=CAU" height="145px" class="card-img-top" alt="..."></img>
                                <div className="card-body">
                                <p className="card-title">Aches and body pains</p>
                                </div>
                            </div>
                            </a>
                        </td>
                    </tr>
                </table>
                </div>
                </div>
               


{/*feedback*/}

                <div classname="card">
                    <div className="feedback">
                        <p className="h3">What our users feel about the app</p><br></br>
                        <p>It is most handy and easy to use<br></br>hussle free and easy to view the reports </p><br></br>
                        <p>Narendran(customer)</p>
                    </div>
                </div>
                <br></br>
            </div>
        )
    }
}
