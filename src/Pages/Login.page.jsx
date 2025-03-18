import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { hookLogin, authorize } from "@/Hooks/authentication"
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner"
const loginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

function Loginpage() {

    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(loginSchema) })

    function onSubmit(data) {
        console.log(data)
        hookLogin(data)
            .then((response) => {
                toast.success('Login attempted wass Successfull.', {
                    description: `${response?.data?.message}`
                })
                reset()
                navigate("/", { replace: true });
            }).catch((error) => {
                console.log(error)
                toast.error('Validation Filed', {
                    description: `Make sure email and password correct.`
                })
                reset()
            })
    }

    useEffect(() => {
        authorize().then((data) => {
            if (data) {
                navigate("/", { replace: true })
            }
        }).catch((error) => {
            console.error(error)
        })

    }, [])

    return (
        <section className='w-full max-h-[100vh] h-[100vh] relative bg-[#f3f3f3] grid grid-cols-1 md:grid-cols-[2fr_auto]  '>
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

                </Swiper>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='   relative h-auto flex flex-col justify-center items-center gap-3 bg-white max-w-[500px] w-[400px] '>
                <h1 className='text-p40 font-medium text-primary '>Login </h1>
                <div className='w-2/3 relative flex flex-col gap-3 h-auto '>
                    <div className='w-full relative h-auto flex flex-col items-start '>
                        <label htmlFor="" className='text-sm font-medium text-primary'>Email</label>
                        <input type="text" className='w-full relative h-auto py-1 px-2 border rounded-lg ' placeholder='Enter Your Email' {...register("email")} />
                        {
                            errors.email && (
                                <p className='text-sm font-normal text-red-400'>{errors.email.message}</p>
                            )

                        }

                    </div>
                    <div className='w-full relative h-auto flex flex-col items-start '>
                        <label htmlFor="" className='text-sm font-medium text-primary'>Password</label>
                        <input type="password" className='w-full relative h-auto py-1 px-2 border rounded-lg ' placeholder='Enter Password' {...register("password")} />
                        {
                            errors.password && (
                                <p className='text-[16px] font-normal text-red-400'>{errors.password.message}</p>
                            )

                        }
                    </div>
                    <div className='w-full relative flex items-start gap-5  flex-col   justify-between '>


                        <button className=' w-full  px-5  relative h-auto py-1 rounded-lg bg-primary text-white border text-base border-white'>login</button>
                        <span className='flex items-center gap-2  '>
                            <p className='text-base  font-medium'>Login with :</p>
                            <FaGoogle className='bg-black rounded-full p-2 text-[25px] cursor-pointer text-white' />
                            <FaFacebookF className='bg-black rounded-full p-[7px] text-[25px] cursor-pointer text-white' />
                            <FaInstagram className='bg-black rounded-full p-[6px] text-[25px] cursor-pointer text-white' />
                        </span>
                    </div>
                    <span className='w-full h-auto flex items-center justify-center gap-1 mt-4 '>
                        <p className='text-base font-normal flex items-center text-primary gap-5'>
                            Don't have an account?
                            <Link to='/register' rel="prefetch" className='text-base font-normal text-blue-600 '>Register</Link>
                        </p>
                    </span>
                </div>
            </form>
        </section>
    )
}

export default Loginpage