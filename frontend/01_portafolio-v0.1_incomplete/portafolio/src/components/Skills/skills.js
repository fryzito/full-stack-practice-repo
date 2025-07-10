import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle"> What I Do </span>
        <span className="skillDesc">I am a skilled an passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of seign and a keen eye for detail. I am proficient in HTML, CSS, and Javascript, as well as design software such as Adobe Photoshop and Illustrator.</span>
        <div className="skillBars">

            <div className="skillBar">
                <div className='skillBarTop'>
                    <img src={UIDesign} alt="UI Design" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text, you can write your own content here.</p>
                    </div>
                </div>
                <progress value="90" max="100" className="skillBarProgress"></progress>
            </div>

            <div className="skillBar">
                <div className='skillBarTop'>
                    <img src={WebDesign} alt="Web Design" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>This demo text can be changed while making the production ready website.</p>
                    </div>
                </div>
                <progress value="85" max="100" className="skillBarProgress"></progress>
            </div>

            <div className="skillBar">
                <div className='skillBarTop'>
                    <img src={AppDesign} alt="App Design" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>You can write text related to mobile app development.</p>
                    </div>
                </div>
                <progress value="80" max="100" className="skillBarProgress"></progress>
            </div>

        </div>
    </section>
  );
}

export default Skills