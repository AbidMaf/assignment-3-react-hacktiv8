import React from "react";
import './ImageFrame.css';
import styled from 'styled-components';

export default class ImageFrame extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const ImageFrame = styled.div`
            &:after {
                background-image: url(${this.props.thumbnail});  
            }
        `;
        return (
            <ImageFrame className="image">
                <div className="image-border"></div>
            </ImageFrame>
        )
    }
}