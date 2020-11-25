import React from 'react';

import SideBlock from '../../SideBlock/SideBlock';
import mw_experience from '../../../assets/images/sections_pictures/mw_experience.svg';
import classes from './Experience.module.css';

const Experience = ({classNames}) =>
    <div className={classNames.section}>
        <h1 className={classNames.title}>Experience</h1>
        <p className={classNames.content}>My tasks on my jobs</p>
        <SideBlock />
        <img className={classes.sectionPicture} src={mw_experience} alt="My experience icon"/>
    </div>

export default Experience;