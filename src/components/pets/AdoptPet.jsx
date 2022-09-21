import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdoptPet = () => {

	const navigate = useNavigate();

	const [form, setForm] = useState({
		day: 0,
		month: 0,
		year: 0,
		petName: '',
		fname: '',
		lname: '',
		gender: '',
		address: '',
		city: '',
		postcode: '',
		phone: '',
		email:'',
		age: '',
		adoptionReason:'',
		allergies: false,
		numberOfPets: 0,
		typeOfHouse: '',
		preparation: ''
	})

	const handleChange = (prop) => (event) => {
        setForm({
            ...form,
            [prop]: event.target.value,
        });
    }; 

	const handleSubmit = async (event)=>{
        event.preventDefault();
        // await dispatch(submitApplicationAsync(form))
        setForm({
          day: 0,
		month: 0,
		year: 0,
		petName: '',
		fname: '',
		lname: '',
		gender: '',
		address: '',
		city: '',
		postcode: '',
		phone: '',
		email:'',
		age: '',
		adoptionReason:'',
		allergies: false,
		numberOfPets: 0,
		typeOfHouse: '',
		preparation: ''
        })

		navigate('/submitapplication');
  }

  return (
<div>
	<form id="survey-form">
        <div>
		    <p id="description"><em>Thank you htmlFor wishing to offer a rescue dog a home! Please could you complete the form below and submit it to us. </em></p>
		</div>

		<div id="todays-date">
			<label className="main-label" htmlFor="todays-date">Today's Date: </label>
			<select name="day">
				<option value="day">Day</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>
				<option value="13">13</option>
				<option value="14">14</option>
				<option value="15">15</option>
				<option value="16">16</option>
				<option value="17">17</option>
				<option value="18">18</option>
				<option value="19">19</option>
				<option value="20">20</option>
				<option value="21">21</option>
				<option value="22">22</option>
				<option value="23">23</option>
				<option value="24">24</option>
				<option value="25">25</option>
				<option value="26">26</option>
				<option value="27">27</option>
				<option value="28">28</option>
				<option value="29">29</option>
				<option value="30">30</option>
				<option value="31">31</option>
			</select>
			<select name="month">
				<option value="month">Month</option>
				<option value="january">January</option>
				<option value="february">February</option>
				<option value="march">March</option>
				<option value="april">April</option>
				<option value="may">May</option>
				<option value="june">June</option>
				<option value="july">July</option>
				<option value="august">August</option>
				<option value="september">September</option>
				<option value="october">October</option>
				<option value="november">November</option>
				<option value="december">December</option>
			</select>
			<select name="year">
				<option value="" e="year">Year</option>
				<option value="2018">2018</option>
				<option value="2017">2017</option>
				<option value="2016">2016</option>
				<option value="2015">2015</option>
				<option value="2014">2014</option>
				<option value="2013">2013</option>
				<option value="2012">2012</option>
				<option value="2011">2011</option>
				<option value="2010">2010</option>
				<option value="2009">2009</option>
				<option value="2008">2008</option>
				<option value="2007">2007</option>
				<option value="2006">2006</option>
				<option value="2005">2005</option>
				<option value="2004">2004</option>
				<option value="2003">2003</option>
				<option value="2002">2002</option>
				<option value="2001">2001</option>
				<option value="2000">2000</option>
				<option value="1999">1999</option>
				<option value="1998">1998</option>
				<option value="1997">1997</option>
				<option value="1996">1996</option>
				<option value="1995">1995</option>
				<option value="1994">1994</option>
				<option value="1993">1993</option>
				<option value="1992">1992</option>
				<option value="1991">1991</option>
				<option value="1990">1990</option>
				<option value="1989">1989</option>
				<option value="1988">1988</option>
				<option value="1987">1987</option>
				<option value="1986">1986</option>
				<option value="1985">1985</option>
				<option value="1984">1984</option>
				<option value="1983">1983</option>
				<option value="1982">1982</option>
				<option value="1981">1981</option>
				<option value="1980">1980</option>
				<option value="1979">1979</option>
				<option value="1978">1978</option>
				<option value="1977">1977</option>
				<option value="1976">1976</option>
				<option value="1975">1975</option>
				<option value="1974">1974</option>
				<option value="1973">1973</option>
				<option value="1972">1972</option>
				<option value="1971">1971</option>
				<option value="1970">1970</option>
				<option value="1969">1969</option>
				<option value="1968">1968</option>
				<option value="1967">1967</option>
				<option value="1966">1966</option>
				<option value="1965">1965</option>
				<option value="1964">1964</option>
				<option value="1963">1963</option>
				<option value="1962">1962</option>
				<option value="1961">1961</option>
				<option value="1960">1960</option>
				<option value="1959">1959</option>
				<option value="1958">1958</option>
				<option value="1957">1957</option>
				<option value="1956">1956</option>
				<option value="1955">1955</option>
				<option value="1954">1954</option>
				<option value="1953">1953</option>
				<option value="1952">1952</option>
				<option value="1951">1951</option>
				<option value="1950">1950</option>
				<option value="1949">1949</option>
				<option value="1948">1948</option>
				<option value="1947">1947</option>
				<option value="1946">1946</option>
				<option value="1945">1945</option>
				<option value="1944">1944</option>
				<option value="1943">1943</option>
				<option value="1942">1942</option>
				<option value="1941">1941</option>
				<option value="1940">1940</option>
				<option value="1939">1939</option>
				<option value="1938">1938</option>
				<option value="1937">1937</option>
				<option value="1936">1936</option>
				<option value="1935">1935</option>
				<option value="1934">1934</option>
				<option value="1933">1933</option>
				<option value="1932">1932</option>
				<option value="1931">1931</option>
				<option value="1930">1930</option>
				<option value="1929">1929</option>
				<option value="1928">1928</option>
				<option value="1927">1927</option>
				<option value="1926">1926</option>
				<option value="1925">1925</option>
				<option value="1924">1924</option>
				<option value="1923">1923</option>
				<option value="1922">1922</option>
				<option value="1921">1921</option>
				<option value="1920">1920</option>
				<option value="1919">1919</option>
				<option value="1918">1918</option>
				<option value="1917">1917</option>
				<option value="1916">1916</option>
				<option value="1915">1915</option>
				<option value="1914">1914</option>
				<option value="1913">1913</option>
				<option value="1912">1912</option>
				<option value="1911">1911</option>
				<option value="1910">1910</option>
				<option value="1909">1909</option>
				<option value="1908">1908</option>
				<option value="1907">1907</option>
				<option value="1906">1906</option>
				<option value="1905">1905</option>
			</select>
		</div>

		<div id="dogName">
			<label className="main-label" htmlFor="petName">Name of the dog you wish to adopt: </label>
			<input type="text" onChange={handleChange("petName")} id="petName" placeholder="Dog Name" required/>
		</div>

		<div id="first-last-name">
			<label className="main-label" id="name-label">First Name: </label>
			<input type="text" onChange={handleChange("fname")} id="name" placeholder="Casey" required/>

			<label className="main-label">Last Name: </label>
			<input type="text" onChange={handleChange("lname")} id="lastName" placeholder="Smith" required/>
		</div>

		<div id="gender">
			<input type="radio" id="male" name="gender" value="1" required/>
			<label className="main-label" htmlFor="male">Male</label>

			<input type="radio" id="female" name="gender" value="2" required/>
			<label className="main-label" htmlFor="female">Female</label>
		</div>

		<div id="address">
			<label className="main-label" htmlFor="address">Address: </label>
			<input type="text" onChange={handleChange("address")} id="address" size="30" placeholder="Enter your address here"/>


			<label className="main-label" htmlFor="city">City: </label>
			<input type="text" onChange={handleChange("city")} id="city" size="15" placeholder="Your City"/>

			<label className="main-label" htmlFor="postcode">Postcode: </label>
			<input type="text" onChange={handleChange("postcode")} id="postcode" size="5" placeholder="Postcode"/>

		</div>

		<div id="email-phone">
			<label className="main-label" id="phone-label" htmlFor="phone">Phone: </label>
			<input type="phone" onChange={handleChange("phone")} id="phone" size="10" placeholder="e.g.  819 867 5309"/>

			<label className="main-label" id="email-label" htmlFor="email">Email: </label>
			<input type="email" onChange={handleChange("email")} id="email" placeholder="e.g. youremail@example.com" required size="35"/>

		</div>

		<div id="age">
			<ul><label className="main-label" htmlFor="age">Age of applicant:</label></ul>

			<li><input type="radio" id="u18" name="age" value="u18" required/>
				<label htmlFor="u18">Under 18</label></li>

			<li><input type="radio" id="18" name="age" value="18-24" required/>
				<label htmlFor="18">18 - 24</label></li>

			<li><input type="radio" id="25" name="age" value="25-34" required/>
				<label htmlFor="25">25 - 34</label></li>

			<li><input type="radio" id="35" name="age" value="35-44" required/>
				<label htmlFor="35">35 - 44</label></li>

			<li><input type="radio" id="45" name="age" value="45+" required/>
				<label htmlFor="45">45 and older</label></li>

		</div>

		<div id="reason">
			<ul><label className="main-label" htmlFor="reason">Why do you want to adopt a dog? Please check all that apply:</label></ul>
			<li><input type="checkbox" name="reason" id="companion" value="companion"/>
				<label htmlFor="companion">Pet & Companion</label></li>

			<li><input type="checkbox" name="reason" id="gift" value="gift"/>
				<label htmlFor="gift">Gift</label></li>

			<li><input type="checkbox" name="reason" id="hunting" value="hunting"/>
				<label htmlFor="hunting">Hunting Dog</label></li>

			<li><input type="checkbox" name="reason" id="breeding" value="breeding"/>
				<label htmlFor="breeding">Breeding Dog</label></li>

			<li><input type="checkbox" name="reason" id="guard" value="guard"/>
				<label htmlFor="guard">Guard Dog</label></li>

			<li><input type="checkbox" name="reason" id="senior" value="senior"/>
				<label htmlFor="senior">For a Senior</label></li>

			<li><input type="checkbox" name="reason" id="child" value="child"/>
				<label htmlFor="child">For a Child</label></li>

		</div>

		<div id="allergies">
			<ul><label className="main-label" htmlFor="allergies">Is anyone in your household allergic to pets?</label></ul>

			<li><input type="radio" id="yes" name="allergy" value='true' required/>
				<label htmlFor="yes">Yes</label></li>

			<li><input type="radio" id="no" name="allergy" value="false" required/>
				<label htmlFor="no">No</label></li>
		</div>

		<div id="pets-household">
			<ul><label className="main-label" id="number-label">How many pets are already in your household?
			</label></ul>
			<li><input type="number" onChange={handleChange("numberOfPets")} id="number" min="1" max="10" placeholder="0"/></li>
		</div>

		<div id="housing">
			<label className="main-label">What type of housing you reside?</label>
			<select id="dropdown">
				<option hidden >Select an option</option>
				<option value="apt">Apt / Condo</option>
				<option value="house">House</option>
				<option value="other">Other</option>
			</select>
		</div>

		<div id="prepare">
			<label className="main-label">How did you prepare yourself?</label>
		</div>
		<div id="textarea">
    	<textarea id="comments" onChange={handleChange("preparation")}
			  rows="10" cols="70" placeholder=" Write here how you prepared yourself for adoption."></textarea>
		</div>

		<div id="button">
			<button type="submit" id="submit" onClick={handleSubmit}>Submit</button>
		</div>


	</form>
</div>

  )
}

export default AdoptPet