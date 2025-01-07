import useMenuState from "@/contexts/navMenu";  
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Suggestion from "../suggestions/Suggestion";
import Sidebar from "../../components/Sidebar/Sidebar"
function Feed()
{
  const baseURL = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL || 'https://yt-clone-backend-pi.vercel.app';
    const {menuState} = useMenuState();
    const [feed, setFeed] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
      try {
        
          const videos = await axios.get(`${baseURL}/api/v1/videos/get-videos`);

          //console.log(videos);
          
          setFeed(videos.data.data.videos)
        }

        

       catch (error) {
          console.log(error);
          
      }
    }

      fetchData();
    }, [])

   // console.log(feed);
    


    return(
        <>
        
        <Suggestion />
        <Sidebar />
    <div className={` ${menuState? 'ml-[100px] md:ml-[230px]': 'ml-[50px] md:ml-[80px]'} text-white bg-[#0F0F0F] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-5 overflow-hidden gap-1 text-center mt-20 transition-ml duration-200 ease-in-out`}>
      {feed.map((video) => (

      <div className="md:rounded-xl rounded:sm flex-col p-4 shadow" key={video._id}>
      <div className="w-full">
          <Link to={`/watch/${video._id}`}><img className="w-[340px] h-[190px] rounded-lg md:rounded-2xl" src={video.thumbnail} alt="" /></Link>
      </div>
      <div className="mt-2 text-left">
          <div className="flex">
            <img className="rounded-full w-8 h-8" src={video.ownerDetails[0].avatar} alt="" />
            <p className="text-[10px] md:text-[13px] p-1 ml-4">{video.title}</p>
          </div>
          <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">{video.ownerDetails[0].fullName}</p>
          <div className="flex">
            <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">{video.views}</p>
            <p className="text-[10px] md:text-sm text-gray-300 ml-4">&bull;  1 months ago</p>
          </div>
      </div>
      </div>
      ))}
</div>
      </>
    )
}

export default Feed;    