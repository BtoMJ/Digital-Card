import React from 'react';
import logo from '../../assets/logo_atizapan.png';
import videoLogo from '../../assets/atiVideo.mp4';
// import videoLogo2 from '../../assets/ati.mov';
import ReactPlayer from 'react-player';
import './Header.css';

export const Header = () => {
    return (
        <div className="headerContainer">
            {/* <ReactPlayer 
                url={videoLogo} 
                width='100%' 
                height='100%' 
                playing={true} 
                controls={false} 
                loop={true} 
                style={{backgroundColor:'transparent'}}/> */}
            {/* <img src={logo} alt="logo" /> */}
        </div>
    )
}