import React, { useEffect, } from 'react'
import { Link } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner"

import { hookLogin, authorize, hookRegister } from "@/Hooks/authentication"
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination ,EffectFade } from 'swiper/modules';

const registerSchema = z.object({
    username: z.string().min(3, "Username must be greater than 3 characters"),
    email: z.string().email(),
    password: z.string().min(7, "Password must be greater than 5 characters"),
});
function Registerpage() {

    const navigate = useNavigate()
    const { register, handleSubmit,reset, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema), // Correctly use zodResolver
    });

    useEffect(() => {
        authorize().then((data) => {
            if (data) {
                navigate("/", { replace: true });
            }
        }).catch((error) => {
            console.log(error);
        })

    }, [])

    function onSubmit(data) {
        console.log(data)
        hookRegister(data)
            .then((response) => {
                toast.error(response?.data?.message, {
                    description: `Your are register as ${response?.data?.credientails}`
                })
                navigate("/login", { replace: true });
            })
            .catch((errors) => {
                if (errors?.response?.data?.details?.forEach) {
                    errors?.response?.data?.details?.forEach((item) => {
                        for (let key in item) {
                            if (item.hasOwnProperty(key)) {
                                toast.error(errors?.response?.data?.error, {
                                    description: `${key} : ${item[key][0]}`
                                })
                            }
                        }
                    })
                    // reset()
                }
                else {
                    toast.error(errors?.response?.data?.error, {
                        description: errors?.response?.data?.details,
                    })
                    // reset()

                }
            })

    }

    return (
        <section className='w-full max-h-[100vh] h-[100vh] relative bg-[#f3f3f3] grid grid-cols-1 md:grid-cols-[2fr_auto] '>
               <Swiper
                    spaceBetween={0}
                    effect='fade'
                    speed={2500}
                    autoplay={{
                        delay:1000
                    }}
                    loop={true}
                    

                    modules={[Pagination,EffectFade]}
                    className="mySwiper w-full relative h-full "
                >
                    <SwiperSlide className='w-full relative h-full '>
                        <div className='w-full relative h-full grid grid-cols-2 '>

                            <img src="/login-model (2).jpeg" alt="MOdel-1" className='w-full relative h-full object-cover ' height={400} width={400} />
                            <img src="/login-model (3).jpeg" alt="MOdel-2" className='w-full relative h-full object-cover ' height={400} width={400} />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-full relative h-full '>
                        <div className='w-full relative h-full grid grid-cols-2 '>

                            <img src="/login-model (1).jpeg" alt="MOdel-1" className='w-full relative h-full object-cover ' height={400} width={400} />
                            <img src="/login-model (4).jpeg" alt="MOdel-2" className='w-full relative h-full object-cover ' height={400} width={400} />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-full relative h-full '>
                        <div className='w-full relative h-full grid grid-cols-2 '>

                            <img src="/login-model (5).jpeg" alt="MOdel-1" className='w-full relative h-full object-cover ' height={400} width={400} />
                            <img src="/model-withbag.jpeg" alt="MOdel-2" className='w-full relative h-full object-cover ' height={400} width={400} />

                        </div>
                    </SwiperSlide>

                </Swiper>
            <form onSubmit={handleSubmit(onSubmit)} className='  relative h-auto flex flex-col justify-center items-center gap-3 bg-white max-w-[500px] w-[400px]'>
                <h1 className='text-p40 font-medium text-primary '>Register </h1>
                <div className='w-2/3 relative flex flex-col gap-3 h-auto '>
                    <div className='w-full relative h-auto flex flex-col items-start '>
                        <label htmlFor="" className='text-sm font-medium text-primary'>Username </label>
                        <input type="text" className='w-full relative h-auto py-1 px-2 border  rounded-lg ' placeholder='create Username' {...register("username")} />
                        {
                            errors.username && (
                                <p className='text-sm font-normal text-red-400'>{errors.username.message}</p>
                            )

                        }
                    </div>
                    <div className='w-full relative h-auto flex flex-col items-start '>
                        <label htmlFor="" className='text-sm font-medium text-primary'>Email </label>
                        <input type="text" className='w-full relative h-auto py-1 px-2 border  rounded-lg ' placeholder='Enter Your Email' {...register("email")} />
                        {
                            errors.email && (
                                <p className='text-sm font-normal text-red-400'>{errors.email.message}</p>
                            )

                        }
                    </div>
                    <div className='w-full relative h-auto flex flex-col items-start '>
                        <label htmlFor="" className='text-sm font-medium text-primary'>Password </label>
                        <input type="password" className='w-full relative h-auto py-1 px-2 border  rounded-lg ' placeholder='create Password' {...register("password")} />
                        {
                            errors.password && (
                                <p className='text-sm font-normal text-red-400'>{errors.password.message}</p>
                            )

                        }
                    </div>
                    <div className='w-full relative flex items-start flex-col gap-3 justify-between  '>


                        <button className='w-full px-5  relative h-auto py-[6px] rounded-lg bg-primary text-white border border-white text-sm '>Create Account</button>
                        <span className='flex items-center gap-2  '>
                            <p className='text-base font-medium'>Login with :</p>
                            <FaGoogle className='bg-black rounded-full p-2 text-[25px] cursor-pointer text-white' />
                            <FaFacebookF className='bg-black rounded-full p-[7px] text-[25px] cursor-pointer text-white' />
                            <FaInstagram className='bg-black rounded-full p-[6px] text-[25px] cursor-pointer text-white' />
                        </span>
                    </div>
                    <span className='w-full h-auto flex items-center justify-center gap-1 mt-4 '>
                        <p className='text-[17px] font-normal flex items-center text-primary gap-3'>
                            Already have an account?
                            <Link to={"/login"} className='text-[16px]  font-normal text-blue-600 '>Login</Link>
                        </p>
                    </span>
                </div>
            </form>
        </section>
    )
}

export default Registerpage