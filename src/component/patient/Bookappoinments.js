import React, { Component } from 'react'

export default class Bookappoinments extends Component {
    state={ba:[
        {
            id:1,
            name:"Shekhar",
            desc:"M.B.B.S, M.D(cardialogy)",
            fee:"250 Rs"
        },
        {
            id:1,
            name:"kashish",
            desc:"M.B.B.S, M.D(gendral)",
            fee:"250 Rs"
        },
        {
            id:1,
            name:"Swastika",
            desc:"M.B.B.S, M.D(pediatrics)",
            fee:"250 Rs"
        }
    ]
    }
    render() {
        return (
            <div>
                <div>
                    <p className="h3">Book Appoinments for Doctors</p>
                    <span className="h5-sm">Book appoinments online with verified doctors</span><br></br>
                </div>
                <div> { this.state.ba.map(app => 
                            <div key={app.id}>
                                <div class="card bg-white text-dark" width="100px" >
                                        <div className="card-body">
                                            <p className="card-text"><span className="h6">Name:</span> {app.name}</p>
                                            <p className="card-text"><span className="h6">Desigination:</span> {app.desc}</p>
                                            <p className="card-text"><span className="h6">Consultation Fee:</span> {app.fee}</p>
                                        <button type="button" className="btn btn-primary">Book Appoinment</button>
                                     </div>
                                </div><br></br>                                   
                            </div>) }
                        </div>
            </div>
        )
    }
}
