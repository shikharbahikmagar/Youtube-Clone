import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import useMenuState from "@/contexts/navMenu";
import moment from "moment";
import { BsFilterLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RxDotsVertical } from "react-icons/rx";
import { PiShareFatBold } from "react-icons/pi";
import ReactPlayer from "react-player";
import { LiaDownloadSolid } from "react-icons/lia";
import { useForm } from "react-hook-form";
import  WatchSidebar from "../components/Sidebar/WatchSidebar.jsx";
import { ToastContainer, toast } from "react-toastify";

function Watch() {
  // const userStatus = useSelector((state) => state.auth.status);

  const [userStatus, setUserStatus] = useState(false);

  const [newTempComment, setNewTempComment] = useState();

  //console.log(user);
  const [feed, setFeed] = useState([]);

  const [loggedInUser, setLoggedInUser] = useState({});

  const { id } = useParams();
  //console.log(id);
  const { menuState } = useMenuState();

  const [videoDetails, setVideoDetails] = useState();

  const [comments, setComments] = useState([]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {

    //fetch all the recommended videos
    const fetchData = async () => {
      try {
        const RecommendedVideos = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
          }/api/v1/videos/get-videos`
        );

        //console.log(videos);

        setFeed(RecommendedVideos.data.data.videos);
      } catch (error) {
        console.log(error);
      }
    };

    //get video details
    const getVideo = async () => {
      try {
        const video = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
          }/api/v1/videos/watch/${id}`
        );
        setVideoDetails(video.data.data);
        // console.log(video);
      } catch (error) {
        console.log(error);
      }
    };

    //get comments of watching video
    const getComments = async () => {
      try {
        const fetchedComments = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
          }/api/v1/comments/get-comments/${id}`
        );
        setComments(fetchedComments.data.data.comments);
      } catch (error) {
        console.log(error);
      }
    };


    //get current logged in user to show in comment
    const fetchUser = async () => {
      try {
        await axios
          .get(
            `${
              import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
            }/api/v1/users/current-user`,
            {
              withCredentials: true,
            }
          )
          .then((response) => {
            //  console.log(response.response);
            if (response.status === 200) {
              setLoggedInUser(response.data.data);
              setUserStatus(!userStatus);
              return response.data.data;
            }
          });
      } catch (error) {
        if (error.response && error.response.status !== 401) {
          console.log(error); // Log only other errors
        }
      }
    };

    fetchUser();

    //setTests(comments);
    getVideo();
    fetchData();
    getComments();
    setNewTempComment({});
  }, [id]);
  // console.log(comments);


  //handle comment submit
  const onSubmitComment = async (data) => {
    //const localUser = localStorage.getItem("LoggedInUser");
    const newComment = {
      video_id: id,
      comment: data.comment,
    };

    const newTemporaryComment = {
      comment: data.comment,
      owner_username: loggedInUser.username,
      owner_name: loggedInUser.fullName,
      owner_avatar: loggedInUser.avatar,
    };

    try {
      const createComment = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
        }/api/v1/comments/create-comment`,
        newComment,
        {
          withCredentials: true,
        }
      );

      if (createComment) {
        setComments((prevComments) => [...prevComments]);

        setNewTempComment(newTemporaryComment);
      }
      //setTests(comments);
      //console.log(createComment);
    } catch (error) {
      console.log(error);
    }
    reset();
  };
  // if (!Array.isArray(comments)) {
  //     console.log("not an array");
  //      // or a loading spinner
  //   }
  // console.log(newTempComment);

  //subscribe handler

  const subscribe = async() => {
  
    try {

      // const subscribeData = {
      //   channelId: videoDetails.video[0].ownerDetails[0]._id,
      //   subscriberId: loggedInUser._id,
      // }
      const channelId = videoDetails.video[0].ownerDetails[0]._id;

      const response = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
        }/api/v1/subscriptions/create-subscription/${channelId}`,
        {},
        {
          withCredentials: true,
        }
      );
      console.log(response);

      if(response)
      {
        toast.success("Subscribed successfully");
      }
      
    } catch (error) {
      console.log(error);

      if(error.response.status === 400)
      {
        toast.error("Already Subscribed");
      }
      
    }

}

  const isEmpty = (obj) => obj && Object.keys(obj).length === 0;

  if (videoDetails) {
    return (
      <>
        {menuState ? (
        <WatchSidebar />
        ) : null}
        <ToastContainer />
        <div className={`grid grid-cols-12 md:ml-[70px] md:mr-[50px] `}>
          {/* video player */}
          <div className="md:col-span-8 3xl:col-span-9 col-span-12 mt-[20px]">
            <div className="md:block rounded-lg md:w-[auto] h-[auto] 3xl:h-[720px] overflow-block">
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
                    <img
                      className="rounded-full w-8 h-8 lg:w-14 lg:h-14"
                      src={videoDetails.video[0].ownerDetails[0].avatar}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-white text-xs xl:text-[17px]">
                      {videoDetails.video[0].ownerDetails[0].fullName}
                    </p>
                    <p className="text-white text-xs">4.5k subscribers</p>
                  </div>
                  <div>
                    <button onClick={subscribe} className="p-1 pl-4 pr-4 bg-slate-200 text-xs xl:text-[15px] rounded-2xl">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>

              {/* right part */}
              <div className="flex lg:gap-4 justify-center right-0 items-center">
                <div className="flex text-white gap-4 justify-center items-center bg-neutral-800 rounded-l-2xl p-2 pl-4 pr-4">
                  <div className="flex gap-2 text-[17px] justify-center items-center ">
                    <AiOutlineLike />
                    <p className="xl:text-[14px] text-xs xl:font-semibold">
                      1.7k
                    </p>
                  </div>
                </div>
                <div className="flex text-white justify-center items-center bg-neutral-800 rounded-r-2xl -ml-6  p-2 pl-4 pr-4">
                  <AiOutlineDislike className="text-xs lg:text-[17px]" />
                </div>

                <div>
                  <button className="p-2 pl-4 pr-4 text-xs xl:text-[15px] bg-neutral-800 text-white flex rounded-2xl">
                    <PiShareFatBold /> <span className="ml-2">Share</span>
                  </button>
                </div>
                <div>
                  <button className="p-2 pl-4 pr-4 text-xs xl:text-[15px] bg-neutral-800 text-white rounded-2xl flex">
                    <LiaDownloadSolid /> <span className="ml-2">Download</span>
                  </button>
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
                  <p className="text-white m-4">
                    {videoDetails.video[0].description}
                  </p>
                </div>
              </div>
            </div>

            {/* comments and filter */}
            <div className="mt-8 text-white md:w-[auto]  2xl:w-[auto] font-bold text-xl">
              <ul className="flex gap-8 items-center">
                <li>127 Comments</li>
                <li className="flex gap-2 items-center">
                  <BsFilterLeft size={30} />{" "}
                  <span className="text-sm">Sort by</span>
                </li>
              </ul>
            </div>

            {/* comment input */}
            <div className="mt-8 md:w-[auto]  2xl:w-[auto]">
              <form onSubmit={handleSubmit(onSubmitComment)}>
                <ul className="flex items-center gap-4">
                  <li>
                    <Link to={userStatus ? "/profile" : "/login"}>
                      <button
                        className={` text-[10px] md:text-lg  ${
                          userStatus
                            ? "rounded-full text-white"
                            : "rounded-md md:rounded-full text-blue-400 md:p-2 p-1 pl-2 pr-2 md:pl-4 md:pr-4"
                        } border-1 bg-slate-800`}
                      >
                        {userStatus ? (
                          <img
                            className="rounded-full w-12 h-12"
                            src={loggedInUser.avatar}
                            alt=""
                          />
                        ) : (
                          "lo"
                        )}
                      </button>
                    </Link>
                  </li>
                  <li className="w-full">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="text-white border-b-[1px] focus:outline-none  border-slate-300 focus:border-b-[3px] w-full bg-transparent "
                      {...register("comment", {
                        required: "comment is required",
                      })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                  </li>
                </ul>
                <ul className="text-white text-sm flex gap-4 items-center float-right mt-2">
                  <li>
                    <button>Cancel</button>
                  </li>
                  <li>
                    <button
                      type="submit"
                      className="bg-gray-800 p-2 rounded-xl"
                    >
                      Comment
                    </button>
                  </li>
                </ul>
              </form>
            </div>

            {/* new comment */}
            {!isEmpty(newTempComment) && (
              <>
                <div className="text-white grid-col-12 key={comment?._id}  mt-20 w-full flex gap-4">
                  <div className="col-span-2">
                    {
                      <img
                        className="rounded-full w-12 h-12"
                        src={newTempComment.owner_avatar}
                        alt=""
                      />
                    }
                  </div>
                  <div className="col-span-8 w-full">
                    <div className="text-sm">
                      @{newTempComment.owner_username}{" "}
                      <span className="text-xs text-gray-400">
                        a few seconds ago
                      </span>
                    </div>
                    <div className="pt-2 text-sm w-full">
                      {newTempComment.comment}{" "}
                    </div>
                    <div className="pt-2 flex items-center gap-2">
                      <AiOutlineLike size={20} />
                      <span className="text-xs text-gray-400">0</span>
                      <AiOutlineDislike size={20} />
                    </div>
                  </div>
                  <div className="items-center flex col-span-2">
                    <div className="justify-center">
                      <RxDotsVertical size={20} />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* comments */}

            {comments?.map((comment) => (
              <>
                <div className="text-white grid-col-12 key={comment?._id}  mt-20 w-full flex gap-4">
                  <div className="col-span-2">
                    {
                      <img
                        className="rounded-full w-12 h-12"
                        src={comment.ownerDetails[0].avatar}
                        alt=""
                      />
                    }
                  </div>
                  <div className="col-span-8 w-full">
                    <div className="text-sm">
                      @{comment.ownerDetails[0].username}{" "}
                      <span className="text-xs text-gray-400">
                        {moment(comment.createdAt).fromNow()}
                      </span>
                    </div>
                    <div className="pt-2 text-sm w-full">
                      {comment.comment}{" "}
                    </div>
                    <div className="pt-2 flex items-center gap-2">
                      <AiOutlineLike size={20} />
                      <span className="text-xs text-gray-400">
                        {comment.like_count}
                      </span>
                      <AiOutlineDislike size={20} />
                    </div>
                  </div>
                  <div className="items-center flex col-span-2">
                    <div className="justify-center">
                      <RxDotsVertical size={20} />
                    </div>
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
                  <Link to={`/watch/${video._id}`}>
                    <img
                      className="rounded-lg md:rounded-2xl"
                      src={video.thumbnail}
                      alt=""
                    />
                  </Link>
                </div>
                <ul className="text-sm col-span-1">
                  <li className="text-xs">{video.title}</li>
                  <li className="text-gray-400 mt-2">
                    {video.ownerDetails[0].fullName}
                  </li>
                  <ul className="flex gap-2">
                    <li className="md:text-xs text-gray-400 mt-2">
                      {video.views} views
                    </li>
                    <li className="md:text-xs text-gray-400 mt-2">
                      &bull; {moment(video.createdAt).fromNow()}
                    </li>
                  </ul>
                </ul>
              </div>
            ))}
          </div>
          {/* recommended videos end */}
        </div>
      </>
    );
  } else {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }
}

export default Watch;
