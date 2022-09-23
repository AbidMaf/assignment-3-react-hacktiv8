import React from "react";
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";

export default class ContactMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a className='nav-contact' href={ this.props.url } target='_blank'>
                <IconContext.Provider value={{className:'icon', size:'24px'}}>
                    { this.props.icon }
                </IconContext.Provider>
            </a>
        )
    }
}