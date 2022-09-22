//rafce
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { selectPets } from "../../redux/pets/pets";
import { useSelector } from "react-redux";

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
        {pets.map((pet) => {
          // const handleOnClick = useCallback(
          //   () => navigate(`/pet/${pet.id}`, { replace: true }),
          //   [navigate]
          // );
          return (
            <div className="singlePet" key={pet.id}>
              <a src={`/pet/${pet.id}`}>
                <div className="petImg">
                  <img src={pet.imgUrl} alt={pet.name} />
                </div>
                <div className="petName">{pet.name}</div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
