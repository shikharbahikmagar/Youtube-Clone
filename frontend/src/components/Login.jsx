import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input, Logo } from './index'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../store/authSlice'

function Login() {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
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
        <div
            className='flex items-center justify-center bg-black text-white'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 bg-neutral-700 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-slate-300">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full"
                        >Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login