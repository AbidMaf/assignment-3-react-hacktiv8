import React from 'react';
import { ImageFrame } from '../atom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './GalleryItem.css';

const LinkToDesign = styled.a`
    display: inline-block !important;
    width: fit-content;
    align-self: flex-start;
    font-size: 1.2rem;
    font-weight: 600;
`;

export default class GalleryItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        return (
            <div className="design-item">
                <ImageFrame thumbnail={ this.props.image } />
                <LinkToDesign href={this.props.url} target='_blank'>{ this.props.title }</LinkToDesign>
            </div>
        )
    }
}