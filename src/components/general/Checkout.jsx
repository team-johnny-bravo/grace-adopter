import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import products, { fetchProductsAsync, selectProducts } from '../../redux/products/products'

const Checkout = () => {
    const products = useSelector(selectProducts);

    return (
        <div>
        <h1>Select any extras that you will need to help get you started with your pet:</h1>
        <div className="extras">
            {products.map(product=>{
                <div>
                    <label htmlFor={product.name} className="form-label">
                        {product.name}
                    </label>
                    <input type="checkbox" id={product.name} name={product.name} value={product.name} />
                </div>
            })}        
        </div>
    </div>

  )
}

export default Checkout