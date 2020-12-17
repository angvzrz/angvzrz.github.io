import React from 'react';
import SideBlock from '../../SideBlock/SideBlock';
import mw_experience from '../../../assets/images/sections_icons/mw_experience.svg';

const Contact = props =>
    <div className={props.classNames.section}>
        <h1 className={props.classNames.title}>Contact</h1>
        <p className={props.classNames.content}>My contact information and contact form</p>
        <SideBlock iconFileLocation={mw_experience} iconDimensions={{height: "20%"}}/>
    </div>
    

export default Contact;