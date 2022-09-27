const router = require('express').Router()
const Stripe = require('stripe')
require('dotenv').config()
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY)

//api/create-checkout-session
router.post('/create-checkout-session', async (req, res) => {
    const line_items = req.body.items.map(item=>{
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            description: item.description
          },
        //   unit_amount: item.price * 100,
          unit_amount: 10 * 100,
        },
        // quantity: item.quantity,  
        quantity: 5,     
      }
    })
  
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      // url need to be changed to the real one once deployed!!
      success_url: 'http://localhost:3000/checkout-success',
      cancel_url: 'http://localhost:3000',
    });
  
    res.send({url:session.url});
  });


  module.exports = router