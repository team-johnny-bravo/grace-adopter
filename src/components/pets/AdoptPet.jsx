import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const AdoptPet = () => {
  const location = useLocation();
  const pet = location.state
  // console.log('location.state:', pet)

  const state = useSelector((state) => state);

  // console.log(state);

  const navigate = useNavigate()
  //My code:
  // const pets = useSelector(selectPets);
  // const { petId } = useParams()
  // + to make petId a number!
  // const pet = pets.find(pet => pet.id === +petId)

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/checkout')
  }


  return (
    <div>
      <form id="survey-form">
        <div className="form-title">Adoption Form</div>

        <p id="form-description">
          Please fill out the form below to start the adoption process
        </p>

        <div className="form-item">
          <label htmlFor="animal-name" className="form-label">
            Name of the pet you are adopting
          </label>
          <input
            type="text"
            className="form-input"
            name="animal-name"
            id="animal-name"
            readOnly
            value={pet.name}
            placeholder={pet.name}
          />
          <span className="form-error">Please enter a name</span>
        </div>

        <div className="form-item">
          <label htmlFor="todays-date" className="form-label">
            Today's Date
          </label>
          <input
            type="date"
            className="form-input form-input-small"
            name="todays-date"
            id="todays-date"
            placeholder="Enter today's date"
          />
          <span className="form-error">A sample error message</span>
        </div>

        <div className="form-item">
          <label htmlFor="first-name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-input"
            name="first-name"
            id="first-name"
            placeholder="Enter your first name"
          />
          <span className="form-error">Please enter a first name</span>
        </div>

        <div className="form-item">
          <label htmlFor="last-name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-input"
            name="last-name"
            id="last-name"
            placeholder="Enter your last name"
          />
          <span className="form-error">Please enter a last name</span>
        </div>

        <div className="form-item">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-input"
            name="city"
            id="city"
            placeholder="City of residence"
          />
          <span className="form-error">Please enter a city</span>
        </div>

        <div className="form-item">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <input
            type="text"
            className="form-input"
            name="state"
            id="state"
            placeholder="State of residence"
          />
          <span className="form-error">Please enter a state</span>
        </div>

        <div className="form-item">
          <label htmlFor="zip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-input form-input-xsmall"
            name="zip"
            id="zip"
            placeholder="Zip/postal code"
          />
          <span className="form-error">Please enter a zip</span>
        </div>

        <div className="form-item">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-input form-input-small"
            name="age"
            id="age"
            placeholder="Enter your age"
            min="18"
            max="118"
          />
          <span className="form-error">Enter a valid age</span>
        </div>

        <div className="form-item">
          <label htmlFor="allergies" className="form-label">
            Is Anyone in your Home Allergic to Animals?
          </label>
          <select id="dropdown" className="form-input form-input-xsmall">
            <option hidden value="">
              Select an option
            </option>
            <option value="yes">Yes</option>
            <option value="yes">No</option>
          </select>
          <span className="form-error">Please enter a number</span>
        </div>

        <div className="form-item">
          <label htmlFor="years-experience" className="form-label">
            Years of Experience
          </label>
          <input
            type="number"
            className="form-input form-input-small"
            name="years-experience"
            id="years-experience"
            placeholder="Years of pet experience"
            min="0"
          />
          <span className="form-error">Please enter a number</span>
        </div>

        <div className="form-item">
          <label htmlFor="num-pets" className="form-label">
            Number of Pets
          </label>
          <input
            type="number"
            className="form-input form-input-small"
            name="num-pets"
            id="num-pets"
            placeholder="Number of current pets"
            min="0"
          />
          <span className="form-error">Please enter a number</span>
        </div>

        <div className="form-item">
          <label htmlFor="housing" className="form-label">
            Housing
          </label>
          <select id="dropdown" className="form-input form-input-xsmall">
            <option hidden value="">
              Select an option
            </option>
            <option value="apt">Apt / Condo</option>
            <option value="house">House</option>
            <option value="other">Other</option>
          </select>
          <span className="form-error">Please enter a number</span>
        </div>

        <div className="form-item">
          <label htmlFor="message" className="form-label">
            Enter a Message
          </label>
          <textarea
            maxLength="500"
            className="form-input"
            name="message"
            id="message"
            placeholder="Please enter a message about why you will make a great pet parent! (max 500 chars)"
          ></textarea>
          <span className="form-error">A sample error message</span>
        </div>

        <div id="button">
          <button type="submit" id="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdoptPet;
