import React from 'react'
import video from '../../Assets/video3.mp4'
import photo from '../../Assets/mynewplane2.png'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {
    useEffect(()=>{Aos.init({duration:2000})},[])
    return (
        <div className='home flex container'>
            <div className='mainText'>
                <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-lasting Memories With Us </h1>
            </div>
            <div data-aos='fade-down' data-aos-duration='2500' className='homeImages flex'>
                <div className='videoDiv'>
                    <video src={video} type="video/mp4" autoPlay muted loop className='video'></video>
                </div>
                <img className='plane' alt='myimg' src={photo} />
            </div>
        </div>
    )
}

export default Home
