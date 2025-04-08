import React from 'react'
import ModernCarousel from '@/component/ForDeal/ModernCarousel'
import GridRroduct from '@/component/ForHome/GridRroduct'
import ProductCard from '@/component/ForHome/ProductCard'
import Discount from '@/component/ForHome/Discount'
import Hero from '@/component/ForHome/Hero'
import CarouselProduct from '@/component/ForHome/CarouselProduct'
import CategoriesSection from '@/component/Category/CategoriesSection'
function Bestdeal() {
  const num = [1, 2, 4, 5, 6, 7, 6, 8]
  const data = {
    title: "Tranding Products",
    products: [
      {
        imageUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/308383/01/sv01/fnd/IND/fmt/png/Mercedes-AMG-Petronas-F1%C2%AE-CA-Pro-Crush-Unisex-Motorsport-Sneakers",
        name: 'tranding Product',
        id: 1,
      },
      {
        imageUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/308383/01/sv01/fnd/IND/fmt/png/Mercedes-AMG-Petronas-F1%C2%AE-CA-Pro-Crush-Unisex-Motorsport-Sneakers",
        name: 'tranding Product',
        id: 1,
      }
      ,
      {
        imageUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/308383/01/sv01/fnd/IND/fmt/png/Mercedes-AMG-Petronas-F1%C2%AE-CA-Pro-Crush-Unisex-Motorsport-Sneakers",
        name: 'tranding Product',
        id: 1,
      }
    ]
  }
  return (
    <section className='realtive w-full bg-secondary h-auto'>
      <Hero categoryName={"bestdeal"} />

      <CategoriesSection title={"Top Deal On Fasion "} >
        <GridRroduct data={{ categoryName: "category", name: "Top Deal On Fasion " }} />
      </CategoriesSection>
      
      <CategoriesSection title={"title comes here"} >
        <CarouselProduct data={{ categoryName: "all", name: "title comes here" }} />
      </CategoriesSection>
      
      <ModernCarousel apiData={data} />

      <Discount categoryName={"bestdeal"} />

    </section>
  )
}

export default Bestdeal