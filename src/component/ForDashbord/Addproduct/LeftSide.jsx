import React from 'react'
import Description from './Description'
import AddproductCategory from './AddproductCategory'
import AddproductInventory from './AddproductInventory'
import AddproductDiscounts from './AddproductDiscounts'
function LeftSide() {
  return (
    <section className='w-full relative h-full  flex flex-col gap-5'>
      <Description/>
      <AddproductCategory/>
      <AddproductInventory/>
      <AddproductDiscounts/>

    </section>
  )
}

export default LeftSide