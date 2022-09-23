import React from 'react';
import { Outlet } from 'react-router-dom';

export default class Interest extends React.Component {
    render() {
        return(
            <div className='interest-section'>
                <span>Currently interest in:</span>
                <h1>Graphic Design & Website Frontend</h1>
                <Outlet />
            </div>
        )
    }
}