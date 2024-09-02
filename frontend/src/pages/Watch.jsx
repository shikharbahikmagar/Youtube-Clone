import axios from "axios";
import { useEffect, useState } from "react";
import Iframe from 'react-iframe'
import { useParams } from "react-router-dom";


function Watch() {

    const {id} = useParams();
    //console.log(id);

    const [videoDetails, setVideoDetails] = useState();
    
    useEffect(() => {
        
        const getVideo = async() =>{

            try {
                    const video = await axios.get(`http://127.0.0.1:8000/api/v1/videos/watch/${id}`)
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
        
        <div className="grid grid-cols-1 ml-[100px] flex">
            <div className="grid-8">
            <div className='md:block rounded-3xl overflow-hidden'>
                <Iframe url={videoDetails.video[0].videoFile}
                    autoplay="true"
                    width="800px"
                    height="460px"
                    id=""
                    className=""
                    display="block"
                    position="relative" />
            </div>
            <div>
               <h1 className="text-white"> Comments</h1>
            </div>
            </div>
            <div className="grid-4">
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