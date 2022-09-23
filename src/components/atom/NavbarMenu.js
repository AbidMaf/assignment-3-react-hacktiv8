import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MenuItem = styled(NavLink)`
    animation: 0.7s ease-out 0s 1 navItems;
    opacity: 1;
    visibility: visible;
`;

export default class NavbarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: false,
        }
    }

    componentDidMount() {
        setTimeout(document.getElementById('navItem').style.animation = 'navItems 0.7s ease-out 0s 1 normal none running', 100);
        setTimeout(this.setState({ animate: true }), 1000);
    }

    render() {
        return (
            <li className='nav-menu'>
                <MenuItem id='navItem' className={({ isActive }) => (isActive ? 'active' : console.log(isActive))} to={ this.props.sendTo }>
                    <span>{ this.props.name }</span>
                </MenuItem>
            </li>
        )
    }
}