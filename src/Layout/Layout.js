import React, { Component } from 'react';
import TopBar from '../components/Navigation/TopBar/TopBar';
import Home from '../components/Sections/Home/Home';
import About from '../components/Sections/About/About';

class Layout extends Component {

    render() {
        return (
            <>
                <TopBar />
                <Home />
                <About />
            </>
        )
    }
}

export default Layout;