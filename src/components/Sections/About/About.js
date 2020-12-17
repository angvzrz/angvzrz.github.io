import React from 'react';

import SideBlock from '../../SideBlock/SideBlock';

import profilePic from '../../../assets/images/profile_pic.jpeg';
import classes from './About.module.css';


const About = (props) =>
    <div className={props.classNames.section}>
        <SideBlock iconFileLocation={profilePic}/>
        <h1 className={props.classNames.title}>About</h1>
        <p className={props.classNames.content}>
            I am a Software Developer who is all about tackling into data 
            and graphics problems in the best suitable way.
        </p>
    </div>
    

export default About;