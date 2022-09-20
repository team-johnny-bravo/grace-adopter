//rafce
import React from 'react'

const SinglePetPage = () => {
  const pet ={
  "id": 10,
  "name": "Emmeline",
  "age": 3,
  "description": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem minima impedit dolorum id pariatur, qui consequatur doloremque commodi animi! Ipsam quaerat tempore accusantium blanditiis odit obcaecati esse similique velit.',
  "favoriteToys":['rope', 'tennis ball', 'frisbee'],
  "imgUrl": "http://dummyimage.com/218x100.png/dddddd/000000"
}
  return (
    <div>
      <div>
        <img src={pet.imgUrl} alt={pet.name} />
      </div>
      <div>
        <div>
          <h1>{pet.name}</h1>
          <p className='singlePetAge'>Age: {pet.age}</p>
          <h3>Description: </h3><br/>
          <p>{pet.description}</p>
          <h3>Favorite Toys:</h3> 
          <p>{pet.favoriteToys.join(', ')}</p>
        </div>
      </div>
    </div>
  )
}

export default SinglePetPage