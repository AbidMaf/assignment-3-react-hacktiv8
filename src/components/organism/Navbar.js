import './Navbar.css';
// import { Link, NavLink } from 'react-router-dom';
import { NavbarMenu } from '../atom';
import React from 'react';

export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div className="nav">
                <ul>
                    <NavbarMenu name="Home" sendTo="/Home" />
                    <NavbarMenu name="Work" sendTo="/Work" /> 
                    <NavbarMenu name="Achievements" sendTo="/Achievements" /> 
                </ul>
            </div>
        )
    }
}