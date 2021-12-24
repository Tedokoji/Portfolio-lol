import React from 'react'
import yosuga from '../staticfiles/yosuga.png'
import haru from '../staticfiles/haru.png'
import Nao from '../staticfiles/Nao.png'
import Akira from '../staticfiles/Akira.png'
import Kazuha from '../staticfiles/Kazuha.png'

import '../SCSSs/Middlefeed.scss'
import Sliderone from './Sliderone'
function Middlefeed() {
   
    return (
       <>
        <div className="justyosuga">
            <img src={yosuga} />
        </div>
        <div className="yosugainfos">
            <img src={haru}/>
            <img src={Nao}/>
            <img src={Akira}/>
            <img src={Kazuha}/>
            
        </div>
            <Sliderone/>
        </>
    )
}

export default Middlefeed

