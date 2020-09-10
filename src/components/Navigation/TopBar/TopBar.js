import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import MyLogo from '../NavigationItems/MyLogo/MyLogo';

const TopBar = () =>
    <header>
        <MyLogo>Angel Valdez - Software Developer</MyLogo>
        <NavigationItems />
    </header>

export default TopBar;