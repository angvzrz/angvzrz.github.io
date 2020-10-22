import React from 'react';

import classes from './NavigationItem.module.css';

const NavigationItem = props =>
    <li>
        <a  className={classes.NavigationItem} href={props.link}>
            {props.children}
        </a>
    </li>

export default NavigationItem;