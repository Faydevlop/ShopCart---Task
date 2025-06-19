import toast, { Toaster } from "react-hot-toast";
import { THRESHOLD } from "../constants/products";
import { useState } from "react";


const ProgressBar = ({subtotal,remainingForGift,hasEarnedGift}) => {

    let [count,setCount] = useState(true)

    if(hasEarnedGift && count){
        toast.success("Free Iteam Earned")
        setCount(false)
    }




    let progress = Math.min(100,(subtotal / THRESHOLD) * 100);

  return (
    <div className='bg-blue-50 p-4 rounded-lg mb-6 '>
        <div><Toaster/></div>
        {
            hasEarnedGift ? (
                <div className='text-green-600 font-medium ' >
                    you got a free wireless mouse
                </div>
            )
             : (
                <>
                <div className='text-gray-700 mb-2' >
                    Add ₹{remainingForGift} to get a free wireless mouse!
                </div>
                <div className='w-full bg-gray-700 rounded-full  h-3' >
                    <div
                    className='bg-blue-500 h-3 rounded-full transition-all duration-300'
                    style={{ width:`${progress}%` }} 
                    >

                    </div>
                </div>
                </>
             )
        }

        
      
    </div>
  )
}

export default ProgressBar
