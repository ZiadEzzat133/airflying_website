import React from 'react'
import grid from '../../Assets/grid_images2.png'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Support = () => {
    useEffect(()=>{Aos.init({duration:2000})},[])
    return (
        <div  className='support container section'>
            <div className='sectionContainer'>
                <div className='titlesDiv'>
                    <small className='smallp'>Travel Support</small>
                    <h2>Plan your travel with confidence</h2>
                    <p>Find Help with booking and travel plans,see what to expect along the journey!</p>
                </div>
                <div className='infoDiv grid'>
                    <div className='textDiv grid'>
                        <div data-aos='fade-down' data-aos-duration='1500' className='singleInfo'>
                            <span className='number'>01</span>
                            <h4>Travel Requirments for Dubai</h4>
                            <p className='mp'>Find Help with booking and travel plans, see what to expect aong the journey to your favourite destinations!</p>
                        </div>
                        <div data-aos='fade-down' data-aos-duration='1500' className='singleInfo'>
                            <span className='number colorOne'>02</span>
                            <h4>Chauffer services at your arrival</h4>
                            <p className='mp'>Find Help with booking and travel plans, see what to expect aong the journey to your favourite destinations!</p>
                        </div>
                        <div data-aos='fade-down' data-aos-duration='1500' className='singleInfo'>
                            <span className='number colorTwo'>03</span>
                            <h4>Multi-risk travel insurance</h4>
                            <p className='mp'>Find Help with booking and travel plans, see what to expect aong the journey to your favourite destinations!</p>
                        </div>
                    </div>
                    <div data-aos='fade-down' data-aos-duration='2500' className='imgDiv'>
                        <img  className='myimg' src={grid} alt='gridimages' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support
