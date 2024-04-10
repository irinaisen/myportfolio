import React from "react";
import meImage from '../images/me1.jpg';
import EducationalBackground from './EducationalBackground';
import WorkExperience from './WorkExperience';

const PersonalInfo = () => {
    return (
    <header className="bg-light py-5">
       <div className="container px-5">
            <div className ="row align-items-center">
                <div className="col-lg-8 col-xl-7 col-xxl-6">     
                <div className="my-5">
                <h2 className="text-center fw-bold mb-2">Hi, I am Irina!</h2>
                        <h2 className="text-primary text-center fw-bold mb-2">a full stack web developer</h2><br/>
                        <p className="lead text-muted mb-4">
                            I am studying information technology and specializing in backend development. I have also specialized in using JavaScript and React. 
                            
                        <br/><br/>
                            I am also nurse, and have been working as a nurse 15 years. That is why I would like to work in welfare technology or in hospital's IT department.
                            Please take a look to see more about me and things I have been working on.
                        </p>
                        <div className="d-grid gap-3 d-sm-flex justify-content-center"></div>
                        <a className="btn btn-primary btn-large text-uppercase" href={<WorkExperience />}>
                            Learn More
                            <span className="material-icons-outlined ms-2">help_outline</span>
                        </a> 
                        <a className="btn btn-outline-primary btn-large text-uppercase" href={<EducationalBackground />}>
                            View my work
                            <span className="material-icons-outlined ms-2">manage_search</span>
                        </a> 
                        </div>
                </div>
                
                
                <div className="col-xl-5 col-xxl-6 justify-content-center">

                    <img
                    src={meImage}
                    alt="Me"
                    className="img-fluid rounded-start"     //img-fluid tarkoittaa että kuvan koko muuttuu näytön mukana
                    />
                </div>
                </div>
            </div>
         
       
        </header>
        


    );
};

export default PersonalInfo;

