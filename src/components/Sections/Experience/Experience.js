import React from 'react';
import SectionIcon from '../../SideBlock/SectionIcon/SectionIcon';

import SideBlock from '../../SideBlock/SideBlock';

const Experience = ({classNames}) =>
    <div className={classNames.section}>
        <h1 className={classNames.title}>Experience</h1>
        <p className={classNames.content}>My tasks on my jobs</p>
        <SideBlock />
        <SectionIcon />
    </div>

export default Experience;