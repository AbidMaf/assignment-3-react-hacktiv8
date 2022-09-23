import React from "react";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import '../molecul/SectionMenu.css';

const StyledItem = styled(NavLink)`
    color: rgba(255, 253, 240, 1);
    text-shadow: -1px -1px 0 var(--txtclr),
        1px -1px 0 var(--txtclr),
        -1px 1px 0 var(--txtclr),
        1px 1px 0 var(--txtclr);
    opacity: 1;
    font-size: 42pt;
    transition: 0.5s;
    max-width: 10%;
    font-weight: bold;
    cursor: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='16' cy='16' r='15.5' stroke='%23313131'/%3E%3Ccircle cx='16' cy='16' r='8' fill='%23313131'/%3E%3C/svg%3E%0A"), auto;
    &:hover{
        color: rgba(49, 49, 49, 1);
        text-shadow: none;
        font-weight: bold;
    }
`;

export default class SectionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.name,
            path: this.props.openTo
        }
    }
    
    render () {
        return (
            <StyledItem className={({ isActive }) => (isActive ? 'activeMenu items' : 'items')} to={ this.props.path } style={this.props.customStyle}>{ this.props.title }</StyledItem>
        )
    }
}

SectionItem.defaultProps = {
    customStyle: null
}