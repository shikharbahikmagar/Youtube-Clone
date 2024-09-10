import axios from "axios";
import { useEffect, useState } from "react";
import Iframe from 'react-iframe'
import { useParams } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import useMenuState from "@/contexts/navMenu";

function Watch() {

    const {id} = useParams();
    //console.log(id);
    const {menuState} = useMenuState();

    const [videoDetails, setVideoDetails] = useState();
    
    useEffect(() => {
        
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

    }, [])
    //console.log(videoDetails.video[0].videoFile);
    if(videoDetails)
    {
    return (
        
        <div className={`grid grid-cols-12 ml-[140px] `}>
            <div className="col-span-9">
                <div className='md:block rounded-lg overflow-block'>
                    <Iframe url={videoDetails.video[0].videoFile}
                        width="1280px"
                        className="rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        height="760px"
                        id=""
                        display="block"
                        position="relative" />
                </div>
                <div>
                    <h1 className="text-white">{videoDetails.video[0].title}</h1>
                </div>
                
                <div className="flex gap-16 inline-block mt-8">
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
            </div>

            <div className="col-span-3 mt-[100px]">
                    <h1 className="text-white">recommendations</h1>
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