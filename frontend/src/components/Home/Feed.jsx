import useMenuState from "@/contexts/navMenu";  
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Suggestion from "../suggestions/Suggestion";

function Feed()
{

    const {menuState} = useMenuState();
    const [feed, setFeed] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
      try {
        
          const videos = await axios.get("http://127.0.0.1:8000/api/v1/videos/get-videos");

          //console.log(videos);
          
          setFeed(videos.data.data.videos)
        }

        

       catch (error) {
        
      }
    }

      fetchData();
    }, [])

   // console.log(feed);
    


    return(
        <>
        
        <Suggestion />
    <div className={` ${menuState? 'ml-[120px] md:ml-[250px]': 'ml-[50px] md:ml-[70px]'} text-white bg-black grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 overflow-hidden gap-2 text-center mt-24 transition-ml duration-200 ease-in-out`}>
      {feed.map((video) => (

      <div className="md:rounded-xl rounded:sm flex-col p-4 shadow" key={video._id}>
      <div className="w-full">
          <Link to={`/watch/${video._id}`}><img className="w-full md:h-56 rounded-lg md:rounded-2xl" src={video.thumbnail} alt="" /></Link>
      </div>
      <div className="mt-2 text-left">
          <div className="flex">
            <img className="rounded-full w-8 h-8" src={video.ownerDetails[0].avatar} alt="" />
            <p className="text-[10px] md:text-[16px] p-1 ml-4">{video.title}</p>
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