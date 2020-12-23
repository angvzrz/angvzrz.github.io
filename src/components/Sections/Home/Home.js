import React from 'react';

import classes from './Home.module.scss';
import CanvasAnimation from './CanvasAnimation/CanvasAnimation';
import Section from '../Section/Section';

const Home = () => {
    return (
        <div className={classes.home}>
            <div className={classes.introduction}>
                <h1 className={classes.greeting}>Hello, I'm Angel</h1>
                <p className={classes.offer}>I enjoy building software</p>
                <p className={classes.feature}>I'm a softawre engineer focused on bringing the most well suited solutions</p>
                <a href="#" className={classes.seemoreButton}>See more</a>
            </div>            
            <CanvasAnimation />
        </div>
    )
};

export default Home;