import { IoMdHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";


function Sidebar (){
    return(
        <aside class="w-40 bg-gray-100 text-slate-700 text:sm min-h-screen flex flex-col">
        <nav class="flex-1 mt-4">
            <ul>
                <li>
                    <a href="#" class="flex items-center p-3 hover:rounded-lg hover:bg-gray-300">
                        <IoMdHome className="text-sm"/>

                        <span class="ml-3 text-sm">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-3 hover:rounded-lg hover:bg-gray-300">
                        <SiYoutubeshorts className="text-sm"/>
                        <span class="ml-3 text-sm">Shorts</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-3 hover:rounded-lg hover:bg-gray-300">
                    <MdSubscriptions className="text-sm"/>
                        <span class="ml-3 text-sm">Subscriptions</span>
                    </a>
                </li>
            </ul>
        </nav>
    </aside>

    )
} 

export default Sidebar