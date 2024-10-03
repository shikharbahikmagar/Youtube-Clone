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

function Watch() {

    const userStatus = useSelector((state) => state.auth.status);
    const user = useSelector((state) => state.auth.userData);
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
              
            }
          }
        
        const getVideo = async() =>{

            try {
                    const video = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/videos/watch/${id}`)
                    setVideoDetails(video.data.data);
                    console.log(video);
                    

            } catch (error) {
                console.log(error);
                
            }

        }

        getVideo();
        fetchData();

    }, [])
    console.log(feed);
    if(videoDetails)
    {
    return (
        
        <div className={`grid grid-cols-12 md:ml-[140px] `}>
            <div className="md:col-span-9 col-span-12">
                <div className='md:block rounded-lg overflow-block'>
                    <Iframe url={videoDetails.video[0].videoFile}
                        width="1280px"
                        className="w-screen md:height-[760px] rounded-2xl flex-auto"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        id=""
                        display="block"
                        position="relative" />
                </div>
                <div>
                    <h1 className="text-white">{videoDetails.video[0].title}</h1>
                </div>
                
                {/* subscribes like share */}
                <div className="flex gap-16 sm:text-xs inline-block mt-8">
                    {/* left part */}
                    <div className="flex gap-4 text-left">
                        <div className="flex gap-4 items-center justify-center">
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
                        <div className="flex gap-4 ml-[45%] justify-center items-center ">
                            <div className="flex text-white gap-4 justify-center items-center bg-neutral-800 rounded-2xl p-1 pl-4 pr-4">
                                <div className="flex gap-2 text-[20px] justify-center items-center ">
                                    <AiOutlineLike className="divide-x"/>
                                    <p className="text-[17px]">1.7k</p>
                                </div>
                                <AiOutlineDislike />
                            </div>
                            <div>
                            <button className="p-1 pl-4 pr-4 text-[20px] bg-neutral-800 text-white rounded-2xl">Share</button>
                            </div>
                            <div>
                            <button className="p-1 pl-4 pr-4 text-[20px] bg-neutral-800 text-white rounded-2xl">save</button>
                            </div>
                        </div>
                </div>

                {/* description */}

                <div className="bg-neutral-800 mt-4 mb-4 rounded-lg text-sm">
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
                <div className="mt-8 text-white font-bold text-xl">
                    <ul className="flex gap-8 items-center">
                        <li>127 Comments</li>
                        <li className="flex gap-2 items-center"><BsFilterLeft size={30} /> <span className="text-sm">Sort by</span></li>
                    </ul>

                </div>

                {/* comment input */}
                <div className="mt-8">
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
                <div className="text-white grid-col-12 mt-20 w-full flex gap-4">
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

            {/* recommended videos */}
            <div className="md:col-span-3 md:block hidden mt-[50px] text-white">
                  {feed.map((video) => (
                    <div className="flex gap-2 mt-2">
                        <div className="w-[250px]">
                            <Link to={`/watch/${video._id}`}><img className="rounded-lg md:rounded-2xl" src={video.thumbnail} alt="" /></Link>
                        </div> 
                        <ul className="text-sm">
                            <li className="">{video.title}</li>
                            <li className="text-gray-400 mt-2">{video.ownerDetails[0].fullName}</li>
                           <ul className="flex gap-2">
                                <li className="text-gray-400 mt-2">{videoDetails.video[0].views} views</li>
                                <li className="text-gray-400 mt-2">&bull; {moment(video.createdAt).fromNow()}</li>
                           </ul>
                        </ul>
                    </div>
                  ))}
            </div>

        </div>
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