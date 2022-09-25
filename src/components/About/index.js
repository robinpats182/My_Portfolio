import React from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'


export const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(()=> {

    return (() => {
        setLetterClass('text-animate-hover')
    })
});


  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters

            letterClass={letterClass}   
             strArray={['A','B','O','U','T',' ','M','E']}
             idx={15}
              />
             </h1>
            <p>My name is Rabin Patel and I am a Web Developer. I am an accomplished coder and learner, and I love
using my skills to contribute to the interesting technological advancements that occur daily in tech world.</p>
            <p>I graduated from the University of Wolverhampton at 2022 with the college diploma in
Bsc.Hons(Computing). While at education, I gained my typical academic performance and leadership skills.</p>
            <p>I had an internship job in lnitHive immediately for 2 months, after the graduation I am looking for any opportunity where my skills could be usefull. I am obsessed with all matters tech-related and I spend my free time learning and practicing my personal code. I also love music, guitars, dogs and cats.</p>
      </div>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faNodeJs} color='#66FF99' />

            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#F06529' />

            </div> 
            
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#28A4D9' />

            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4' />

            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />

            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />

            </div>
          </div>
        </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About