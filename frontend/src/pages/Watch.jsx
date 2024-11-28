import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import useMenuState from "@/contexts/navMenu";
import moment from "moment";
import { BsFilterLeft } from "react-icons/bs";
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
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
import { PiShareFatBold } from "react-icons/pi"; 
import ReactPlayer from "react-player";
import { LiaDownloadSolid } from "react-icons/lia";
import { useForm } from "react-hook-form";

function Watch() {


   
    const [accessToken, setAccessToken] = useState(); 

    const userStatus = useSelector((state) => state.auth.status);
    const user = useSelector((state) => state.auth.userData);

    //console.log(user);
    const [feed, setFeed] = useState([]);

    const {id} = useParams();
    //console.log(id);
    const {menuState} = useMenuState();

    const [videoDetails, setVideoDetails] = useState();

    const [comments, setComments] = useState([]);

    const {register, reset, handleSubmit, formState: { errors },} = useForm();
    
    const onSubmit = async (data) => {

        const newComment =  {
            video_id: id,
            comment: data.comment,
        }
            try {

                const createComment = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/comments/create-comment`, newComment, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                      },       
                })

                setComments((prevComments) => [newComment, ...prevComments])

               console.log(createComment);
                    

            } catch (error) {
                console.log(error);
                
            }
            reset()
        
    }

    useEffect(() => {

            const fetchData = async () => {
            try {
              
                const RecommendedVideos = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/videos/get-videos`);
      
                //console.log(videos);
                
                setFeed(RecommendedVideos.data.data.videos)
              }
      
              
      
             catch (error) {
              console.log(error);
              
            }
          }
        
        const getVideo = async() =>{

            try {
                    const video = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/videos/watch/${id}`)
                    setVideoDetails(video.data.data);
                   // console.log(video);
                    

            } catch (error) {
                console.log(error);
                
            }

        }

        const getComments = async() => {
           
            try {
                const fetchedComments = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/comments/get-comments/${id}`)
                setComments(fetchedComments.data.data.comments);
            } catch (error) {
                console.log(error);
                
            }
        }

        const LoggedUser = JSON.parse(localStorage.getItem("LoggedInUser"))

        if(LoggedUser)
        {
            setAccessToken(LoggedUser.accessToken)
        }
        
        
        getVideo();
        fetchData();
        getComments()

    }, [id])
    console.log(comments);
    // if (!Array.isArray(comments)) {
    //     console.log("not an array");
    //      // or a loading spinner
    //   }
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
            <div className="md:col-span-8 3xl:col-span-9 col-span-12 mt-[20px]">
                <div className='md:block rounded-lg md:w-[auto] h-[auto] 3xl:h-[720px] overflow-block'>
                    <ReactPlayer 
                        className="rounded-2xl w-full h-auto overflow-hidden"  
                        url={videoDetails.video[0].videoFile}
                        width="100%"
                        height="auto"
                        playing={true} // Autoplay the video
                        controls={true} // Show player controls (play, pause, etc.)
                        muted={false} // You can set muted 
                     />
                </div>
                <div>
                    <h1 className="text-white">{videoDetails.video[0].title}</h1>
                </div>
                
                {/* subscribes like share */}
                <div className="flex md:gap-16 w-[auto] 2xl:w-[auto] text-xs inline-block mt-8">
                    {/* left part */}
                    <div className="flex gap-4">
                        <div className="flex lg:gap-4 items-center ">
                                <div className="">
                                    <img className="rounded-full w-8 h-8 lg:w-14 lg:h-14" src={videoDetails.video[0].ownerDetails[0].avatar} alt="" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-white text-xs xl:text-[17px]">{videoDetails.video[0].ownerDetails[0].fullName}</p>
                                    <p className="text-white text-xs">4.5k subscribers</p>
                                </div>
                                <div>
                                    <button className="p-1 pl-4 pr-4 bg-slate-200 text-xs xl:text-[15px] rounded-2xl">Subscribe</button>
                                </div>
                            </div>
                        </div>
            
                        {/* right part */}
                        <div className="flex lg:gap-4 justify-center right-0 items-center">
                            <div className="flex text-white gap-4 justify-center items-center bg-neutral-800 rounded-l-2xl p-2 pl-4 pr-4">
                                <div className="flex gap-2 text-[17px] justify-center items-center ">
                                    <AiOutlineLike/>
                                    <p className="xl:text-[14px] text-xs xl:font-semibold">1.7k</p>
                                </div>
                               
                            </div>
                            <div className="flex text-white justify-center items-center bg-neutral-800 rounded-r-2xl -ml-6  p-2 pl-4 pr-4">
                                <AiOutlineDislike className="text-xs lg:text-[17px]"/>
                            </div>
                            
                            <div>
                            <button className="p-2 pl-4 pr-4 text-xs xl:text-[15px] bg-neutral-800 text-white flex rounded-2xl"><PiShareFatBold /> <span className="ml-2">Share</span></button>
                            </div>
                            <div>
                            <button className="p-2 pl-4 pr-4 text-xs xl:text-[15px] bg-neutral-800 text-white rounded-2xl flex"><LiaDownloadSolid /> <span className="ml-2">Download</span></button>
                            </div>
                        </div>
                </div>

                {/* description */}

                <div className="bg-neutral-800 w-[auto]  2xl:w-[auto] mt-4 mb-4 rounded-lg text-sm">
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
                <div className="mt-8 text-white md:w-[auto]  2xl:w-[auto] font-bold text-xl">
                    <ul className="flex gap-8 items-center">
                        <li>127 Comments</li>
                        <li className="flex gap-2 items-center"><BsFilterLeft size={30} /> <span className="text-sm">Sort by</span></li>
                    </ul>

                </div>

                {/* comment input */}
                <div className="mt-8 md:w-[auto]  2xl:w-[auto]" >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ul className="flex items-center gap-4">
                        <li>
                            <Link to={ userStatus? '/profile' : '/login'}><button className={` text-[10px] md:text-lg  ${ userStatus? 'rounded-full text-white' : 'rounded-md md:rounded-full text-blue-400 md:p-2 p-1 pl-2 pr-2 md:pl-4 md:pr-4' } border-1 bg-slate-800`}>{ userStatus? <img className='rounded-full w-12 h-12' src={user.avatar} alt="" /> : "lo" }</button></Link> 
                        </li>
                        <li className="w-full">
                        <input type="text" placeholder="Add a comment..." className="text-white border-b-[1px] focus:outline-none  border-slate-300 focus:border-b-[3px] w-full bg-transparent " {...register("comment", {
                            required: "comment is required"})}/>
                        {errors.name && <p>{errors.name.message}</p>}
                            </li>
                    </ul> 
                    <ul className="text-white text-sm flex gap-4 items-center float-right mt-2">
                        <li><button>Cancel</button></li>
                        <li><button type="submit" className="bg-gray-800 p-2 rounded-xl">Comment</button></li>
                    </ul>  
                    </form>                 
                </div>


                {/* comments */}
                {comments?.map((comment) => (
               <>
            <div className="text-white grid-col-12 key={comment?._id}  mt-20 w-full flex gap-4">
                    <div className="col-span-2"> 
{ <img className='rounded-full w-12 h-12' src={comment.ownerDetails[0].avatar} alt="" /> }
                    </div>
                    <div className="col-span-8 w-full">
                        <div className="text-sm" >@{comment.ownerDetails[0].username} <span className="text-xs text-gray-400">{moment(comment.createdAt).fromNow()}</span></div>
                        <div className="pt-2 text-sm w-full">
                            { comment.comment} </div>
                        <div className="pt-2 flex items-center gap-2">
                            <AiOutlineLike size={20} /><span className="text-xs text-gray-400">{comment.like_count}</span>
                            <AiOutlineDislike size={20} />
                        </div>
                    </div>
              <div className="items-center flex col-span-2">
                  <div className="justify-center"><RxDotsVertical  size={20}/></div>
              </div>
                 </div>
               </>
                 ))}
            </div>
            {/* video player end */}

            {/* recommended videos */}
            <div className="md:col-span-4 3xl:col-span-3 md:w-[425px] 2xl:mr-[100px] md:ml-[30px] 2xl:ml-[1] md:block hidden mt-[20px] text-white">
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