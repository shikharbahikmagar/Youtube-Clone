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

function Header() {
    const {menuState, openState, closeState} = useMenuState();

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
                            <li className=''>
                                <Link to="/" className="size-4"><Hamburger className="" toggled={menuState} toggle={onClickMenu} /></Link>
                            </li>
                            <li>
                                <Link to="/" className=""><img className='w-15 h-3 md:w-30 ml-4 md:h-6' src={log} alt="" /></Link>
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
                                <Link to="/login"><button className='md:p-2 p-1 pl-2 pr-2 md:pl-4 md:pr-4 text-[10px] md:text-lg text-blue-400 rounded-md md:rounded-xl border-1 bg-slate-800'>Sign in</button></Link>
                                
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
    </header>
        
    );
}

export default Header