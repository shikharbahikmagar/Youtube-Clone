import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import log from '../../assets/log.png'
import logo from '../../assets/logo.png'
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
        <header className="shadow sticky z-99 top-0">
            <nav>
                <ul className="flex justify-between items-center align-center">
                    <li className=''>
                        <ul className='flex items-center'>
                            <li>
                                <Link to="/" className="hidden md:block scale-50"><Hamburger toggled={menuState} toggle={onClickMenu} /></Link>
                            </li>
                            <li>
                                <Link to="/" className=""><img className='hidden md:block w-30 h-12' src={log} alt="" /></Link>
                                <Link to="/" className=""><img className='h-12 flex-none md:hidden block lg:hidden' src={logo} alt="" /></Link>
                            </li>
                        </ul>
                    </li>

                    <li className=''>
                        <ul className='flex items-center'>
                            <li className='flex w-auto grow'><input className='indent-6 border rounded-tl-2xl  focus:outline-none focus:border-sky-500 rounded-bl-2xl border-2 border-slate-400 h-[30px] text-sm text-slate-600 min-w-full' type="text" placeholder='Search'/></li>
                            <li className='border-2 p-[6px;] rounded-tr-2xl rounded-br-2xl border-slate-400'><Link><CiSearch /></Link></li>
                            <li className='border-2 p-1 hidden md:block rounded-full ml-6 border-slate-400'><Link><FaMicrophone /></Link></li>
                        </ul>
                    </li>

                    <li className=''>
                        <ul className="md:flex justify-between items-center md:space-x-4 md:mr-16 md:gap-4">
                            <li className='text-2xl hidden md:block'>
                                <Link><IoIosNotifications /></Link>
                            </li>
                            <li className='text-2xl hidden md:block'>
                                <NavLink to="/about"><PiCameraPlusFill /></NavLink>
                            </li>
                            <li className='md:hidden block text-2xl items-right'>
                                <Link><FaEllipsisVertical /></Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header