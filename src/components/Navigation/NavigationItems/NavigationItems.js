import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const NavigationItems = () =>
    <ul className={classes.NavigationItems}>
        <NavigationItem>Home</NavigationItem>
        <NavigationItem>About</NavigationItem>
        <NavigationItem>Experience</NavigationItem>
        <NavigationItem>Skills</NavigationItem>
        <NavigationItem>Contact</NavigationItem>
    </ul>

export default NavigationItems;