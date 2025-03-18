import React from 'react'
import Uploadproductimage from './Uploadproductimage'
import ShippingandDelivery from './ShippingandDelivery'
import AddproductPricing from './AddproductPricing'
function RigthSide() {
  return (
    <div className='w-full relative h-full flex flex-col gap-5  '>
      <Uploadproductimage/>
      <ShippingandDelivery/>
      <AddproductPricing/>
    </div>
  )
}

export default RigthSide