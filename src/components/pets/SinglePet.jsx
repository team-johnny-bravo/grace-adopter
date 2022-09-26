//rafce
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AdoptPet from "./AdoptPet.jsx";

const SinglePet = () => {
  let navigate = useNavigate();

  const { petId } = useParams();
  let pet = {};

  const [form, setForm] = React.useState({
    petId: petId,
    age: "",
    image: "",
    description: "",
    favoriteToys: "",
    species: "",
    collarSize: "",
    status: "",
  });

  useEffect(() => {
    const getData = async () => {
      const petData = await axios.get(`/api/pets/${petId}`);
      setForm({ ...petData.data });
    };
    getData();
  }, []);

  const user = {
    name: "Jeff",
    isAdmin: false,
  };

  const handleChange = (prop) => (e) => {
    setForm({
      ...form,
      [prop]: e.target.value,
    });
  };

  const Toys = (pet) => {
    if (pet.favoriteToys) {
      <p>{pet.favoriteToys.join(", ")}</p>;
    } else {
      <p>None</p>;
    }
  };

  const Navigate = () => {
    navigate("/adopt");
  };

  if (user.isAdmin) {
    return (
      <div>
        <h1>Update Pet</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            value={form.name || ""}
            onChange={handleChange("name")}
          />{" "}
          <br />
          <label htmlFor="age">Age:</label>
          <input
            name="age"
            value={form.age || ""}
            onChange={handleChange("age")}
          />{" "}
          <br />
          <label htmlFor="image">Image URL:</label>
          <input
            name="image"
            value={form.image || ""}
            onChange={handleChange("image")}
          />{" "}
          <br />
          <label htmlFor="description">Description:</label>
          <input
            name="description"
            value={form.description || ""}
            onChange={handleChange("description")}
          />{" "}
          <br />
          <label htmlFor="favoriteToys">Favorite Toys:</label>
          <input
            name="favoriteToys"
            value={form.favoriteToys || ""}
            onChange={handleChange("favoriteToys")}
          />{" "}
          <br />
          <label htmlFor="species">Species:</label>
          <select name="species" id={form.species}>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
            <option value="other">Other</option>
          </select>
          <br />
          <label htmlFor="collarSize">Collar Size:</label>
          <select name="collarSize" id={form.collarSize}>
            <option value="xxs">XXS - Up to 5 lbs.</option>
            <option value="xs">XS - 5-10 lbs.</option>
            <option value="s">S - 10-25 lbs.</option>
            <option value="m">M - Up to 55 lbs.</option>
            <option value="l">L - Up to 75 lbs.</option>
            <option value="xl">XL - 75+ lbs.</option>
          </select>
          <br />
          <input type="submit" value={"Update"} />
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <img src={form.image} alt={form.name} />
        </div>
        <div>
          <div>
            <h1>{form.name}</h1>
            <p className="singlePetAge">Age: {form.age}</p>
            <h3>Description: </h3>
            <br />
            <p>{form.description}</p>
            <h3>Favorite Toys:</h3>
            <Toys />
          </div>
          <button onClick={Navigate}>Adopt Me!</button>
        </div>
      </div>
    );
  }
};

export default SinglePet;
