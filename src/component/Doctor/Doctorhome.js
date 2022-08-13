import React from 'react'

export default function Doctorhome() {
    return (
        <div>
             <div class="jumbotron bg-white" style={{margin:"-20px 5px 0px 5px"}}>
             <img class="float-right" src="data:image/jpeg;base64,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" alt="Avro" style={{height:"200px",width:"500px"}} />
                <div class="img-overlay ">
                    <h4 class="card-title">EMediare For Doctors</h4>
                    <p class="card-text">Manage your practice efficiently </p>
                    <a href="#" class="btn btn-info">Get started</a>
                </div>
            </div>
            <br></br><br></br><br></br>
            <div class="jumbotron bg-white text-left" style={{margin:"-60px 5px 0px 5px"}} >
             <img class="float-left" src="https://img.freepik.com/free-photo/stethoscope-frame-with-copy-space_23-2148506682.jpg?size=626&ext=jpg" alt="Avro" style={{height:"200px",width:"200px"}} />
                <div class="img-overlay ">
                    <h4 class="card-title">Get started with Emedicare</h4>
                    <span class="card-text">Help patient to know about you and your practice.</span>
                    <span class="card-text"> Create a Free Emedicate profile to help people to find you</span>
                </div>
            </div>
            <br></br><br></br><br></br>
            <div class="jumbotron bg-white" style={{margin:"-10px 5px 0px 5px"}} >
             <img class="float-right" src="https://img.freepik.com/free-photo/stethoscope-frame-with-copy-space_23-2148506682.jpg?size=626&ext=jpg" alt="Avro" style={{height:"200px",width:"200px"}} />
                <div class="img-overlay ">
                    <h4 class="card-title">E-medicare Articles </h4>
                    <p class="card-text">Help people know about what happening in medical industry and <br></br>give tips about healthy lifestyle </p>
                </div>
            </div>
            <br></br><br></br><br></br>
        </div>
    )
}
