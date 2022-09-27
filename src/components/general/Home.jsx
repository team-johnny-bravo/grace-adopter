//rafce
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { selectPets } from "../../redux/pets/pets";
import { useSelector } from "react-redux";
import Pet from "../pets/SinglePetObject.jsx"
import PayButton from "../pets/PayButton.jsx";

const Home = () => {
  const navigate = useNavigate();

  const pets = useSelector(selectPets);

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
          <Pet data={pet} key={pet.id} />
        )}
      </div>
      <PayButton items={pets}/>
    </div>
  );
};

export default Home;
