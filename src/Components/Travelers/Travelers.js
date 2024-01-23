import React from 'react'
import paris from '../../Assets/Paris.jpg';
import egypt from '../../Assets/Egypt.jpg';
import dubai from '../../Assets/Dubai.jpg';
import zoz from '../../Assets/realimage-2.jpg';
import megz from '../../Assets/megz.jpg'
import hoda from '../../Assets/7oda.jpg'
import amin from '../../Assets/amin.jpg'
import london from '../../Assets/london.jpg';
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Travelers = () => {
    useEffect(()=>{Aos.init({duration:2000})},[])
    return (
        <div className='travelers container section'>
            <div className='sectionContainer'>
                <h2 data-aos='fade-down' data-aos-duration='1000'>Top Travelers this month!</h2>
                <div data-aos='fade-up' data-aos-duration='1000' className='travelersContainer grid'>
                    {/* Single Travelers */}
                    <div className='singleTraveler'>
                        <img src={paris} alt='img' className='destinationImage'></img>
                        <div className='travelersDetails'>
                            <div className='travelerPicture'>
                                <img alt='imm' src={hoda} className='travelImg'></img>
                            </div>
                            <div className='travelerName'>
                                <span className='spantext'>Mahmoud Khaled</span>
                                <p className='ptext'>@7odaElgin</p>
                            </div>
                        </div>
                    </div>
                    {/* Single Travelers */}
                    <div className='singleTraveler'>
                        <img src={dubai} alt='img' className='destinationImage'></img>
                        <div className='travelersDetails'>
                            <div className='travelerPicture'>
                                <img alt='imm' src={megz} className='travelImg'></img>
                            </div>
                            <div className='travelerName'>
                                <span className='spantext'>Ahmed Magdy</span>
                                <p className='ptext'>@Megzoo</p>
                            </div>
                        </div>
                    </div>
                    {/* Single Travelers */}
                    <div className='singleTraveler'>
                        <img src={egypt} alt='img' className='destinationImage'></img>
                        <div className='travelersDetails'>
                            <div className='travelerPicture'>
                                <img alt='imm' src={zoz} className='travelImg'></img>
                            </div>
                            <div className='travelerName'>
                                <span className='spantext'>Ziad Ezzat</span>
                                <p className='ptext'>@ZOZ133</p>
                            </div>
                        </div>
                    </div>
                    {/* Single Travelers */}
                    <div className='singleTraveler'>
                        <img src={london} alt='img' className='destinationImage'></img>
                        <div className='travelersDetails'>
                            <div className='travelerPicture'>
                                <img alt='imm' src={amin} className='travelImg'></img>
                            </div>
                            <div className='travelerName'>
                                <span className='spantext'>Ahmed Amin</span>
                                <p className='ptext'>@Amin_8</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Travelers
