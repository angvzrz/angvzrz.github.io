import React from 'react';

import classes from './Home.module.css';
import CanvasAnimation from './CanvasAnimation/CanvasAnimation';

const Home = () => {
    return (
        <div>
            <div className={classes.greeting}>
                <p style={{fontWeight: "bold"}}>Hello, I'm Angel</p>
                <p>I enjoy building software</p>
                <p>I'm a softawre engineer focused on bringing the most well suited solutions</p>
                <button className={classes.seemoreButton}>See more</button>
            </div>            
            <CanvasAnimation />
        </div>
    )
};

export default Home;