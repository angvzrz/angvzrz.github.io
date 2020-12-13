import React from 'react';

import mw_experience from '../../../assets/images/sections_pictures/mw_experience.svg';
import classes from './SectionIcon.module.css';

const SectionIcon = (iconFileLocation) =>
    <>
        <img 
            className={classes.sectionIcon} 
            src={mw_experience} 
            alt="My experience section icon"
        />
    </>

export default SectionIcon;