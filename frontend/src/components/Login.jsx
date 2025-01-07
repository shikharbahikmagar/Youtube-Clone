
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import {  Logo } from './index'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../store/authSlice'

function Login() {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    // const [error, setError] = useState("")
    const dispatch = useDispatch();
  const api = axios.create({
    baseURL: '${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/', // Base URL
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  let userData = {};
  const login = async(data) => {
    //console.log(data);
    try {
      const response =  await api.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/users/login`, data)
      console.log(response);
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
            localStorage.setItem("LoggedInUser", JSON.stringify(LoggedInUser));
            userData = response.data.data.user;
            dispatch(authLogin({userData}));
            navigate('/')
      }

    } catch (err) {
     console.log(err);
     
      alert(err.response.data.message);
      
      
    }
    

    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-10">
            <div className="text-center mb-8">
                <span className="inline-block text-white w-full max-w-[100px]">
                    <Logo width="100%" />
                </span>
                <h2 className="text-white text-2xl font-bold mb-2">Sign In</h2>
                <p className="text-gray-400">Welcome back!</p>
            </div>
            <form onSubmit={handleSubmit(login)} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                        Email
                    </label>
                    <input 
                        id="email" 
                        type="email" 
                        className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-white focus:ring-indigo-500 focus:border-indigo-500" 
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                            }
                        })}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                        Password
                    </label>
                    <input 
                        id="password" 
                        type="password" 
                        className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-white focus:ring-indigo-500 focus:border-indigo-500" 
                        {...register("password", {
                            required: true,
                        })}
                    />
                </div>
                <div>
                    <button 
                        type="submit" 
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md"
                    >
                        Sign In
                    </button>
                </div>
            </form>
            <div className="mt-6 text-center text-gray-400">Dont have an account? <Link to="/signup" className="text-indigo-500 hover:underline">Sign Up</Link>
            </div>
        </div>
    </div>
    )
}

export default Login