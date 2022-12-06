import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPetsAsync, selectPets } from "../../redux/pets/pets";
import { useDispatch, useSelector } from "react-redux";
import Pet from "../pets/SinglePetObject.jsx";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();

  const pets = useSelector(selectPets);

  useEffect(() => {
    dispatch(fetchPetsAsync());
  }, []);

  return (
    <div className="home">
      <div className="banner">
        <img
          src="https://animal-care.com/wp-content/uploads/home-banner-07-1150x335.jpg "
          alt="Animals"
        />
      </div>
      <h1 id="pet-header">Adoptable Pets</h1>
      <div className="pets">
        {[...pets].sort((a, b) => a.id - b.id).map((pet) =>
          <Pet data={pet} key={pet.id} />
        )}
      </div>
    </div>
  );
};

export default Home;
