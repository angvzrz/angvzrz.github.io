import React from 'react';

import SideBlock from '../../SideBlock/SideBlock';

import profilePic from '../../../assets/images/profile_pic.jpeg';
import classes from './About.module.css';
import Section from '../Section/Section';


const About = () =>
    <Section title="About">
        {/* <SideBlock iconFileLocation={""}/> */}
        <p>
            I am a Software Developer who is all about tackling into data 
            and graphics problems in the best suitable way.
        </p>
    </Section>
    

export default About;