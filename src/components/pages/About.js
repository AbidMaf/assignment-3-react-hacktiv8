import { React, Component } from 'react';
import { Outlet } from 'react-router-dom';

class About extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <>
                <p class="about-desc">A student of Universitas Pendidikan Indonesia with Software Engineer major, with currently have interest on <b>Frontend Website</b> and <b>Graphic Design</b>.
                <br/><br/>
                Based on <b>Bandung, Jawa Barat</b> and currently available for freelance and part time job.</p>
                <Outlet />
            </>
        )
    }
}

export default About;