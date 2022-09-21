import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='phone'>
            <h1>Phone: </h1><span><h3>(888) 867-5309</h3></span>
        </div>
        <div className='email'>
            <h1>Email: </h1><span><h3>adoptapet@graceadopter.com</h3></span>
        </div>
        <div className='address'>
            <h1>Address: </h1><span><h3>123 Puppy Lane <br/> Kitty Cat, California 90210</h3></span>
        </div>
    </div>
  )
}

export default Contact