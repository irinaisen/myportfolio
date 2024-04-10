import React from "react";
import itImage from '../images/it.jpg';
import nurseImage from '../images/nurse.jpg';
import cncImage from '../images/cnc.jpg';

const EducationalBackground = () => {
    const educations = [
        {
            id: 1,
            image: itImage,
            institution: "Hämeen Ammattikorkeakoulu",
            degree: "Information Technology, Bachelor's degree",
            year: "2020=>",
            description: "Studying Information technology in Hämeen Ammattikorkeakoulu. Going to graduate in 2025."
        },
        {
            id: 2,
            image: nurseImage,
            institution: "Hämeen Ammattikorkeakoulu",
            degree: "Nursing, Bachelor's degree",
            year: "2005-2008",
            description: "Studying nursing in Hämeen Ammattikorkeakoulu. Graduated in 2008."
        },
        {
            id: 3,
            image: cncImage,
            institution: "Pohjois-Karjalan Ammattikorkeakoulu",
            degree: "Mechanical Engineering and Production Technology",
            year: "2002-2005",
            description: "Student as a mechanical Engineering and Production Technology."
        },

    ];

    return (
        
        <div className="text-center py-5">
        <div className="container py-5">
        <div className="row justify-content-center">
            <h2 className="fw-bold">Education</h2>
            <p className="lead text-muted mb-3">
                There is my educational background.
            </p>
        </div>
        </div>


            <div className="work-background container">
        
            <div className="row">
                {educations.map((education) => (        // luo niin paljon kortteja kun tarvii, tuo map funktio
                    <div className="col-md-6 col-lg-4 mb-4" key={education.id}>
                        <div className="card h-60 shadow">
                        <img
                         src={education.image}
                         alt="Education"
                          className="card-img-top"    
                          />
                            <div className="card-header">
                                <h5 className="card-title mb-0">{education.institution}</h5>
                            </div>
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {education.degree}
                                </h6>
                                <p className="card-text">{education.description}</p>
                            </div>
                            <div className="card-footer text-muted">
                                <small>{education.year}</small>
                            </div>
                            </div>
                            </div>
                ))}
            </div>
        </div>
     
      </div>
    
    );
    
};

    

export default EducationalBackground;
