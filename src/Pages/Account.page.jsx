import React, { useEffect, useState } from 'react'
import Deliverd from './Deliverd.page';
import { TbTruckDelivery } from "react-icons/tb";
import { PiShoppingCartLight } from "react-icons/pi";
import Cardwrapper from '@/component/ForCart/Cardwrapper';
import { BsGearWide } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { MdOutlineModeNight } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useAuth } from '@/Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Account({ }) {
    const navigate = useNavigate()
    const [openComponent, setOpenComponent] = useState({
        deliverd: true,
        cart: false,
        address: false,
        setting: false,
        profile: false,
        setting: false,
        night: false,

    })
    const { isAuthorize, currentUser, logout } = useAuth();

    useEffect(() => {
        if (!isAuthorize) {
            // navigate('/login')
        }
    },[currentUser])

    function handleOpen(name) {
        for (let item in openComponent) {
            if (item == name) {
                setOpenComponent((prevState) => ({
                    ...Object.fromEntries(Object.keys(prevState).map(key => [key, false])),
                    [name]: true
                }))
            }
        }
    }



    return (
        <>
            <section className='w-full h-[100vh] relative bg-secondary   '>
                <div className='flex items-center  gap-5 relative h-full flex-col md:flex-row   '>
                    <ul className='w-[200px] py-3 px-2  hidden md:flex flex-col  items-center gap-2 relative h-full p-1 bg-third   '>
                        {/* profile */}
                        <li className={' flex items-center w-full flex-col h-auto relative mb-5'}>
                            {
                                currentUser?.image ? 
                                currentUser?.username.slice(0,2).toUpperCase() : <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAMFBMVEXk5ueutLfp6+y4vsCqsLTd4OHg4+S2u76nrrHAxcfFycva3d68wcSzuLvLz9HR1dZLOKU8AAAD4klEQVR4nO2cyXLDIAxAjVi8gOH//7bGSdM4cROQHMmZ4Z06Pb2RJcSarms0Go1Go9FoNBqNRqMhAgB01nufvMt/nhabJmUGkxkGM0/JSRvtAT4GZdSGQY3JniyyYMOsdjBqHk/lavWw53mNbDhLEoCbzP+ea2CjtOMK+Pm1aEafIQXie89MkvbsxjJRNQhnAIRC0SVbJ8kEcLrUM6uOgqblEV0TYJSKKpTm6C2qUUYVCqv+HpkRwFd7Loi0q5pq+sUE/u8P04tW/0I1sava+iRd6S2zKIw40aX+mU1R5XSBuahqh9K7oPJ2VYcWXVQ5TTGD/p8pZ6cCvOdC4BPtPCGkSs2eTRQmUkwNY/fHNNI7U76Jqu1JpmpmG1ITTVQNbKaUMWo1ZUvUNzsRb2EbUV2giSrFtqAiFtQy9eMy3d3Wq2HmMiWm6QJXnpJNuaZT32NK//psplRRtjz9otrvqZ+fazx1dVt8O7D1qK/p+12izqXYlifU+alhm59S5/yabxuFNu0zE5soRFpMGdemtM7PuTEJpETlPEIByjhl+LZQMpSY8u6f4xfSfEvoCxY7nzI9r2gH6N7Pf3iGFNXsosjyZy78C5hDiUHkkB9TVJwb539A/R76zH3A96taO6iKJOmFOlXuMR+vyn8MvVEtPjsXjWimeE0ll6NXii7LKaOFqn6j6t62ACN9Ae1Gerwi+0Av/uV/AYi9+Ve2F7oltQ+4qIcdVzOE5M4kumKfzn3NHE9QSDsAuDQF3a/oMC3RPF04b8Bia6331nUntszABmmbJxYlZ31KMX/6ZdJq1nFg1mGcYsrxPYXzIuFzcs5qfRqxLajLv/owRumUXSxj3vd526NyiKfUCd0+7WwKpuYW4jD00bPf6ru8MqlenSypwBzaRNrrizxdC3IvQl09/YvsEPznZSE9vS3CuCodP5sE4DVd8+o6f3KKZcPefAkv+6FpFtjxgO++ddWfWK5Sz0v+cR2PPpo6LkEfVY/eT/1IQK+u45F9i3yV6zVHZSv4oyvpkYMW2UA9eS7AHLGvij96qKKnt6yR1uOLmamvJ7GPNqoxNNWKB4UHQEkA/JsNFPiBlXYZvp4e2VpJR+NIVdz390xVfwfuhooj397DgJivMI34j9Q/SoDE/+0ziMeTIp6q/vGk0LfPVA5VhAeFVCofTzI3py01QaXfLidQczuVd2LyrFpRUzIj1M20uPw51iMvKb//Q36rQ6X09NKLdPx7Cgcq8Y+vVOkv/cj1pxtlplU/cvIZCq/RO2nP4le+AnP9J8ouKAvNTDeUPfY5QUEVNtTYa3EKL/7CCSgzbTTOxg9RuDPIovZyNwAAAABJRU5ErkJggg==" alt="Profile image" height={200} width={200} className='w-[70px] h-[70px] rounded-[200PX] relative  ' />
                            }
                            <span className='text-p18 font-medium text-secondary line-clamp-1 capitalize '>{currentUser?.username}</span>

                        </li>
                        {/* profile end */}
                        <li className={` flex items-center gap-2 w-full relative text-p18  font-medium text-secondary  cursor-pointer py-[2px] px-1 rounded-md hover:bg-secondary hover:text-third ${openComponent.deliverd && "bg-secondary text-third"}`} onClick={(e) => handleOpen('deliverd')}>
                            <TbTruckDelivery className='text-[30px] p-1 rounded-sm bg-white  text-third ' />
                            Deliverd
                        </li>
                        <li className={` flex items-center gap-2 w-full relative text-p18  font-medium text-secondary cursor-pointer py-[2px] px-1 rounded-md  hover:bg-secondary hover:text-third ${openComponent.cart && "bg-secondary text-third"} `} onClick={(e) => handleOpen('cart')}>
                            <PiShoppingCartLight className='text-[30px] p-1 rounded-sm bg-white  text-third ' />
                            Cart
                        </li>
                        {
                            currentUser?.is_admin && (
                                <Link to={"/Dashbord"} className={` flex items-center gap-2 w-full relative text-p18  font-medium text-secondary cursor-pointer py-[2px] px-1 rounded-md  hover:bg-secondary hover:text-third `}>
                                    <MdDashboard className='text-[30px] p-1 rounded-sm bg-white  text-third' />

                                    Dashbord
                                </Link>
                            )
                        }


                        <ul className=' flex items-center flex-col gap-2 w-full h-auto absolute bottom-10 px-3   '>
                            <li className={` flex items-center gap-2 w-full   text-p18  font-medium text-secondary cursor-pointer py-[2px] px-1 rounded-md  hover:bg-secondary hover:text-third ${openComponent.setting && "bg-secondary text-third"} `} onClick={(e) => handleOpen('setting')}>
                                <BsGearWide className='text-[30px] p-1 rounded-sm bg-secondary text-third ' />
                                Setting
                            </li>
                            <li className={` flex items-center gap-2 w-full   text-p18  font-medium text-secondary cursor-pointer py-[2px] px-1 rounded-md  hover:bg-secondary hover:text-third ${openComponent.night && "bg-secondary text-third"} `} onClick={(e) => handleOpen('night')}>
                                <MdOutlineModeNight className='text-[30px] p-1 rounded-sm bg-secondary text-third ' />
                                Night
                            </li>
                            <li className='flex gap-2 items-center h-auto w-full  '>
                                <button className='flex gap-2 items-center  py-1 bg-secondary w-full font-medium  justify-center px-2 hover:bg-red-300  rounded-sm ' onClick={()=>logout()}>Logout  <IoIosLogOut className='text-[20px]  relative   rounded-md' /> </button>
                            </li>
                        </ul>
                    </ul>
                    <div className='  relative h-auto justify-between md:hidden flex max-auto w-full container py-2 '>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAMFBMVEXk5ueutLfp6+y4vsCqsLTd4OHg4+S2u76nrrHAxcfFycva3d68wcSzuLvLz9HR1dZLOKU8AAAD4klEQVR4nO2cyXLDIAxAjVi8gOH//7bGSdM4cROQHMmZ4Z06Pb2RJcSarms0Go1Go9FoNBqNRqMhAgB01nufvMt/nhabJmUGkxkGM0/JSRvtAT4GZdSGQY3JniyyYMOsdjBqHk/lavWw53mNbDhLEoCbzP+ea2CjtOMK+Pm1aEafIQXie89MkvbsxjJRNQhnAIRC0SVbJ8kEcLrUM6uOgqblEV0TYJSKKpTm6C2qUUYVCqv+HpkRwFd7Loi0q5pq+sUE/u8P04tW/0I1sava+iRd6S2zKIw40aX+mU1R5XSBuahqh9K7oPJ2VYcWXVQ5TTGD/p8pZ6cCvOdC4BPtPCGkSs2eTRQmUkwNY/fHNNI7U76Jqu1JpmpmG1ITTVQNbKaUMWo1ZUvUNzsRb2EbUV2giSrFtqAiFtQy9eMy3d3Wq2HmMiWm6QJXnpJNuaZT32NK//psplRRtjz9otrvqZ+fazx1dVt8O7D1qK/p+12izqXYlifU+alhm59S5/yabxuFNu0zE5soRFpMGdemtM7PuTEJpETlPEIByjhl+LZQMpSY8u6f4xfSfEvoCxY7nzI9r2gH6N7Pf3iGFNXsosjyZy78C5hDiUHkkB9TVJwb539A/R76zH3A96taO6iKJOmFOlXuMR+vyn8MvVEtPjsXjWimeE0ll6NXii7LKaOFqn6j6t62ACN9Ae1Gerwi+0Av/uV/AYi9+Ve2F7oltQ+4qIcdVzOE5M4kumKfzn3NHE9QSDsAuDQF3a/oMC3RPF04b8Bia6331nUntszABmmbJxYlZ31KMX/6ZdJq1nFg1mGcYsrxPYXzIuFzcs5qfRqxLajLv/owRumUXSxj3vd526NyiKfUCd0+7WwKpuYW4jD00bPf6ru8MqlenSypwBzaRNrrizxdC3IvQl09/YvsEPznZSE9vS3CuCodP5sE4DVd8+o6f3KKZcPefAkv+6FpFtjxgO++ddWfWK5Sz0v+cR2PPpo6LkEfVY/eT/1IQK+u45F9i3yV6zVHZSv4oyvpkYMW2UA9eS7AHLGvij96qKKnt6yR1uOLmamvJ7GPNqoxNNWKB4UHQEkA/JsNFPiBlXYZvp4e2VpJR+NIVdz390xVfwfuhooj397DgJivMI34j9Q/SoDE/+0ziMeTIp6q/vGk0LfPVA5VhAeFVCofTzI3py01QaXfLidQczuVd2LyrFpRUzIj1M20uPw51iMvKb//Q36rQ6X09NKLdPx7Cgcq8Y+vVOkv/cj1pxtlplU/cvIZCq/RO2nP4le+AnP9J8ouKAvNTDeUPfY5QUEVNtTYa3EKL/7CCSgzbTTOxg9RuDPIovZyNwAAAABJRU5ErkJggg==" alt="profile image" height={30} width={30} className='h-[40px] w-[40px] rounded-[200px] relative ' />
                        <ul className='flex gap-3 items-center w-fit '>
                            <li className='w-fit h-fit relative'>
                                <TbTruckDelivery className='text-[30px] p-1 rounded-sm bg-secondary text-third ' onClick={(e) => handleOpen('deliverd')} />
                            </li>
                            <li className='w-fit h-fit relative'>
                                <PiShoppingCartLight className='text-[30px] p-1 rounded-sm bg-secondary text-third ' onClick={(e) => handleOpen('cart')} />
                            </li>
                            <li className='w-fit h-fit relative'>
                                <Link to={"/"}>
                                    <MdDashboard className='text-[30px] p-1 rounded-sm bg-secondary text-third ' />
                                </Link>
                            </li>
                            <li className='w-fit h-fit relative'>
                                <BsGearWide className='text-[30px] p-1 rounded-sm bg-secondary text-third ' onClick={(e) => handleOpen('setting')} />
                            </li>
                        </ul>
                    </div>

                    <div className='w-full h-full relative  py-[2px]  overflow-auto product-card-wrappar px-5 md:px-0 '>
                        {

                            openComponent.deliverd && <Deliverd />
                        }
                        {
                            openComponent.cart && <Cardwrapper />
                        }


                    </div>

                </div>
            </section>
        </>
    )
}

export default Account