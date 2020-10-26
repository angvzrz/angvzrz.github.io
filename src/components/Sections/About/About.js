import React from 'react';

import profilePic from '../../../assets/images/profile_pic.jpeg';
import classes from './About.module.css';


const About = () =>
    <div className={classes.About}>
        <img src={profilePic} alt=""/>
        <p>
            I am a Software Developer who is all about tackling into data 
            and graphics problems in the best suitable way.
        </p>
    </div>
    

export default About;