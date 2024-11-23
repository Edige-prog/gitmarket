import React from 'react';
import classes from '../Login.module.scss';
import { Link } from 'react-router-dom';
import { div } from 'framer-motion/client';
import farmers_image from './farmers_grinding.jpeg';
import farmer_happy from './farmer_happy.jpeg';

const Login = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <img src={farmer_happy} alt="Farmer Happy" className='h-full w-[600px] rounded-r-xl object-cover'/>
        <div className='py-4 px-6 w-[480px] bg-white rounded-3xl flex flex-col gap-8 m-auto '>
            <h2 className='text-2xl font-semibold'>Sign in to Alsat</h2>
            <button className='bg-white py-4 px-4 rounded-3xl text-sm font-semibold flex justify-center items-center gap-4  border-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" role="img" className="icon">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.64 9.20419C17.64 8.56601 17.5827 7.95237 17.4764 7.36328H9V10.8446H13.8436C13.635 11.9696 13.0009 12.9228 12.0477 13.561V15.8192H14.9564C16.6582 14.2524 17.64 11.9451 17.64 9.20419Z" fill="#4285F4"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z" fill="#34A853"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.96409 10.7098C3.78409 10.1698 3.68182 9.59301 3.68182 8.99983C3.68182 8.40664 3.78409 7.82983 3.96409 7.28983V4.95801H0.957273C0.347727 6.17301 0 7.54755 0 8.99983C0 10.4521 0.347727 11.8266 0.957273 13.0416L3.96409 10.7098Z" fill="#FBBC05"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z" fill="#EA4335"></path>
                </svg>
                Sign in with Google
            </button>
            <hr className={classes.divider_signin}/>
            <div className="flex flex-col space-y-6 w-full">
                <div className="flex flex-col">
                    <label htmlFor="username" className="text-gray-900 font-semibold mb-2">
                        Username or Email
                    </label>
                    <input
                    type="text"
                    id="username"
                    className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-800"
                    />
                </div>

                <div className="flex flex-col relative">
                    <label htmlFor="password" className="text-gray-900 font-semibold mb-2 flex justify-between">
                        Password
                        <Link to="password_reset" className="underline text-sm relative top-[2px] font-normal">Forgot?</Link>
                    </label>
                    <input
                    type="password"
                    id="password"
                    className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-800"
                    />
                </div>
            </div>
            <div className='w-full flex flex-col gap-4'>
                <button className='w-full rounded-full bg-black text-white text-sm font-bold py-4'>
                    Sign In
                </button>
                <p className='m-auto text-sm w-fit'>
                    <p className='inline-block mr-1'>Don't have an account?</p>
                    <Link to="/register" className='underline'>Sign up</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login