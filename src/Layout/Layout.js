import React, { Component } from 'react';
import TopBar from '../components/Navigation/TopBar/TopBar';
import Home from '../components/Sections/Home/Home';

class Layout extends Component {

    render() {
        return (
            <>
                <TopBar />
                <Home / >
            </>
        )
    }
}

export default Layout;