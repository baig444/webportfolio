import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import './into.css'
import image from '../../Assets/image.png'
import btnicon from '../../Assets/hireme.png'
import resume from '../../Assets/resume-1.pdf'

const Intro = () => {
  const [text] = useTypewriter({
    words: ['Faisal', 'Designer', 'Developer'],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100
  })
  return (
   
    <section className='intro'>
     <div className='left-intro'>
        <span className='hello'>Hello,</span>
        <span className='introtext'>I'm <span className='introName'>{text}</span><br />
        website Designer
        </span>
        <p className='intro-para'>I am a skilled web designer with experience in creating<br /> visual designs and websites.</p>

        <a href={resume} download={resume}><button className='intro-btn'><img src={btnicon} alt='bag' height={'20px'} />Download CV</button></a>

     </div>
    <img src={image} alt='Profile' className='right-img' />

    </section>

  )
}

export default Intro
