//rafce
import React from 'react'

const SinglePet = () => {
  const pet ={
  "id": 10,
  "name": "Emmeline",
  "age": 3,
  "description": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem minima impedit dolorum id pariatur, qui consequatur doloremque commodi animi! Ipsam quaerat tempore accusantium blanditiis odit obcaecati esse similique velit.',
  "favoriteToys":['rope', 'tennis ball', 'frisbee'],
  "imgUrl": "http://dummyimage.com/218x100.png/dddddd/000000"
}
const user = {
  name: "Jeff",
  isAdmin: true,
}

const handleChange = (prop) => (e) => {
        setForm({
            ...form,
            [prop]: +e.target.value,
        });
    }; 

if(user.isAdmin){
  return(

    <div>
    <h1>Update Pet</h1>
        <form >
            <label htmlFor="name">Name:</label>
            <input
                name="name"
                value={form.name || ""}
                onChange={handleChange}
            /> <br/>
            <label htmlFor="age">Age:</label>
            <input
                name="age"
                value={form.age || ""}
                onChange={handleChange}
            /> <br/>
            <label htmlFor="imgUrl">Image URL:</label>
            <input
                name="imgUrl"
                value={form.imgUrl || ""}
                onChange={handleChange}
            /> <br/>
            <label htmlFor="description">Description:</label>
            <input
                name="description"
                value={form.description || ""}
                onChange={handleChange}
                /> <br/>
            <label htmlFor="favoriteToys">Favorite Toys:</label>
            <input
                name="favoriteToys"
                value={form.favoriteToys || ""}
                onChange={handleChange}
                /> <br/>
            <label htmlFor="species">Species:</label>
            <select name="species" id={form.species}>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="other">Other</option>
            </select><br/>
            <label htmlFor="collarSize">Collar Size:</label>
            <select name="collarSize" id={form.collarSize}>
                <option value="xxs">XXS - Up to 5 lbs.</option>
                <option value="xs">XS - 5-10 lbs.</option>
                <option value="s">S - 10-25 lbs.</option>
                <option value="m">M - Up to 55 lbs.</option>
                <option value="l">L - Up to 75 lbs.</option>
                <option value="xl">XL - 75+ lbs.</option>
            </select><br/>
            <input type="submit" value={"Create Pet"} />
        </form>
  </div>
)
}
else{
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
}

export default SinglePet