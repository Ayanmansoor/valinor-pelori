import React from 'react'
import TrendingProduct from './TrendingProduct'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import { Link } from 'react-router-dom'
import ModernCarousel from '../ForDeal/ModernCarousel';

function Trending({data}) {


  const values={
    title:"Tranding Products",
    products:[
      {
        imageUrl:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/308383/01/sv01/fnd/IND/fmt/png/Mercedes-AMG-Petronas-F1%C2%AE-CA-Pro-Crush-Unisex-Motorsport-Sneakers",
        name:'tranding Product',
        id:1,
      },
      {
        imageUrl:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/308383/01/sv01/fnd/IND/fmt/png/Mercedes-AMG-Petronas-F1%C2%AE-CA-Pro-Crush-Unisex-Motorsport-Sneakers",
        name:'tranding Product',
        id:1,
      }
      ,
       {
        imageUrl:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/308383/01/sv01/fnd/IND/fmt/png/Mercedes-AMG-Petronas-F1%C2%AE-CA-Pro-Crush-Unisex-Motorsport-Sneakers",
        name:'tranding Product',
        id:1,
      }
    ]
  }

  return (
    <ModernCarousel apiData={data} />
  )
}

export default Trending