import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';

import classes from './MyLogo.module.css';

const MyLogo = props => 
    <NavigationItem className={classes.Logo}>{props.children}</NavigationItem>

export default MyLogo;