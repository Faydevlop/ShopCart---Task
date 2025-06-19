import React from 'react'
import useCart from '../hooks/useCart'
import { PRODUCTS } from '../constants/products'
import ProductCard from '../components/ProductCard'
import CartSummary from '../components/CartSummary'
import CartItem from '../components/CartItem'

const ShoppingCartPage = () => {

  const {cart,
    subtotal,
    remainingForGift,
    hasEarnedGift,
    addToCart,
    updateQuantity
  } = useCart()

  return (

  
      <div className='max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen' >
        <h1 className='text-3xl font-bold text-center mb-8 text-gray-800' >Shopping Cart</h1>
         {/*  products are lising here */}
      <section className='mb-8' >
        <h2 className='text-xl font-semibold mb-4 text-gray-700' >Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'  >
    {
      PRODUCTS.map(product => (
        <ProductCard
        
        key={product.id}
        product={product}
        onAddToCart={addToCart}
        />
      ))
    }
        </div>

      </section>
      

 <CartSummary  
 
 subtotal={subtotal}
 remainingForGift={remainingForGift}
hasEarnedGift={hasEarnedGift}
 />

 <section>
    <h2 className='text-xl font-semibold mb-4 text-gray-700' >Cart Items</h2>
    <div className='space-y-3'>
        {
          cart.length == 0 ? (
            <div>
              You cart is empty
            </div>
           
          ) : (
            cart.map(item => (
              <CartItem 

              key={item.id}
              item={item}
              onUpdate={updateQuantity}
              />
            ))
          )
        }
    </div>



</section>
      
      </div>
      

     
   
 
  )
}

export default ShoppingCartPage
