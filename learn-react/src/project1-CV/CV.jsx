import React, { useState } from 'react';
import Personal from './Personal';
import Educations from './Educations';
import Experience from './Experience';

export default function CV() {
  const [personal,setPersonal]=useState({name:'',email:'',phone:''});
  const [educationList, setEducationList] = useState([{ school: '', degree: '', year: '' }]);
  const [experienceList, setExperienceList] = useState([{ company: '', role: '', years: '' }]);

  // Handle Personal Info Change
  function handlePersonalChange(field,value){
    setPersonal((prev)=>({...prev,[field]:value}))
  }

  // Handle Education Change
  function handleEducationChange(index, field, value) {
    const updatedEducationList = educationList.map((education, i) =>
      i === index ? { ...education, [field]: value } : education
    );
    setEducationList(updatedEducationList);
  }

  // Add New Education Entry
  function addEducation() {
    setEducationList([...educationList, { school: '', degree: '', year: '' }]);
  }

  // Remove Education Entry
  function removeEducation(index) {
    setEducationList(educationList.filter((_, i) => i !== index));
  }

  // Handle Experience Change
  function handleExperienceChange(index, field, value) {
    const updatedExperienceList = experienceList.map((experience, i) =>
      i === index ? { ...experience, [field]: value } : experience
    );
    setExperienceList(updatedExperienceList);
  }

  // Add New Experience Entry
  function addExperience() {
    setExperienceList([...experienceList, { company: '', role: '', years: '' }]);
  }

  // Remove Experience Entry
  function removeExperience(index) {
    setExperienceList(experienceList.filter((_, i) => i !== index));
  }

  return (
    <div className='p-8'>
      {/* Input Section */}
      <div className='flex flex-col gap-8 mb-12'>
        <Personal 
        onPersonalChange={handlePersonalChange}
        personal={personal}
        />

        <div>
          <h2 className='text-lg font-bold'>Educations</h2>
          {educationList.map((education, index) => (
            <div key={index} className='mb-4'>
              <Educations
                education={education}
                index={index}
                onEducationChange={handleEducationChange}
                onRemove={() => removeEducation(index)}
              />
            </div>
          ))}
          <button
            onClick={addEducation}
            className='px-4 py-2 bg-blue-500 text-white rounded mt-2'
          >
            Add Education
          </button>
        </div>

        <div>
          <h2 className='text-lg font-bold'>Experiences</h2>
          {experienceList.map((experience, index) => (
            <div key={index} className='mb-4'>
              <Experience
                experience={experience}
                index={index}
                onExperienceChange={handleExperienceChange}
                onRemove={() => removeExperience(index)}
              />
            </div>
          ))}
          <button
            onClick={addExperience}
            className='px-4 py-2 bg-blue-500 text-white rounded mt-2'
          >
            Add Experience
          </button>
        </div>
      </div>

      {/* Display Section */}
      <div className='border  flex justify-center '>
      <div className='border border-black p-6'>
        <h2 className='text-xl font-bold mb-4'>CV Preview</h2>
        <div className='mb-6'>
        <h3 className='text-lg font-bold'>Personal Information:</h3>
          <p><strong>Name:</strong> {personal.name}</p>
          <p><strong>Email:</strong> {personal.email}</p>
          <p><strong>Phone:</strong> {personal.phone}</p>
        </div>

        <div className='mb-6'>
          <h3 className='text-lg font-bold'>Educations:</h3>
          {educationList.map((education, index) => (
            <div key={index}>
              <p><strong>School:</strong> {education.school}</p>
              <p><strong>Degree:</strong> {education.degree}</p>
              <p><strong>Year:</strong> {education.year}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className='text-lg font-bold'>Experiences:</h3>
          {experienceList.map((experience, index) => (
            <div key={index}>
              <p><strong>Company:</strong> {experience.company}</p>
              <p><strong>Role:</strong> {experience.role}</p>
              <p><strong>Years:</strong> {experience.years}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
      </div>
  );
}
