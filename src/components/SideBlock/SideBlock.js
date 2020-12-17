import React from 'react';

import SectionIcon from './SectionIcon/SectionIcon';
import classes from './SideBlock.module.css';

const SideBlock = (props) =>
    <div className={classes.sideblock}>
        <SectionIcon 
            iconFileLocation={props.iconFileLocation} 
            iconDimensions={props.iconDimensions}
        />
    </div>

export default SideBlock;