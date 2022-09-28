import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/products/products";
import PayButton from "../pets/PayButton.jsx";

const Checkout = () => {

  const products = useSelector(selectProducts);
  const [orders, setOrders] = React.useState([{ name: 'Adoption Fee', price: 50, quantity: 1 }])

  const handleChange = (event) => {
    if (event.currentTarget.checked) {
      const order = { name: event.target.id, price: event.target.name, quantity: 1 }
      setOrders([...orders, order])
    } else {
      const tempOrders = orders
      const updatedOrders = tempOrders.filter(order => order.name !== event.target.id)
      setOrders(updatedOrders)
    }
  };

  return (
    <div>
      <h1>
        Select any extras that you will need to help get you started with your
        pet:
      </h1>
      <div className="extras">
        {products.map((product, productIdx) =>
          <div key={productIdx}>
            <label htmlFor={product.name} className="form-label">
              {product.name + ' $' + product.price}
            </label>
            <input
              type="checkbox"
              // id={product.name}
              // name={product.name}
              // value={product.name}
              id={product.name}
              name={product.price}
              value={product.quantity}
              // value={product}
              onChange={handleChange}
            />
          </div>
        )}
        {/* <input type={'submit'}>Complete Checkout</input> */}
        <PayButton items={orders} />
      </div>
    </div>
  );
};

export default Checkout;
