import React from 'react'
import { FREE_GIFT } from '../constants/products'

const CartItem = ({item,onUpdate}) => {
  return (
    <div className='bg-white p-4 rounded-lg shadow-sm border' >
        <div className='flex justify-between items-center' >
            <div className='flex-1'>
                <h3 className='font-medium text-gray-800' >{item.name}</h3>
                <p className='text-gray-600 text-sm' >
                    {item.price} * {item.quantity} = {item.price * item.quantity}
                </p>
            </div>

            {
                item.id === FREE_GIFT.id ? (
                    <div className='gb-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium ' >Free Gift</div>
                )

                : (
                    <div className='flex items-center space-x-2'>
                        <button onClick={()=>onUpdate(item.id,item.quantity + 1)} 
                            className='w-8 h-8 bg-green-500 text-white rounded hove:bg-green-600 transition-colors fles items-center justify-center text-lg  '
                            > + </button>
                        <span></span>
                        <button 
                        className='w-8 h-8 bg-red-500 text-white rounded hove:bg-red-600 transition-colors fles items-center justify-center text-lg '
                        onClick={()=>onUpdate(item.id,item.quantity - 1)} > - </button>
                    </div>
                )
            }
        </div>
      
    </div>
  )
}

export default CartItem
