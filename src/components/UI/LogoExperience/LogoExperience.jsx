//rafc
import React, { useState } from 'react';
import ibg from '../../../assets/ibg.png';
import biotic from '../../../assets/biotic.png';
import alberto from '../../../assets/alberto_ingenieria.png';
import calculetric from '../../../assets/calculetric.png';
import './LogoExperience.css'

export const LogoExperience = ({ logolink, name }) => {

  const [isVisible, setIsVisible] = useState(false);

  const images = {
    ibg: ibg,
    biotic: biotic,
    alberto: alberto,
    calculetric: calculetric,
  };

  const experience = {
    ibg: '6 months of programming applications',
    biotic: 'Brand creation and corporate identity',
    alberto: 'Over 10 years creating electrical calculations, and automating tasks to streamline processes.',
    calculetric: 'Application dedicated to creating electrical calculations for project presentations.',
  }

  const imageSrc = images[logolink] || 0;
  const textExp = experience[name] || 0;

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };


  return (
    <>
      <section className="logoExp" onClick={toggleVisibility}>
        <img src={imageSrc} alt={name} />
      </section>
      <div className="text-placeholder"> 
          <div className={`experience-text-container ${isVisible ? 'open' : ''}`}>
              <p className='text-exp'>{textExp}</p>
          </div>
      </div>
    </>
  )
}
