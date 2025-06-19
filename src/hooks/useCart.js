import React, { useEffect, useState } from 'react'
import { FREE_GIFT, THRESHOLD } from '../constants/products';


const useCart = () => {

    const [cart,setCart] = useState([])

    const subtotal = cart.reduce((sum,item) => sum + (item.price * item.quantity),0);
    const remainingForGift = Math.max(0,THRESHOLD - subtotal)
    const hasEarnedGift = subtotal >= THRESHOLD

    useEffect(()=>{
        const freeGifInCart = cart.find(item => item.id === FREE_GIFT.id);

        if(hasEarnedGift && !freeGifInCart){
            setCart(prev => [...prev , {...FREE_GIFT,quantity:1} ] )
        }else if(!hasEarnedGift && freeGifInCart){
            setCart(prev => prev.filter(item => item.id !== FREE_GIFT.id))
        }
    },[subtotal,hasEarnedGift])

    const addToCart = (product)=>{
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id)
            if(existing){
                return prev.map(item => 
                    item.id === product.id
                    ? {...item,quantity:item.quantity + 1}
                    : item
                )
            }
            return [...prev,{...product,quantity:1}]
        })
    }


    const updateQuantity = (id,newQuantity) =>{
        if(id == FREE_GIFT.id ) return;

        if(newQuantity <= 0){
            setCart(prev => prev.filter(item => item.id !== id))
        }else{
            setCart(prev =>
                prev.map(item =>
                    item.id === id ? {...item ,quantity:newQuantity } : item
                )
            )
        }
    }



  return {
    cart,
    subtotal,
    remainingForGift,
    hasEarnedGift,
    addToCart,
    updateQuantity
  }
}

export default useCart
