import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom"

function Pet(props) {
    const navigate = useNavigate()
    let pet = props.data

     const handleOnClick = useCallback(
             () => navigate(`/pet/${pet.id}`, { replace: true }),
             [navigate]
           );

    return(
        <div className="singlePet" key={pet.id}>
            <a onClick={handleOnClick}>
                <div className="petImg">
                   <img src={pet.image} alt={pet.name} />
                </div>
                <div className="petName">{pet.name}</div>
            </a>
        </div>
    )
}

export default Pet;
