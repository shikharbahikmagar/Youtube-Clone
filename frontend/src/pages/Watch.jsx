import axios from "axios";
import { useEffect, useState } from "react";
import Iframe from 'react-iframe'
import { useParams } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import useMenuState from "@/contexts/navMenu";
import moment from "moment";
import { BsFilterLeft } from "react-icons/bs";
import { useSelector } from 'react-redux';
import {Link, NavLink} from 'react-router-dom'
import { RxDotsVertical } from "react-icons/rx";

import { IoMdHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidVideos } from "react-icons/bi";
import { ImFire } from "react-icons/im";
import { MdMusicNote } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { BiSolidTrophy } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";

import ReactPlayer from "react-player";

function Watch() {

    const userStatus = useSelector((state) => state.auth.status);
    const user = useSelector((state) => state.auth.userData);
    const [loading, setLoading] = useState(true);
    //console.log(user);
    const [feed, setFeed] = useState([]);
    var firstChar = null;
   if(userStatus){
    firstChar = Array.from(user.fullName)[0];
    //console.log(firstChar);
}

    const {id} = useParams();
    //console.log(id);
    const {menuState} = useMenuState();

    const [videoDetails, setVideoDetails] = useState();
    
    useEffect(() => {

            const fetchData = async () => {
            try {
              
                const RecommendedVideos = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/videos/get-videos`);
      
                //console.log(videos);
                
                setFeed(RecommendedVideos.data.data.videos)
              }
      
              
      
             catch (error) {
              console.log("error fetching the data");
              
            }
          }
        
        const getVideo = async() =>{

            try {
                    const video = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/videos/watch/${id}`)
                    setVideoDetails(video.data.data);
                   // console.log(video);
                    

            } catch (error) {
                console.log("error fetching the data");
                
            }

        }

        getVideo();
        fetchData();

    }, [id])
   // console.log(feed);
    if(videoDetails)
    {
    return (
        <>
       {menuState? (
        <div>
                <aside className="md:w-[240px] hidden md:block md:w-[120px] fixed text-slate-100 bg-[#0F0F0F] text-[8px] md:text:sm min-h-screen flex flex-col transition-w duration-75 ease-in-out z-50">
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
            </div>) : null}
    
        <div className={`grid grid-cols-12 md:ml-[70px] md:mr-[50px] `}>

            {/* video player */}
            <div className="md:col-span-8 col-span-12 mt-[20px]">
                <div className='md:block rounded-lg overflow-block'>
                    <ReactPlayer 
                        className="rounded-xl overflow-hidden"  
                        url={videoDetails.video[0].videoFile}
                        playing={true} // Autoplay the video
                        controls={true} // Show player controls (play, pause, etc.)
                        width="936px" // Make the player full width
                        height="533px" // Set player height
                        muted={false} // You can set muted 
                     />
                </div>
                <div>
                    <h1 className="text-white">{videoDetails.video[0].title}</h1>
                </div>
                
                {/* subscribes like share */}
                <div className="flex gap-16 w-[936px] sm:text-xs inline-block mt-8">
                    {/* left part */}
                    <div className="flex gap-4">
                        <div className="flex gap-4 w-[300px] items-center ">
                                <div className="">
                                    <img className="rounded-full w-14 h-14" src={videoDetails.video[0].ownerDetails[0].avatar} alt="" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-white">{videoDetails.video[0].ownerDetails[0].fullName}</p>
                                    <p className="text-white text-xs">4.5k subscribers</p>
                                </div>
                                <div>
                                    <button className="p-1 pl-4 pr-4 bg-slate-200 rounded-2xl">Subscribe</button>
                                </div>
                            </div>
                        </div>
            
                        {/* right part */}
                        <div className="flex gap-4 ml-[30%] justify-center items-center">
                            <div className="flex text-white gap-4 justify-center items-center bg-neutral-800 rounded-lg p-2 pl-4 pr-4">
                                <div className="flex gap-2 text-[17px] justify-center items-center ">
                                    <AiOutlineLike className="divide-x"/>
                                    <p className="text-[17px]">1.7k</p>
                                </div>
                                <AiOutlineDislike className="text-[17px]"/>
                            </div>
                            <div>
                            <button className="p-2 pl-4 pr-4 text-[17px] bg-neutral-800 text-white rounded-lg">Share</button>
                            </div>
                            <div>
                            <button className="p-2 pl-4 pr-4 text-[17px] bg-neutral-800 text-white rounded-lg">save</button>
                            </div>
                        </div>
                </div>

                {/* description */}

                <div className="bg-neutral-800 w-[936px] mt-4 mb-4 rounded-lg text-sm">
                  <div className="p-[2px]">
                  <div className="text-white flex m-4 gap-4">
                        <p className="">{videoDetails.video[0].views} views</p>
                        <p>{moment(videoDetails.video[0].createdAt).fromNow()}</p>
                    </div>
                    <div>
                        <p className="text-white m-4">{videoDetails.video[0].description}</p>
                    </div>
                  </div>

                </div>

                {/* comments and filter */}
                <div className="mt-8 text-white w-[936px] font-bold text-xl">
                    <ul className="flex gap-8 items-center">
                        <li>127 Comments</li>
                        <li className="flex gap-2 items-center"><BsFilterLeft size={30} /> <span className="text-sm">Sort by</span></li>
                    </ul>

                </div>

                {/* comment input */}
                <div className="mt-8 w-[936px]">
                    <ul className="flex items-center gap-4">
                        <li>
                            <Link to={ userStatus? '/profile' : '/login'}><button className={` text-[10px] md:text-lg  ${ userStatus? 'rounded-full text-white' : 'rounded-md md:rounded-full text-blue-400 md:p-2 p-1 pl-2 pr-2 md:pl-4 md:pr-4' } border-1 bg-slate-800`}>{ userStatus? <img className='rounded-full w-12 h-12' src={user.avatar} alt="" /> : "lo" }</button></Link> 
                        </li>
                        <li className="w-full"><input type="text" placeholder="Add a comment..." className="text-white border-b-[1px] focus:outline-none  border-slate-300 focus:border-b-[3px] w-full bg-transparent "/></li>
                    </ul> 
                    <ul className="text-white text-sm flex gap-4 items-center float-right mt-2">
                        <li><button>Cancel</button></li>
                        <li><button className="bg-gray-800 p-2 rounded-xl">Comment</button></li>
                    </ul>                   
                </div>


                {/* comments */}
                <div className="text-white w-[936px] grid-col-12 mt-20 w-full flex gap-4">
                    <div className="col-span-2"> 
                        <Link to={ userStatus? '/profile' : '/login'}><button className={` text-[10px] md:text-lg  ${ userStatus? 'rounded-full text-white' : 'rounded-md md:rounded-full text-blue-400 md:p-2 p-1 pl-2 pr-2 md:pl-4 md:pr-4' } border-1 bg-slate-800`}>{ userStatus? <img className='rounded-full w-12 h-12' src={user.avatar} alt="" /> : "lo" }</button></Link> 
                    </div>
                    <ul className="col-span-8">
                        <li className="text-sm">@username <span className="text-xs text-gray-400">1 hour ago</span></li>
                        <li className="pt-2 text-sm">
                            Pinned by Free Documentary to Kathmandu, destined for luxurious pharmacies in Hong Kong.@FreeDocumentary
                            6 days ago (edited)
                            Every spring in remote Nepal, tens of thousands of villagers embark on a perilous trek to the Himalayas to collect Yarsagumba, a rare caterpillar fungus worth up to $60,000 per kilo in China due to its medicinal properties. Suga Lal and his family leave their meager fields to join the Yarsagumba pickers, facing the challenge of finding this hidden treasure high in the mountains. Meanwhile, Dhanchandra, an agent for a wealthy dealer in Kathmandu, travels between camps with cash to buy the best specimens, risking robbery along the way. The harvested fungus is escorted by soldiers  </li>
                        <li className="pt-2 flex items-center gap-2">
                            <AiOutlineLike size={20} /><span className="text-xs text-gray-400">26</span>
                            <AiOutlineDislike size={20} />
                        </li>
                    </ul>
                    <ul className="items-center col-span-2">
                        <li className=""><RxDotsVertical  size={20}/></li>
                    </ul>
                </div>
            </div>
            {/* video player end */}

            {/* recommended videos */}
            <div className="md:col-span-4 w-[425px] ml-[30px] md:block hidden mt-[20px] text-white">
                  {feed.map((video) => ( 
                    <div className="grid grid-cols-2 gap-2 mt-2" key={video._id}>
                        <div className="col-span-1">
                            <Link to={`/watch/${video._id}`}><img className="rounded-lg md:rounded-2xl" src={video.thumbnail} alt="" /></Link>
                        </div> 
                        <ul className="text-sm col-span-1">
                            <li className="text-xs">{video.title}</li>
                            <li className="text-gray-400 mt-2">{video.ownerDetails[0].fullName}</li>
                           <ul className="flex gap-2">
                                <li className="text-gray-400 mt-2">{videoDetails.video[0].views} views</li>
                                <li className="text-gray-400 mt-2">&bull; {moment(video.createdAt).fromNow()}</li>
                           </ul>
                        </ul>
                    </div>
                  ))}
            </div>
            {/* recommended videos end */}

        </div>
        </>
    ) } else
    {
        return (
        <div>
            <h1>loading...</h1>
        </div>
    )
}
}

export default Watch; 