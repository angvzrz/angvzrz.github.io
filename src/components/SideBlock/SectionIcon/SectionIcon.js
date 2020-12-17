import React from 'react';

import classes from './SectionIcon.module.css';

const SectionIcon = (props) => {
    return (
    <>
        <img 
            className={classes.sectionIcon} 
            src={props.iconFileLocation} 
            style={{...props.iconDimensions}}
            alt=""
        />
    </>
    )
}

export default SectionIcon;