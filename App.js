import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import AboutMe from './components/AboutMe';
import EducationalBackground from './components/EducationalBackground';
import WorkExperience from './components/WorkExperience';

function App() {
  
  return (
    <div>
      <PersonalInfo />
      <AboutMe />
      <hr></hr>
      <EducationalBackground />
      <hr></hr>
      <WorkExperience />

    </div>
  );
}

export default App;

