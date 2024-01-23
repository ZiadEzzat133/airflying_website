import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Subscribers = () => {
    useEffect(()=>{Aos.init({duration:2000})},[])
    return (
        <div className='section subscribe'>
            <div data-aos='fade-up' data-aos-duration='2500' className='sectionContainer container'>
                <h2>Subscribe Newsletters & get latest News</h2>
                <div className='inputDiv flex'>
                    <input className='myinput' type='text' placeholder='Enter Your Email Address' />
                    <button className='btn'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribers
