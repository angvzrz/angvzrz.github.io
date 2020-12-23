import React from 'react';
import SideBlock from '../../SideBlock/SideBlock';

import mw_skills from '../../../assets/images/sections_icons/mw_skills.svg';
import Section from '../Section/Section';

const Skills = props =>
    <Section title="Skills" >
        {/* <SideBlock iconFileLocation={mw_skills} iconDimensions={{width: "50%"}}/> */}
        <div>
            <p>My main tools and technologies</p>
            <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>GraphQL</li>
            </ul>
        </div>
    </Section>

export default Skills;