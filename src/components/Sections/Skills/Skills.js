import React from 'react';

const Skills = props =>
    <div className={props.classNames.section}>
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