import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import MiniCardComponent from './MiniCardComponent';
import Home from './Home';
import Team from './Team';
import Service from './Service';

function ContentComponent(props) {
    const { icon, title, path, ...otherProps } = props;
    if (path == 'Dashboard') {
        return <Home></Home>;
    } else if (path == 'Teams') {
        return <Team></Team>
    } else if (path == 'Services') {
        return <Service></Service>
    }
}

export default ContentComponent;