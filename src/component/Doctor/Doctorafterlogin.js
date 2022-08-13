import React, { Component } from 'react';

export default class Doctorhome extends Component {
    state={
        appoinments:[
            {
                id:1,
                time:"10.30",
                name:"Narendran"
            },
            {
                id:2,
                time:"11.00",
                name:"Aditiya"
            },
            {
                id:3,
                time:"11.30",
                name:"Arthi"
            }
        ]
    }
    render() {
        return (
            <div >
                <div class="row">
                    <div class="col-sm-6">
                        <h3 class="card-title">Welcome Doctor,</h3><br></br>
                        <p class="card-text h5">Today's Appoinment</p>
                        <br></br>
                        <div className="container-sm">
                        <table >
                            <thead style={{display:"block"}}>
                                <th id="th2" style={{width: "100px"}}></th>
                                <th id="th3" style={{width: "100px"}}></th>
                                <th id="th4" style={{width: "200px"}}></th>
                            </thead>
                        <tbody> { this.state.appoinments.map(app => 
                            <div key={app.id}>
                                <div className="row mx-auto">
                                        <tr>
                                            <td headers="th2" style={{width: "100px"}}>{app.name}</td>
                                            <td headers="th3" style={{width: "100px"}}>{app.time}</td>
                                            <td headers="th4" style={{width: "200px"}}><button type="button" class="btn btn-primary btn-sm">view patient details</button></td>
                                        </tr>
                                    
                                </div>                                    
                            </div>) }
                        </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <table>
                    <tr>
                        <td width="400px">
                            <div class="jumbotron bg-white text-dark" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf-BSVtkhp6O1SjmGEc1_MoMd743ujLmTLCg&usqp=CAU" height="225px" class="card-img-top" alt=".." ></img>
                                <div className="card-body">
                                    <h3 className="card-title">View Appoinments</h3>
                                    <p className="card-text">View Your appoinments</p>
                                    <button type="button" className="btn btn-primary">Book Appoinment</button>
                                </div>
                            </div>
                        </td>
                        <td width="100px"></td>
                        <td width="400px">
                            <div class="jumbotron bg-white text-dark">
                                <img src="https://www.patriotsoftware.com/wp-content/uploads/2019/06/how-to-fill-out-form-941-RS12545-compressor-1.jpg" height="230px" class="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h3 className="h3">Edit Details</h3>
                                    <p className="card-text">Edit your personal details</p>
                                    <button type="button" className="btn btn-primary">View Doctors</button>
                                </div>
                            </div>
                        </td>
                        <td width="100px"></td>
                        <td width="400px">
                            <div class="jumbotron bg-white text-dark">
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
                <br></br><br></br><br></br><br></br>
            </div>
            </div>
        )
    }
}
