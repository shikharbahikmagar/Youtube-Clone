import React , {useEffect} from 'react'
import axios from 'axios'
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
import VideoUploadModal from '../VideoUploadModal/VideoUploadModal';
import Setting from '../Setting/Setting';
import { Cookie, SpaceIcon } from 'lucide-react';


function Header() {
    const {menuState, openState, closeState} = useMenuState();
    //const userStatus = useSelector((state) => state.auth.status);
    const user = useSelector((state) => state.auth.userData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSettingOpen, setIsSettingOpen] = useState(false);
    const [userStatus, setUserStatus] = useState(false);

    const [loggedInUser, setLoggedInUser] = useState(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openSettingModal = () => setIsSettingOpen(true);
    const closSettingeModal = () => setIsSettingOpen(false);
    //console.log(user);
    var firstChar = null;

    


   const onClickMenu = () => {

        if(menuState){
            closeState();
        }else{
            openState();
        }
    }

    
useEffect(() => {

    const LoggedUser = JSON.parse(localStorage.getItem("LoggedInUser"));

        setLoggedInUser(LoggedUser);
        if(LoggedUser){
            setUserStatus(true);
        }else{
            setUserStatus(false);
        }

    //console.log(LoggedUser.avatar);
    //console.log(loggedInUser);

}, [userStatus]);

// if(userStatus){
//     firstChar = Array.from(loggedInUser.fullname)[0];
//     //console.log(firstChar);
// }

    // console.log(loggedInUser);
    

    

    return (
        <>
    <header className="shadow sticky z-10 top-0 h-[50px] bg-[#0F0F0F] flex-col text-white">
            <nav>
                <ul className="flex justify-between items-center align-center">
                    <li className=''>
                        <ul className='flex items-center'>
                            <li className='ml-4'>
                               <Hamburger size={20} toggled={menuState} toggle={onClickMenu} />
                            </li>
                            <li>
                                <Link to="/" className=""><img className='w-15 h-2 md:w-31 ml-5 md:h-5' src={log} alt="" /></Link>
                            </li>
                        </ul>
                    </li>

                    <li className=''>
                        <ul className='flex items-center'>
                            <li className=''><input className='lg:max-w-96 lg:w-96 md:indent-6 indent-3 border rounded-tl-2xl  focus:outline-none focus:border-sky-500 rounded-bl-2xl bg-[#0F0F0F] border-1 border-slate-700 h-[31px] text-[12px] md:text-sm text-slate-200 bg-slate-950 ' type="text" placeholder='Search'/></li>
                            <li className='border  p-[6.1px;] rounded-tr-2xl rounded-br-2xl border-slate-700 pl-4 pr-4'><Link><CiSearch /></Link></li>
                            <li className='border bg-slate-700 p-1 hidden md:block rounded-full ml-6 border-slate-800'><Link><FaMicrophone /></Link></li>
                        </ul>
                    </li>

                    <li className=''>
                        <ul className="md:flex flex justify-between items-center md:space-x-4 md:mr-16 md:gap-4">
                            <li className='text-2xl hidden md:block'>
                                <Link><IoIosNotifications /></Link>
                            </li>
                            <li className='text-2xl hidden md:block cursor-pointer' onClick={openModal}><PiCameraPlusFill />
                            </li>
                            <VideoUploadModal isOpen={isModalOpen} onRequestClose={closeModal} />
                            <li className='md:hidden block text-[12px] md:text-2xl items-right'>
                                <Link><FaEllipsisVertical /></Link>
                            </li>
                            <Setting isSettingOpen={isSettingOpen} onRequestCloseSetting={closSettingeModal}/>
                            <li>
                               <button className={` text-[10px] md:text-sm ${ userStatus? 'rounded-full text-white' : 'rounded-md md:rounded-md text-blue-400 md:p-1 p-1 pl-2 pr-2 md:pl-4 md:pr-4' } border-1 bg-slate-800`}>{ userStatus? <img className='rounded-full w-8 h-8'  onClick={openSettingModal} src={loggedInUser.avatar} alt="" /> : <Link to="/login"><span>Sign In</span> </Link>  }</button>
                            </li> 
                    
                        </ul>
                    </li>
                </ul>
            </nav>
    </header>
        
        </>
    );
}

export default Header