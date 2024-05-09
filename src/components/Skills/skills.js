import React from 'react'
import './skills.css'
import UIdesign from '../../Assets/ui-design.png'
import webDesign from "../../Assets/website-design.png"
import AppDesign from "../../Assets/app-design.png"

const skills = () => {
  return (
    <section id="skills">
     <span className="Skills-title">What I Do</span>
     <span className="Skilldesc">I am a skilled and passionate UI designer with experience in creating visual designs and websites.</span>
     <div className='skillBar'>
        <div className='Bars-item'>
            <img src={UIdesign} alt="UIDesign" className='skill-img' />
            <div className='skill-bar-text'>
                <h2>UI/UX Designer</h2>
                <p>Beginner Designer And Web Developer</p>
            </div>
        </div>
        <div className='Bars-item'>
            <img src={webDesign} alt="WebDesign" className='skill-img' />
            <div className='skill-bar-text'>
                <h2>Website Developer</h2>
                <p>Creating Amazing Websites</p>
            </div>
        </div>
        <div className='Bars-item'>
            <img src={AppDesign} alt="AppDesign" className='skill-img' />
            <div className='skill-bar-text'>
                <h2>App Design</h2>
                <p>Designing Amazing Apps</p>
            </div>
        </div>
     </div>
     <div className='skills'>
      <h1>React.js</h1>
      <h1>Html</h1>
      <h1>Css</h1>
      <h1>Next.js</h1>
      <h1>Tailwind Css</h1>
      <h1>Express.js</h1>
      <h1>Node.js</h1>
      <h1>Figma</h1>
      <h1>Gsap</h1>
      <h1>Sherry.js</h1>
      <h1>JavaScript</h1>
      <h1>MongoDB</h1>
     </div>
    </section>
  )
}

export default skills
