import React from 'react'
import { getSubscribe } from '@/Supabase/subscribeUs'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from "sonner"

const obj = z.object({
    email: z.string().email("invalid email"),
})

function SubscribeUs() {

    const { register, reset, handleSubmit, formState: { errors }, watch } = useForm(
        {
            resolver: zodResolver(obj)
        }
    )


    async function onSubmit(data) {
        try {

            console.log(data.email)
            const response = await getSubscribe(`${data.email}`)

            reset()

            if (response.code == 200) {
                console.log("subscribe successfull")
                toast.success(
                    "subscribe successfully"
                )
            } else if (response.code == 400) {
                toast.success(
                    "Already Subscribed !"
                )
            }

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <section className='w-full relative border   border-white h-auto grid  grid-cols-1 sm:grid-cols-2 gap-1'>

            <section className='w-full relative bg-primary  '>
                <div className='w-full relative h-auto container px-2  md:px-10   xl:px-20    flex flex-col gap-1 bg-white  py-5 '>
                    <h2 className=' text-2xl md:text-4xl font-medium text-primary italic '>Subscribe us</h2>
                    <p className=' text-sm md:text-base font-medium text-primary  line-clamp-3  '>Be the first to know about our latest arrivals, exclusive offers, and insider fashion tips. Join the Markline community and elevate your inbox with timeless elegance.</p>
                </div>
            </section>


            <section className='w-full relative bg-primary  '>

                <div className='bg-primary flex items-center justify-end  container px-2  md:px-10   xl:px-20  w-full h-full  py-5'>
                    <form action='' onSubmit={handleSubmit(onSubmit)} className='w-full flex item-center h-auto border  rounded-lg overflow-hidden '>
                        <input type="email" className='w-full h-auto py-2 px-3' placeholder='Enter Email' {...register('email')} />
                        <button className='text-sm font-medium px-3 text-primary bg-white cursor-pointer border '>Subscribe</button>
                    </form>
                </div>
            </section>
        </section>
    )
}

export default SubscribeUs