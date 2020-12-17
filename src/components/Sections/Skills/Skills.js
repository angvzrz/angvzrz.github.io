import React from 'react';
import SideBlock from '../../SideBlock/SideBlock';

import mw_skills from '../../../assets/images/sections_icons/mw_skills.svg';

const Skills = props =>
    <div className={props.classNames.section}>
        <SideBlock iconFileLocation={mw_skills} iconDimensions={{width: "50%"}}/>
        <h1 className={props.classNames.title}>Skills</h1>
        <div className={props.classNames.content}>
            <p>My main tools and technologies</p>
            <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>GraphQL</li>
            </ul>
        </div>
    </div>

export default Skills;