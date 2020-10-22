import React from 'react';

import classes from './MyLogo.module.css';

const MyLogo = props => 
    <div className={classes.Logo}>{props.children}</div>

export default MyLogo;