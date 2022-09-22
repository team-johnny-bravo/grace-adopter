//rafce
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { selectPets } from "../../redux/pets/pets";
import { useSelector } from "react-redux";
import Pet from "./SinglePetObject"

const Home = () => {
  const navigate = useNavigate();

  const pets = useSelector(selectPets);
  console.dir(pets);

  return (
    <div className="home">
      <div className="banner">
        <img
          src="https://animal-care.com/wp-content/uploads/home-banner-07-1150x335.jpg "
          alt="Animals"
        />
      </div>
      <div className="pets">
        {pets.map((pet) => 
          <Pet data={pet} />
        )}
      </div>
    </div>
  );
};

export default Home;
