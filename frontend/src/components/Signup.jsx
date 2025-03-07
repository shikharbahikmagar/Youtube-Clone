import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

function Signup() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();


    const api = axios.create({
        baseURL: `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/`, // Base URL
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      


      const signup = async(data) =>  {

            try {
                 console.log(data);

                // const formData = new FormData();
                // formData.append("fullName", data.fullName);
                // formData.append("email", data.email);
                // formData.append("username", data.username);
                // formData.append("password", data.password);
                // formData.append("avatar", data.avatar[0]); // Assuming it's a file input
                // formData.append("coverImage", data.coverImage[0]);

                // console.log(formData);

            const response = await api.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/users/register`, 
                data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if(response)
            {
                // alert("User registered successfully");
                toast.success("User registered successfully");
            }

            console.log(response);
            } catch (error) {
                console.log(error.message);
                
            }
            
            



      }
    // Add your signup logic here


  return (
    <>
    <ToastContainer />
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900 p-4">
      <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-10 transform transition duration-500 hover:scale-[1.01]">
        <div className="text-center mb-8">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mt-4 mb-2">Create Account</h2>
          <p className="text-gray-400">Join the YouTube community</p>
        </div>
        
        <form onSubmit={handleSubmit(signup)} encType="multipart/form-data" className="space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input 
              id="fullName" 
              type="text" 
              className="mt-1 p-3 w-full border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300 outline-none"
              placeholder="Enter your full name" 
              {...register("fullName", {
                required: "Full name is required",
              })}
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
              User Name
            </label>
            <input 
              id="username" 
              type="text" 
              className="mt-1 p-3 w-full border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300 outline-none"
              placeholder="Enter your full name" 
              {...register("username", {
                required: "Full name is required",
              })}
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
          </div>

          <div className='flex space-x-4 grid grid-cols-2'>
          
          <div>
            <label htmlFor="avatar" className="block text-sm font-medium text-gray-300 mb-1">
              Profile Picture
            </label>
            <div className="relative">
              <input 
                id="avatar" 
                type="file" 
                className="hidden"
                {...register("avatar")} 
                onChange={(e) => setValue("avatar", e.target.files[0])}
              />
              <label 
                htmlFor="avatar" 
                className="mt-1 p-3 w-full border border-gray-600 rounded-lg bg-gray-700 text-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-600 transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Choose a file
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="coverImage" className="block text-sm font-medium text-gray-300 mb-1">
              Cover Image
            </label>
            <div className="relative">
              <input 
                id="coverImage" 
                type="file" 
                className="hidden"
                {...register("coverImage")}
                onChange={(e) => setValue("coverImage", e.target.files[0])}
              />
              <label 
                htmlFor="coverImage" 
                className="mt-1 p-3 w-full border border-gray-600 rounded-lg bg-gray-700 text-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-600 transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Choose a file
              </label>
            </div>
          </div>

          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input 
              id="email" 
              type="email" 
              className="mt-1 p-3 w-full border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300 outline-none"
              placeholder="your.email@example.com" 
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Please enter a valid email address"
                }
              })}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input 
              id="password" 
              type="password" 
              className="mt-1 p-3 w-full border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300 outline-none"
              placeholder="••••••••" 
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters"
                }
              })}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>
          
          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Create Account
            </button>
          </div>
        </form>
        
        <div className="mt-8 text-center text-gray-400">
          <p>Already have an account? <Link to="/login" className="text-red-500 hover:text-red-400 transition duration-300 font-medium hover:underline">Sign In</Link></p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-xs text-gray-500 text-center">
          By signing up, you agree to YouTube 
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 mx-1">Terms of Service</a> and 
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 mx-1">Privacy Policy</a>
        </div>
      </div>
    </div>
    </>

  );
}

export default Signup;