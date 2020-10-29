import React from 'react';

import classes from './Section.module.css';

const Section = (props) =>
    <div>
        <div className={classes.title}>{props.title}</div>
        <div>{props.content}</div>
    </div>

export default Section;