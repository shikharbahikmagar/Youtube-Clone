import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import log from '../../assets/log.png'
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { PiCameraPlusFill } from "react-icons/pi";

function Header() {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className="shadow sticky z-50 top-0">
            <nav>
                <ul className="flex justify-between items-center p-1">
                    <li>
                    <ul className='flex gap-4 items-center'>
                   <li>
                        <Link to="/" className=""><Hamburger toggled={isOpen} toggle={setOpen} /></Link>
                    </li>
                    <li>
                        <Link to="/" className=""><img className='w-30 h-14' src={log} alt="" /></Link>
                    </li>
                   </ul>
                    </li>
                    <li>
                        <ul className='flex items-center'>
                            <li><input className='rounded-tl-2xl rounded-bl-2xl border-2 border-slate-400 h-10 w-96' type="text" placeholder='     Search'/></li>
                            <li className='border-2 p-[10px;] rounded-tr-2xl rounded-br-2xl border-slate-400'><Link><CiSearch /></Link></li>
                            <li className='border-2 p-1 rounded-full ml-6 border-slate-400'><Link><FaMicrophone /></Link></li>
                        </ul>
                    </li>
                    <li>
                        <ul className="flex justify-between space-x-4 mr-16 gap-4">
                            <li className='text-3xl'>
                                <Link><IoIosNotifications /></Link>
                            </li>
                            <li className='text-3xl'>
                                <NavLink to="/about"><PiCameraPlusFill /></NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header