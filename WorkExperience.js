import React from "react";

const WorkExperience = () => {
    const works = [
        {
            id: 1,
            workplace: "Attendo Rauman Aalto",
            occupation: "Nurse",
            year: "2019=>",
            description: "Working as a nurse in sheltered home for young people with mental health disorders."
        },
        {
            id: 2,
            workplace: "Family Rehabilitation Centre Lauste",
            occupation: "Nurse, supervisor",
            year: "2011-2019",
            description: "Working as a nurse in child caring institution for children with mental health disorders."
        },
        {
            id: 3,
            workplace: "Psychiatric hospital in Uusikaupunki",
            occupation: "Nurse",
            year: "2007-2008 and 2010-2011",
            description: "Working as a nurse in psychiatric hospital in rehabilitation department."
        },
        {
            id: 4,
            workplace: "First Aid in Uusikaupunki",
            occupation: "Nurse",
            year: "2009",
            description: "Working as a nurse in first aid in hospital in Uusikaupunki."
        },
        {
            id: 5,
            workplace: "GreenFox Oy",
            occupation: "CAM programming",
            year: "2004-2005",
            description: "Working as a CAM programmer for CNC machines."
        },
        {
            id: 6,
            workplace: "Hukka Design Oy",
            occupation: "CNC Machinist",
            year: "2003-2004",
            description: "Working as a CNC machinist in Hukka Design Oy."
        },

    ];

    return (

        <div className="text-center py-5">
        <div className="container py-5">
        <div className="row justify-content-center">
            <h2 className="fw-bold">Work Experience</h2>
            <p className="lead text-muted mb-3">
                Take a look at my work experience. I am looking for to get some work experience in information technology.
            </p>
        </div>
        </div>


            <div className="work-background container">
            <div className="row">
                {works.map((work) => (        // luo niin paljon kortteja kun tarvii, tuo map funktio
                    <div className="col-md-6 col-lg-4 mb-4" key={work.id}>
                        <div className="card h-60 shadow">
                            <div className="card-header">
                                <h5 className="card-title mb-0">{work.institution}</h5>
                            </div>
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {work.degree}
                                </h6>
                                <p className="card-text">{work.description}</p>
                            </div>
                            <div className="card-footer text-muted">
                                <small>{work.year}</small>
                            </div>
                            </div>
                            </div>
                            
                ))}
            </div>
        </div>
     
      </div>
    
    );
    
};

export default WorkExperience;

