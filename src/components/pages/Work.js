import React from 'react';
import './Work.css';
import { ImageFrame } from '../atom'
import { GalleryItem } from '../molecul'
import image1 from '../../assets/Image-1.png';
import image2 from '../../assets/Image-2.png';
import image3 from '../../assets/Image-3.png';

export default class Work extends React.Component {
    render() {
        return (
            <div className="container-work">
                <div className="display-section">
                    <h2>Recent Design Project</h2>
                    <div className="design-preview">
                        <GalleryItem image={image1} title={'Organization UI Profile Website'} url={'https://www.behance.net/gallery/130661761/Organization-Profile-Website-UI'} />
                        <GalleryItem image={image2} title={'MABIM RPL 2021 Logofolio'} url={'https://www.behance.net/gallery/124168115/MABIM-RPL-2021-Logofolio'} />
                        <GalleryItem image={image3} title={'Skip On You Poster'} url={'https://www.behance.net/gallery/130248873/Skip-On-You-Poster'} />
                    </div>
                </div>
            </div>
        )
    }
}