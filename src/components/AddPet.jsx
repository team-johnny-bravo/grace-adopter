import React from 'react'
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPet = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    let [form, setForm] = useState({ 
        name: '',
        age: '',
        imgUrl:'',
        description: '',
        favoriteToys: '',
        species: '',
        collarSize: '',
        Status: '',
        })

    const handleChange = (prop) => (e) => {
        setForm({
            ...form,
            [prop]: +e.target.value,
        });
    }; 

  return (
    <div className='signupPage'>
        <h1>AddPet</h1>
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

export default AddPet