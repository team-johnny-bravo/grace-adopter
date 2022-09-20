//rafce
import React, {useCallback} from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  
  const pets = [{
  "id": 1,
  "name": "Josie",
  "imgUrl": "http://dummyimage.com/249x100.png/dddddd/000000"
}, {
  "id": 2,
  "name": "Dorolisa",
  "imgUrl": "http://dummyimage.com/138x100.png/dddddd/000000"
}, {
  "id": 3,
  "name": "Burton",
  "imgUrl": "http://dummyimage.com/219x100.png/cc0000/ffffff"
}, {
  "id": 4,
  "name": "Joann",
  "imgUrl": "http://dummyimage.com/115x100.png/5fa2dd/ffffff"
}, {
  "id": 5,
  "name": "Chandler",
  "imgUrl": "http://dummyimage.com/196x100.png/ff4444/ffffff"
}, {
  "id": 6,
  "name": "Wilek",
  "imgUrl": "http://dummyimage.com/135x100.png/ff4444/ffffff"
}, {
  "id": 7,
  "name": "Jacqueline",
  "imgUrl": "http://dummyimage.com/173x100.png/ff4444/ffffff"
}, {
  "id": 8,
  "name": "Neale",
  "imgUrl": "http://dummyimage.com/205x100.png/dddddd/000000"
}, {
  "id": 9,
  "name": "Zechariah",
  "imgUrl": "http://dummyimage.com/208x100.png/ff4444/ffffff"
}, {
  "id": 10,
  "name": "Emmeline",
  "imgUrl": "http://dummyimage.com/218x100.png/dddddd/000000"
}]


  return (
    <div className='home'>
        <div>
            <img src="https://image.shutterstock.com/image-photo/collage-different-dogs-on-white-600w-1724568655.jpg " alt="Photo of Pup" />
        </div>
        <div>
          {pets.map(pet=>{
            const handleOnClick = useCallback(() => navigate(`/pet/${pet.id}`, {replace: true}), [navigate]);
            return (
                  <div className='singlePet'>
                    <a onClick={handleOnClick}>
                        <div className='petImg'>
                        <img src={pet.imgUrl} alt={pet.name}/>
                        </div>
                        <div className='petName'>{pet.name}</div>
                    </a>
                  </div>
                )
          })}
        </div>
    </div>
  )
}

export default Home