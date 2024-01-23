import React from 'react'
import Grid from '../../Assets/Grid22.png'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Lounge = () => {
    useEffect(()=>{Aos.init({duration:2000})},[])
    return (
        <div className='lounge container section'>
            <div className='sectionContainer grid'>
                <div data-aos='fade-down' data-aos-duration='2500' className='imgDiv'>
                    <img className='imagelounge' src={Grid} alt='grid2image'></img>
                </div>
                <div className='textDiv'>
                    <h2 data-aos='fade-down' data-aos-duration='1500'>Unaccompanied Minor Lounge</h2>
                    <div className='grids grid'>
                        <div data-aos='fade-down' data-aos-duration='1500' className='singleGrid'>
                            <span className='gridTitle'>
                                Help Through The airport
                            </span>
                            <p>You can also call airlines from your phone and book a flight ticket to one of your favourites destinations</p>
                        </div>
                        <div data-aos='fade-down' data-aos-duration='1500' className='singleGrid'>
                            <span className='gridTitle'>
                                Chauffer-Drive service
                            </span>
                            <p>You can also call airlines from your phone and book a flight ticket to one of your favourites destinations</p>
                        </div>
                        <div data-aos='fade-down' data-aos-duration='1500' className='singleGrid'>
                            <span className='gridTitle'>
                                Care on the Flight
                            </span>
                            <p>You can also call airlines from your phone and book a flight ticket to one of your favourites destinations</p>
                        </div>
                        <div data-aos='fade-down' data-aos-duration='1500' className='singleGrid'>
                            <span className='gridTitle'>
                                Priority building
                            </span>
                            <p>You can also call airlines from your phone and book a flight ticket to one of your favourites destinations</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Lounge
