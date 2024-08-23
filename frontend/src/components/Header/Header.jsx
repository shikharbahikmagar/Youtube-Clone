import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import log from '../../assets/log.png'
import logo from '../../assets/logo.png'
import {Input} from '@/components'
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { PiCameraPlusFill } from "react-icons/pi";
import { FaEllipsisVertical } from "react-icons/fa6";
import useMenuState from '@/contexts/navMenu';
import { useSelector } from 'react-redux';

function Header() {
    const {menuState, openState, closeState} = useMenuState();
    const userStatus = useSelector((state) => state.auth.status);
    const user = useSelector((state) => state.auth.userData);
    //console.log(user);
    var firstChar = null;
   if(userStatus){
    firstChar = Array.from(user.fullName)[0];
    //console.log(firstChar);
}
    
    

   const onClickMenu = () => {

        if(menuState){
            closeState();
        }else{
            openState();
        }
    }

    return (
    <header className="shadow sticky z-50 top-0 bg-neutral-950 flex-col text-white">
            <nav>
                <ul className="flex justify-between items-center align-center">
                    <li className=''>
                        <ul className='flex items-center'>
                            <li className='ml-2'>
                                <Link to="/" className=""><Hamburger size={20} toggled={menuState} toggle={onClickMenu} /></Link>
                            </li>
                            <li>
                                <Link to="/" className=""><img className='w-15 h-2 md:w-31 ml-5 md:h-5' src={log} alt="" /></Link>
                            </li>
                        </ul>
                    </li>

                    <li className=''>
                        <ul className='flex items-center'>
                            <li className=''><input className='lg:max-w-96 lg:w-96 md:indent-6 indent-3 border rounded-tl-2xl  focus:outline-none focus:border-sky-500 rounded-bl-2xl border-1 border-slate-400 h-[30px] text-[12px] md:text-sm text-slate-600' type="text" placeholder='Search'/></li>
                            <li className='border  p-[6.1px;] rounded-tr-2xl rounded-br-2xl border-slate-400 pl-4 pr-4'><Link><CiSearch /></Link></li>
                            <li className='border bg-slate-800 p-1 hidden md:block rounded-full ml-6 border-slate-400'><Link><FaMicrophone /></Link></li>
                        </ul>
                    </li>

                    <li className=''>
                        <ul className="md:flex flex justify-between items-center md:space-x-4 md:mr-16 md:gap-4">
                            <li className='text-2xl hidden md:block'>
                                <Link><IoIosNotifications /></Link>
                            </li>
                            <li className='text-2xl hidden md:block'>
                                <NavLink to="/about"><PiCameraPlusFill /></NavLink>
                            </li>
                            <li className='md:hidden block text-[12px] md:text-2xl items-right'>
                                <Link><FaEllipsisVertical /></Link>
                            </li>
                            
                            <li>
                                <Link to={ userStatus? '/profile' : '/login'}><button className={` text-[10px] md:text-lg  ${ userStatus? 'rounded-full text-white' : 'rounded-md md:rounded-xl text-blue-400 md:p-2 p-1 pl-2 pr-2 md:pl-4 md:pr-4' } border-1 bg-slate-800`}>{ userStatus? <img className='rounded-full w-12 h-12' src={user.avatar} alt="" /> : "Sign In" }</button></Link> 
                            </li>
                    
                        </ul>
                    </li>
                </ul>
            </nav>
    </header>
        
    );
}

export default Header