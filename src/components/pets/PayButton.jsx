import React from 'react';
import axios from 'axios';

const PayButton = ({items})=>{
    // const items = [{ id: 1, name: 'pet', price: 10, quantity: 2 }]
    const user = { id: 1, name: 'Aaron' }
    const handleCheckout = async () => {
        await axios.post('/api/create-checkout-session', { items, userId: user.id })
            .then((res) => {
                if (res.data.url) {
                    window.location.href = res.data.url;
                }
            }).catch((err) => console.log(err.message))
    }
    return (
        <>
            <button onClick={() => { handleCheckout() }}>Check Out</button>
        </>
    )
}

export default PayButton