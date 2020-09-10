import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import MyLogo from '../NavigationItems/MyLogo/MyLogo';

import classes from './TopBar.module.css';

const TopBar = () =>
    <header className={classes.TopBar}>
        <MyLogo>Angel Valdez - Software Developer</MyLogo>
        <NavigationItems />
    </header>

export default TopBar;