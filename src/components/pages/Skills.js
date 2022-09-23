import React from "react";
import { Outlet } from 'react-router-dom';

export default class Skills extends React.Component {
    render() {
        return (
            <>
                <div class="skills-list">
                    <div class="skill">
                        <h3>Beginner</h3>
                        <span>level of website development skill</span>
                    </div>
                    <div class="skill">
                        <h3>Intermediate</h3>
                        <span>level of graphic design skill</span>
                    </div>
                    <div class="skill">
                        <h3>Beginner</h3>
                        <span>level of UI/UX skill</span>
                    </div>
                    <div class="skill">
                        <h3>Beginner</h3>
                        <span>level of database engineering skill (MySQL)</span>
                    </div>
                    <div class="skill">
                        <span>Other "need to mention" skills</span><br/>
                        <span><b>PHP, Laravel, Word, MySQL, CSS, Javascript, HTML</b></span>
                    </div>
                </div>
                <Outlet />
            </>
        )
    }
}