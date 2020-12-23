import React from 'react';

import mw_experience from '../../../assets/images/sections_icons/mw_experience.svg';

import SideBlock from '../../SideBlock/SideBlock';
import Section from '../Section/Section';

const Experience = () => {
    return (
        <Section title="Experience"> 
            <h2>Samsung Research Tijuana</h2>
            <div>Software Engineer 2019 - Now</div>
            <ul>
                <li>
                    Provide development and technical support as well as
                    Operating management for North-America TV partners
                </li>
                <li>
                    Tools building for speed up processes of the job
                </li>
                <li>
                    Contribution to side project which launched to the market
                </li>
            </ul>
            <h2>ITEA Technology</h2>
            <div>Software Developer Intern 2018 - 2019</div>
            <ul>
                <li>Develop android application for a client</li>
                <li>Design project architecture</li>
                <li>Discuss with the client for feedback and more ideas</li>
            </ul>
            {/* <SideBlock iconFileLocation={mw_experience} iconDimensions={{height: "20%"}}/> */}
        </Section>
    )
}

export default Experience;