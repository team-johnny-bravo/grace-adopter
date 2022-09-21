import React from 'react'

const AdoptionSupplies = () => {
    const pet ={
        name:'sparky'
    }
  return (
    <div className='adoptionSupplies'>
        <h2>Would you like to add any supllies for {pet.name}?</h2>
    </div>
  )
}

export default AdoptionSupplies