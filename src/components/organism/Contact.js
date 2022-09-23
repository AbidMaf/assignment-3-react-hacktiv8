import './Contact.css';
import React from "react";
import { useNavigate} from 'react-router-dom';
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoDribbble
} from 'react-icons/io';
import { ContactMenu } from '../atom';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    directToContact = (path) => {
        const navigate = useNavigate();
        navigate(path);
    } 

    render() {
        return (
            <div className="contact">
                <div className="line"></div>
                <ContactMenu icon={<IoLogoInstagram />} url='https://www.instagram.com/abd_maf/' />
                <ContactMenu icon={<IoLogoGithub />} url='https://github.com/AbidMaf' />
                <ContactMenu icon={<IoLogoLinkedin />} url='https://www.linkedin.com/in/abidmafahim/' />
                <ContactMenu icon={<IoLogoDribbble />} url='https://www.behance.net/abidmafahim' />
                <div className="line"></div>
            </div>
        )
    }
}