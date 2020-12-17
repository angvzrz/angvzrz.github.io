import React from 'react';

import mw_experience from '../../../assets/images/sections_icons/mw_experience.svg';

import SideBlock from '../../SideBlock/SideBlock';

const Experience = ({classNames}) => {
    return (
        <div className={classNames.section}>
            <h1 className={classNames.title}>Experience</h1>
            <p className={classNames.content}>
                Provide development and technical support as well as 
                Operating management for North-America TV partners
            </p>
            <SideBlock iconFileLocation={mw_experience} iconDimensions={{height: "20%"}}/>
        </div>
    )
}

export default Experience;