import { IoMdHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

import useMenuState from "@/contexts/navMenu";


function Sidebar (){
    
    const {menuState} = useMenuState();

    //console.log(menuState);
    
    if(menuState)
    return(
        <aside className="w-40 bg-gray-100 text-slate-700 text:sm min-h-screen flex flex-col">
        <nav className="flex-1 mt-4">
            <ul>
                <li>
                    <a href="#" className="flex items-center p-3 hover:rounded-lg hover:bg-gray-300">
                        <IoMdHome className="text-lg"/>

                        <span className="ml-3 text-sm">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-3 hover:rounded-lg hover:bg-gray-300">
                        <SiYoutubeshorts className="text-lg"/>
                        <span className="ml-3 text-sm">Shorts</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-3 hover:rounded-lg hover:bg-gray-300">
                    <MdSubscriptions className="text-lg"/>
                        <span className="ml-3 text-sm">Subscriptions</span>
                    </a>
                </li>
            </ul>
        </nav>
    </aside>

    )
    else
    return (
    <aside className="w-24 bg-gray-100 text-slate-700 text:sm min-h-screen flex flex-col">
    <nav className="flex-1 items-center align-center mt-4">
        <ul>
            <li>
                <a href="#" className="flex flex-col align-center items-center p-3 hover:rounded-lg hover:bg-gray-300">
                    <IoMdHome className="text-xl"/>
                    <span className="mt-1 text-[12px]">Home</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex flex-col align-center items-center p-3 hover:rounded-lg hover:bg-gray-300">
                    <SiYoutubeshorts className="text-xl"/>
                    <span className="mt-1 text-[12px]">Shorts</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex flex-col align-center items-center p-3 hover:rounded-lg hover:bg-gray-300">
                <MdSubscriptions className="text-xl"/>
                    <span className="mt-1 text-[12px]">Subscriptions</span>
                </a>
            </li>
        </ul>
    </nav>
</aside>
)
} 

export default Sidebar