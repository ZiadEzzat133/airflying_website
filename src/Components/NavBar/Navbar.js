import React, { useEffect } from 'react'
import { useState } from 'react';
import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs'
import { AiOutlineGlobal } from 'react-icons/ai'
import logo from '../../Assets/logo_updated.png'
import { CgMenuGridO } from 'react-icons/cg'
const Navbar = () => {
    const [active, setactive] = useState('navBarMenu');
    const [toggle, setToggle] = useState('none');

    useEffect(() => {
        const handleResize = () => {
            setToggle(window.innerWidth < 768 ? 'toggleIcon' : 'none');
        };

        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);

        // Initial check for screen size on component mount
        handleResize();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const ShowNavBar = () => {
        if (active === 'navBarMenu') {
            setactive('navBarMenu ShowNavBar')
        }
        else {
            setactive('navBarMenu')
        }      
    }
    const[nobg,setnobg] =useState('navbartwo');
    const addcolor = () => {
        if(window.scrollY >=10)
        {
            setnobg('navbartwo navbar_With_Bg');
        }else{
            setnobg('navbartwo');
        }
    }
    window.addEventListener('scroll', addcolor);
    return (
        <div className='navbar flex'>
            <div className='navbarone flex'>
                <div>
                    <SiConsul className='icon' />
                </div>
                <div className=' none flex'>
                    <li className=' myli flex'><BsPhoneVibrate />Support</li>
                    <li className='myli flex'><AiOutlineGlobal />Languages</li>
                </div>
                <div className='atb flex'>
                    <span className='myspan'>Sign In</span>
                    <span className='myspan'>Sign Up</span>
                </div>
            </div>
            <div className={nobg}>
                <div className='logodiv'>
                    <img src={logo} alt='logoplane' className='logo'>
                    </img>
                </div>
                <div className={active}>
                    <ul className='menu flex'>
                        <li onClick={ShowNavBar} className='listItem'>Home</li>
                        <li onClick={ShowNavBar} className='listItem'>About</li>
                        <li onClick={ShowNavBar} className='listItem'>Company</li>
                        <li onClick={ShowNavBar} className='listItem'>Services</li>
                        <li onClick={ShowNavBar} className='listItem'>Projects</li>
                        <button onClick={ShowNavBar} className='btn flex btnOne'>
                            Contact
                        </button>
                    </ul>
                </div>
                <div onClick={ShowNavBar} className={toggle}>
                    <CgMenuGridO className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Navbar