import React from 'react';

const NavigationItem = props =>
    <li>
        <a  className={props.className} 
            href={props.link}
        >
            {props.children}
        </a>
    </li>

export default NavigationItem;