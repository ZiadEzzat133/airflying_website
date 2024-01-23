import React from 'react'
import logo from '../../Assets/logo_updated.png'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
    useEffect(()=>{Aos.init({duration:2000})},[])
    return (
        <div className='footer'>
            <div className='sectionContainer container grid'>
                <div className='gridOne'>
                    <div className='logoDiv'>
                
                    </div>
                    <p>Your Mind Should Be Stronger Than Your Feelings, Fly! </p>
                    <div className='flex socialIcon'>
                        <a target='blank' href='https://www.linkedin.com/in/ziad-elsamadony-aa6293233'><AiFillLinkedin className='icon' /></a>
                        <a target='blank' href='https://www.facebook.com/ziad.elsamadony?mibextid=ZbWKwL'><BsFacebook className='icon' /></a>
                    </div>
                </div>
                <div className='footerLinks'>
                    <span className='linkTitle'>Information</span>
                    <li>
                        <a className='mya' href='/'>Home</a>
                    </li>
                    <li>
                        <a className='mya' href='/'>Explore</a>
                    </li>
                    <li>
                        <a className='mya' href='/'>Flight Status</a>
                    </li>
                    <li>
                        <a className='mya' href='/'>Travel</a>
                    </li>
                    <li>
                        <a className='mya' href='/'>Check-in</a>
                    </li>
                    <li>
                        <a className='mya' href='/'>Manage Your Booking</a>
                    </li>
                </div>
                <div className='footerLinks'>
                    <span className='linkTitle'>Quick Guide</span>
                    <li>
                        <a className='mya' href='/'>FAQ</a>
                    </li>
                    <li>
                        <a className='mya' href='/'>How To</a>
                    </li>
                    <li>
                        <a className='mya' href='/'>Features</a>
                    </li>
                    <li>
                        <a className='mya' href='/'>Baggage</a>
                    </li>
                    <li>
                        <a className='mya' href='/'>Route Map</a>
                    </li>
                    <li>
                        <a className='mya' href='/'>Our Coummunites</a>
                    </li>
                </div>
                <div className='footerLinks'>
                    <span className='linkTitle'>About</span>
                    <li>
                        <a className='mya' href='/'>Chauffer</a>
                    </li>
                    <li>
                        <a className='mya' href='/'>Our Partners</a>
                    </li>
                    <li>
                        <a className='mya' href='/'>Destination</a>
                    </li>
                    <li>
                        <a className='mya' href='/'>Carrer</a>
                    </li>
                    <li>
                        <a className='mya' href='/'>Transportaion</a>
                    </li>
                    <li>
                        <a className='mya' href='/'>Programming Rules</a>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Footer
