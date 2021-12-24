import { useEffect, useState } from 'react';
import '../SCSSs/Navbar.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tedokoji from '../staticfiles/Tedokoji.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Navbar() {
  
    return (
        <div className={`navbar`}>
            <div className="leftnav">
                <img id="Tedokoji"
                 src={Tedokoji} alt="tedokoji"/>
                 
            </div>
            <div className="midnav">
                <a style={{textDecoration: 'none'}}
                href="https://61bfca272671bcb032710b82--cocky-wescoff-0e37c8.netlify.app/">
                <p id="fader">See My Other Projects!</p></a>
            </div>
            <div className="rightnav">
                <div id="iconcontain">               
                    <a href="https://github.com/Tedokoji" target="_blank">
                        <GitHubIcon fontSize='large' id="githubicon"/>
                    </a>
                    <a href="https://www.facebook.com/evergarden.violet.39501" 
                    target="_blank">
                        <FacebookIcon fontSize='large' id="fbicon"/>
                    </a>
                    <a href="https://github.com/Tedokoji" target="_blank">
                        <YouTubeIcon fontSize='large' id="yticon"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
