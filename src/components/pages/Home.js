import './Home.css';
import React from 'react';
import { HeaderProfile, SectionMenu } from '../molecul';
import { Routes, Route } from 'react-router-dom';
import { About, Skills, Interest } from './';

export default class Home extends React.Component {
    render () {
        return (
            <>
                <HeaderProfile />
                <div className="container">
                    <SectionMenu />
                    <div className="desc-section">
                        <Routes>
                            <Route path='/About' element={ <About /> } />
                            <Route path='/Skills' element={ <Skills /> } />
                            <Route path='/Interest' element={ <Interest /> } />
                        </Routes>
                    </div>
                </div>
            </>
        )
    }
}