import { IoMdHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import useMenuState from "@/contexts/navMenu";
import { BiSolidVideos } from "react-icons/bi";
import { ImFire } from "react-icons/im";
import { MdMusicNote } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { BiSolidTrophy } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";

function Sidebar (){
    
    const {menuState} = useMenuState();

    //console.log(menuState);
    
    if(menuState)
    return(
        <aside className="md:w-[220px] hidden md:block md:w-[100px] fixed text-slate-100 bg-[#0F0F0F] text-[8px] md:text:sm min-h-screen flex flex-col transition-w duration-75 ease-in-out z-50">
        <nav className="flex-1 m-2 md:m-4 divide-y divide-gray-600">
            <ul>
                <li>
                    <a href="#" className="flex items-center p-3 hover:rounded-lg hover:bg-gray-300 hover:text-black">
                        <IoMdHome className="text-[10px] md:text-sm"/>

                        <span className="ml-3 md:text-md text-sm">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-3 hover:rounded-lg hover:bg-gray-300 hover:text-black">
                        <SiYoutubeshorts className="text-[10px] md:text-sm"/>
                        <span className="ml-3 md:text-md text-sm">Shorts</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-3 hover:rounded-lg hover:bg-gray-300 hover:text-black">
                    <MdSubscriptions className="text-[10px] md:text-sm"/>
                        <span className="ml-3 md:text-md text-sm">Subscriptions</span>
                    </a>
                </li>
            </ul>

            <ul className="mt-4">
                <li>
                    <a href="#" className="flex items-center p-3 hover:rounded-lg hover:bg-gray-300 hover:text-black">
                        <span className="ml-3 md:text-md text-sm">You</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-3 hover:rounded-lg hover:bg-gray-300 hover:text-black">
                        <SiYoutubeshorts className="text-[10px] md:text-sm"/>
                        <span className="ml-3 md:text-md text-sm">Your channel</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-3 hover:rounded-lg hover:bg-gray-300 hover:text-black">
                    <FaHistory className="text-[10xp] md:text-sm"/>
                        <span className="ml-3 md:text-md text-sm">History</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-3 hover:rounded-lg hover:bg-gray-300 hover:text-black">
                    <BiSolidVideos className="text-[10xp] md:text-sm"/>
                        <span className="ml-3 md:text-md text-sm">Your videos</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-3 hover:rounded-lg hover:bg-gray-300 hover:text-black">
                    <BiSolidLike className="text-[10xp] md:text-sm"/>
                        <span className="ml-3 md:text-md text-sm">Liked videos</span>
                    </a>
                </li>
            </ul>

            <ul className="mt-4">
                <li>
                    <a href="#" className="flex items-center p-3 hover:rounded-lg hover:bg-gray-300 hover:text-black">
                        <span className="ml-3 md:text-md text-sm">Explore</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-3 hover:rounded-lg hover:bg-gray-300 hover:text-black">
                        <ImFire className="text-[10xp] md:text-sm"/>
                        <span className="ml-3 md:text-md text-sm">Trending</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-3 hover:rounded-lg hover:bg-gray-300 hover:text-black">
                    <MdMusicNote className="text-[10xp] md:text-sm"/>
                        <span className="ml-3 md:text-md text-sm">Music</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-3 hover:rounded-lg hover:bg-gray-300 hover:text-black">
                    <SiYoutubegaming className="text-[10xp] md:text-sm"/>
                        <span className="ml-3 md:text-md text-sm">Gaming</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-3 hover:rounded-lg hover:bg-gray-300 hover:text-black">
                    <BiSolidTrophy className="text-[10xp] md:text-sm"/>
                        <span className="ml-3 md:text-md text-sm">Sport</span>
                    </a>
                </li>
            </ul>

            <div className="mt-4 p-4 text-sm text-slate-500">
                <p className="p-2"> About Press Copyright Contact us Creators Advertise Developers</p>
                <p className="p-2">
                Terms Privacy Policy & Safety How YouTube works Test new features</p>

                <p className="p-2">© 2024 Google LLC</p>
            </div>
           
        </nav>
    </aside>

    )
    else
    return (
    <aside className="md:w-[80px]  hidden md:block fixed text-slate-100 bg-[#0F0F0F] text:sm min-h-screen flex flex-col">
    <nav className="flex-1 items-center align-center mt-4">
        <ul className="p-2">
            <li>
                <a href="#" className="flex flex-col align-center items-center p-3 hover:rounded-lg hover:bg-gray-300 hover:text-black">
                    <IoMdHome className="text-md"/>
                    <span className="mt-1 text-[10px]">Home</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex flex-col align-center items-center p-3 hover:rounded-lg hover:bg-gray-300 hover:text-black">
                    <SiYoutubeshorts className="text-md"/>
                    <span className="mt-1 text-[10px]">Shorts</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex flex-col align-center items-center p-3 hover:rounded-lg hover:bg-gray-300 hover:text-black">
                <MdSubscriptions className="text-md"/>
                    <span className="mt-1 text-[10px]">Subscriptions</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex flex-col align-center items-center p-3 hover:rounded-lg hover:bg-gray-300 hover:text-black">
                <BiSolidVideos className="text-md"/>
                    <span className="mt-1 text-[10px]">You</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex flex-col align-center items-center p-3 hover:rounded-lg hover:bg-gray-300 hover:text-black">
                <HiDownload className="text-md"/>
                    <span className="mt-1 text-[10px]">Downloads</span>
                </a>
            </li>
        </ul>
    
    </nav>
</aside>
)
} 

export default Sidebar