import React from 'react'
import OrderSummary from '@/component/ForOrder/OrderSummary'
import Cartcard from '@/component/ForCart/Cartcard'
import CalulateShipping from '@/component/ForCart/CalulateShipping'
import Cardwrapper from '@/component/ForCart/Cardwrapper'
import CommonSeoFile from '@/Comman/CommonSeoFile'
import { useCart } from '@/Contexts/Cart.context'


const metadata = {
    title: "Your Cart - Valinor & Pelóri | Elegant Ladies' Shoes, Bags & Sandals",
    description: "Review your selected items from Valinor & Pelóri’s elegant collection of ladies' shoes, bags, and sandals. Ready to elevate your style.",
    robots: {
        index: false, // Cart pages are usually not indexed for SEO purposes
        follow: false,
    },
    openGraph: {
        title: "Your Cart - Valinor & Pelóri | Elegant Ladies' Shoes, Bags & Sandals",
        description: "View your Valinor & Pelóri cart and check out the latest collection of luxury ladies' shoes, handbags, and sandals.",
        url: "/cart",
        locale: "en_us",
        siteName: "Valinor & Pelóri",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@ValinorPelori",
        creator: "@ValinorPelori",
        title: "Your Cart - Valinor & Pelóri | Elegant Ladies' Shoes, Bags & Sandals",
        description: "View your cart items at Valinor & Pelóri. Shop timeless elegance with our luxury ladies' footwear and accessories.",
    },
    canonical: "/cart",
};

function Cart() {
    const {cart}=useCart()
    return (
        <><CommonSeoFile {...metadata} /><section className='h-auto w-full relative bg-secondary'>
            <div className='h-auto md:h-[100vh] w-full relative container  mx-auto py-5 px-5  flex flex-col-reverse  md:grid md:grid-cols-3 md:px-10   xl:px-20'>

                <Cardwrapper products={cart} />

                <div className='col-start-3 bg-white rounded-md px-5 py-5 col-end-4 sticky top-0  h-fit w-full overflow-auto p-3'>
                    <CalulateShipping />
                    <div className='rounded-md bg-secondary text-third p-2 '>
                        <h2 className='w-full p-2 text-h2 font-normal text-third mb-3'>Cart Total</h2>
                        <span className='flex items-center justify-between gap-3 w-full px-2 '>
                            <p className='font-bold text-[15px]'>CartTotal </p>
                            <p className='font-medium text-third '>$ 809</p>
                        </span>
                        <span className='flex items-center justify-between gap-3 w-full px-2 '>
                            <p className='font-bold text-[15px]'>Shipping Cost </p>
                            <p className='font-medium text-third '>$ 5</p>
                        </span>
                        <span className='flex items-center justify-between gap-3 w-full px-2 '>
                            <p className='font-bold text-[15px]'>Discount </p>
                            <p className='font-medium text-third '>- $ 5.0 </p>
                        </span>
                        <span className='flex items-center justify-between gap-3 border-t w-full px-2 mt-3 '>
                            <p className='font-semibold text-p18'>CartTotal </p>
                            <p className='font-semibold text-third  text-p20'>$ 150</p>
                        </span>
                        <button className='w-full relative px-5 py-2 bg-third text-secondary rounded-md mt-3'>Buy</button>
                    </div>

                </div>
            </div>
        </section></>
    )
}

export default Cart