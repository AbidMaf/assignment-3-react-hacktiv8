import React from "react";
import styled from 'styled-components';

const TempText = styled.h1`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    text-align: center;
`;

export default class Achievements extends React.Component {
    render() {
        return (
            <>
                <TempText>As my life goes on, this page will remembered and fill in</TempText>
            </>
        )
    }
}