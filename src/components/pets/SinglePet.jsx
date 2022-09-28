import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AdoptPet from "./AdoptPet.jsx";

const SinglePet = () => {
  let navigate = useNavigate();

  const { petId } = useParams();

  const [form, setForm] = React.useState({
    petId: petId,
    age: "",
    image: "",
    description: "",
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

  let [auth, setAuth] = useState({});
  const attemptTokenLogin = async () => {
    const token = window.localStorage.getItem("token");
    if (token) {
      const { data: authUser } = await axios.get("/api/users/auth/signin", {
        headers: {
          authorization: token,
        },
      });
      setAuth(authUser);
    }
  };
  useEffect(() => {
    attemptTokenLogin()
  }, []);

  const handleChange = (prop) => (e) => {
    setForm({
      ...form,
      [prop]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedPet = await axios.put(`/api/pets/${petId}`, form);
    navigate("/");
  };

  const handleDelete = async () => {
    await axios.delete(`/api/pets/${petId}`);
    navigate("/");
  };

  const handleAdopt = () => {
    navigate(`/adopt/${petId}`, { state: form });
  };

  // if (user.isAdmin) {
  if (auth.isAdmin) {
    return (
      <div>
        <h1>Update Pet</h1>
        <form onSubmit={handleUpdate}>
          <div className="form-item">
            <label htmlFor="name" className="form-label">
              Update Name
            </label>
            <input
              className="form-input"
              name="name"
              id="name"
              placeholder="Pet Name"
              value={form.name || ""}
              onChange={handleChange("name")}
            />
            <span className="form-error">Update pet name</span>
          </div>
          <div className="form-item">
            <label htmlFor="age" className="form-label">
              Update Age
            </label>
            <input
              type="number"
              className="form-input form-input-small"
              name="age"
              id="age"
              placeholder="Pet age"
              min="0"
              value={form.age || ""}
              onChange={handleChange("age")}
            />
            <span className="form-error">Enter a valid number</span>
          </div>
          <div className="form-item">
            <label htmlFor="image" className="form-label">
              Update Image Address
            </label>
            <input
              className="form-input"
              name="image"
              id="image"
              placeholder="Pet Image URL"
              value={form.image || ""}
              onChange={handleChange("image")}
            />
            <span className="form-error">Update pet image address</span>
          </div>
          <div className="form-item">
            <label htmlFor="description" className="form-label">
              Update Description
            </label>
            <textarea
              className="form-input"
              name="description"
              id="description"
              placeholder="Update description (max 500 chars)"
              value={form.description || ""}
              onChange={handleChange("description")}
            ></textarea>
            <span className="form-error">Update pet description</span>
          </div>
          <div className="form-item">
            <label htmlFor="favoriteToys" className="form-label">
              Favorite Toys
            </label>
            <input
              className="form-input"
              name="favoriteToys"
              id="favoriteToys"
              placeholder="Pet's Favorite Toys"
              value={form.favoriteToys || ""}
              onChange={handleChange("favoriteToys")}
            />
            <span className="form-error">Update pet favorite toys</span>
          </div>

          <div className="form-item">
            <label htmlFor="species" className="form-label">
              Species
            </label>
            <select id={form.species} className="form-input form-input-xsmall">
              <option hidden value="">
                Select an option
              </option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="other">Other</option>
            </select>
            <span className="form-error">Please enter a number</span>
          </div>

          <div className="form-item">
            <label htmlFor="collarSize" className="form-label">
              Collar Size
            </label>
            <select
              id={form.collarSize}
              className="form-input form-input-xsmall"
            >
              <option hidden value="">
                Select an option
              </option>
              <option value="xxs">XXS - Up to 5 lbs.</option>
              <option value="xs">XS - 5-10 lbs.</option>
              <option value="s">S - 10-25 lbs.</option>
              <option value="m">M - Up to 55 lbs.</option>
              <option value="l">L - Up to 75 lbs.</option>
              <option value="xl">XL - 75+ lbs.</option>
            </select>
            <span className="form-error">Please enter a number</span>
          </div>
          <div id="button">
            <button type="submit" id="submit">
              Update
            </button>
            <button onClick={handleDelete} id="submit">
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="pet-card">
        <div className="pet-photo">
          <img src={form.image} alt={form.name} />
        </div>
        <div>
          <div>
            <h1>{form.name}</h1>
            <p className="singlePetAge">Age: {form.age}</p>
            <h3>Description: </h3>
            <p>{form.description}</p>
            <h3>Favorite Toys:</h3>
            <p>{form.favoriteToys}</p>
          </div>
          <button onClick={handleAdopt}>Adopt Me!</button>
        </div>
      </div>
    );
  }
};

export default SinglePet;
