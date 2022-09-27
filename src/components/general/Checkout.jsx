import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/products/products";

const Checkout = () => {
    const products = useSelector(selectProducts);

    const handleChange= (event)=>{
        console.log(event.target)
    }

    return (
        <div>
            <h1>Select any extras that you will need to help get you started with your pet:</h1>
            <div className="extras">
                {products.map(product=>{
                    <div>
                        <label htmlFor={product.name} className="form-label">
                            {product.name}
                        </label>
                        <input type="checkbox" 
                            id={product.name} 
                            name={product.name} 
                            value={product.name} 
                            onChange={handleChange}
                        />
                    </div>
                })}  
                <input type={submit}>Complete Checkout</input>      
            </div>
        </div>
    )}

export default Checkout;
