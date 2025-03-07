
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../store/authSlice'
import { log } from 'react-modal/lib/helpers/ariaAppHider'
import { ToastContainer, toast } from 'react-toastify'  

function Login() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    // const [error, setError] = useState("")
    const dispatch = useDispatch();
  const api = axios.create({
    baseURL: '${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/', // Base URL
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
 // let userData = {};
  const login = async(data) => {
    //console.log(data);
    try {
      const response =  await api.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/users/login`, data)
      //console.log(response);
      if(response)
      {
            // const userData = await api.get("users/current-user")
            //console.log(response.data.data.user);
            const LoggedInUser = {
                fullname: response.data.data.user.fullname,
                email: response.data.data.user.email,
                avatar: response.data.data.user.avatar,
                username: response.data.data.user.username,
                accessToken: response.data.data.accessToken,
                loginStatus: true,
                expiry: new Date().getTime() +24 * 60 * 60 * 1000
            }
             //localStorage.setItem("LoggedInUser", JSON.stringify(LoggedInUser));
             log(LoggedInUser);
            const userData = response.data.data.user;
            dispatch(authLogin({userData}));
            toast.success("User logged in successfully!", {
                position: "top-right",
                autoClose: 3000, // 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });


            setTimeout(() => {
                navigate('/');
            }, 1000);
           
      }

    } catch (err) {
     console.log(err);
     
      alert(err.response.data.message);
      
      
    }
    

    }

    return (

        <>
        <ToastContainer />
        
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900 p-4">
        <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-10 transform transition duration-500 hover:scale-[1.01]">
          <div className="text-center mb-8">
            <h2 className="text-white text-2xl sm:text-3xl font-bold mt-4 mb-2">Sign-In to Your Account</h2>
            <p className="text-gray-400">Join the YouTube community</p>
          </div>
          
          <form onSubmit={handleSubmit(login)} encType="multipart/form-data" className="space-y-5">
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
                Sign In
              </button>
            </div>
          </form>
          
          <div className="mt-8 text-center text-gray-400">
            <p>Already have an account? <Link to="/signup" className="text-red-500 hover:text-red-400 transition duration-300 font-medium hover:underline">Sign Up</Link></p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700 text-xs text-gray-500 text-center">
            By signing up, you agree to YouTube 
            <a href="#" className="text-gray-400 hover:text-white transition duration-300 mx-1">Terms of Service</a> and 
            <a href="#" className="text-gray-400 hover:text-white transition duration-300 mx-1">Privacy Policy</a>
          </div>
        </div>
      </div>

      </>

  
    )
}

export default Login

