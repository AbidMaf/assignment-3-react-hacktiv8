import './SectionMenu.css';
import React from 'react';
import { SectionItem } from '../atom';

export default class SectionMenu extends React.Component {
    render() {
        return (
            <div className="section-menu">
                <SectionItem title='About' path='/Home/About'/>
                <SectionItem title='Skills' path='/Home/Skills' />
                <SectionItem title='Interest' path='/Home/Interest' />
            </div>
        )
    }
}