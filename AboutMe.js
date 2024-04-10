import React from "react";
import meImage from '../images/me.jpg';

const AboutMe = () => {
    return (         
        <div className="personal-info container mt-5">
            <div className="card mb-3 shadow">
                <div className="row no-gutters">
                    <div className="col md-4">
        <img
        src={meImage}
        alt="Me"
        className="img-fluid rounded-start"     //img-fluid tarkoittaa että kuvan koko muuttuu näytön mukana
        />
              </div>   
       
    <div className="col-md-8">

    <div className="card-body">
        <div className=" text-center">
        <div className="my-5">
        <h2 className="card-title">Personal Information</h2><br/>
        <p className="card-text">
            <strong>Name:</strong> Irina Päivöke
        </p>
        <p className="card-text">
            <strong>Age:</strong> 42
        </p>
        <p className="card-text">
            <strong>City:</strong> Rauma
        </p>
        <p className="card-text">
            <strong>Phone:</strong> 040 123 4567
        </p>
        <p className="card-text">
            <strong>Email:</strong> irina.paivoke@student.hamk.fi
        </p>
        <p className="card-text">
            <strong>Hobbies:</strong> Crossfit, ice swimming 
        </p>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        </div>
        </div>

        
    )};


    
export default AboutMe;