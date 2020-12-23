import React, { Component } from 'react';
import TopBar from '../components/Navigation/TopBar/TopBar';
import Home from '../components/Sections/Home/Home';
import About from '../components/Sections/About/About';
import Experience from '../components/Sections/Experience/Experience';
import Skills from '../components/Sections/Skills/Skills';
import Contact from '../components/Sections/Contact/Contact';

import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <div className={classes.layout}>
                <TopBar/>
                <Home/>
                <About/>
                <Experience/>
                <Skills/>
                <Contact/>
            </div>
        )
    }
}

export default Layout;