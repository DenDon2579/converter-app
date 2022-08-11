import React from 'react';
import Content from './content/Content';
import classes from './Layout.module.scss';

const Layout: React.FC = () => {
    return (
        <div className={classes.wrapper}>
            <Content />
        </div>
    );
};
export default Layout;
