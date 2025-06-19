

const ProductCard = ({product,onAddToCart}) => {

  
  
  return (
    <div>
      <div className="bg-white p-4 rounded-lg border ">
        <h3 className="font-medium text-gray-800 mb-1" >{product.name}</h3>
        <p className="text-gray-600 mb-3" >{product.price}</p>

        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        onClick={()=>onAddToCart(product,()=>console.log(product)
        )} // call the fuction to add the product to the cart
        >
          add to cart
        </button>

      </div>
      
    </div>
  )
}

export default ProductCard
