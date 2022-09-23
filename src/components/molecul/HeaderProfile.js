import React from "react";
import './Header.css';

export default class HeaderProfile extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="image">
                    <div className="image-border"></div>
                </div>
                <div className="short-desc">
                    <h1>Abid Mafahim</h1>
                    <span>Design and Code</span>
                    <div className="arrow-down">                    
                        <svg width="32" height="396" viewBox="0 0 32 396" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 379.5C23.1634 379.5 16 386.663 16 395.5C16 386.663 8.83656 379.5 0 379.5" stroke="#313131" stroke-width="1.5"/>
                            <path d="M16 0L16 391" stroke="#313131" stroke-width="1.5"/>
                        </svg>
                        
                    </div>
                </div>
            </div>
        )
    }
}