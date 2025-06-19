import React from 'react'
import ProgressBar from './ProgressBar'

const CartSummary = ({subtotal,remainingForGift,hasEarnedGift}) => {
  return (
   <section className='mb-6' >
    <h2 className='text-xl font-semibold mb-4 text-gray-700' >Cart Summay</h2>
    <div className='bg-white p-4 rounded-lg shadow-sm border'>
        <div className='flex justify-between items-center mb-6' >
            <span className='text-gray-700' >Subtotal : </span>
            <span className='font-semibold text-lg' > {subtotal} </span> 
        </div>
         <ProgressBar
    subtotal={subtotal}
    remainingForGift={remainingForGift}
    hasEarnedGift={hasEarnedGift}
    />

    </div>
   


   </section>

  )
}

export default CartSummary
