import React from 'react';

import classes from './Section.module.css';

const Section = props =>
    <div className={[classes.section, props.className].join(" ")}>
        <h1 className={classes.title}>{props.title}</h1>
        <div className={classes.content}>{props.children}</div>
    </div>

export default Section;