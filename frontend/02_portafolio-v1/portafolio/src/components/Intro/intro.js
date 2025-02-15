import React from "react";
import './intro.css';
import bg from '../../assets/profil-gerar-photo-v3.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro" > 
            <div className="introContent"> 
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName"> Gerar Francis </span> <br /> Master in Computer Science </span>
                <p className="introPara">I am a skilled web page builder with experience in creating <br />visually appealing and user friendly websites.</p>
                <p className="introPara">I am a skilled web page builder with experience in creating <br />visually appealing and user friendly websites.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg' />Hire Me</button> </Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;