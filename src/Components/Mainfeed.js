import React from 'react'
import '../SCSSs/Mainfeed.scss'
import feed from '../staticfiles/feed.gif'
import welcome from '../staticfiles/welcome.png'
function Mainfeed() {
    return (
        <div className="Mainfeed">          
            <div className="imgcontainer"
            style={{backgroundImage: `url(${feed})`,
                    backgroundRepeat: 'repeat'}}> 
                      
                <img id="mainfeedgif" 
                src={feed} alt="feed" />
                <img id="welcome" 
                src={welcome} alt="welcome" />
                <p id="welcometext">
                    Never gonna give you up 
                    Never gonna let you down
                    Never gonna run around and desert you<br/>
                    Never gonna make you cry
                    Never gonna say goodbye
                    Never gonna tell a lie and hurt you
                </p>
            </div>           
        </div>
    )
}

export default Mainfeed
