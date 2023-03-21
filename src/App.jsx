import { useState } from 'react'

import './App.css';
import Card from './components/Card';
import BarnList from './components/BarnList';
import Attributes from './components/Attributes';
function App() {
  const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY; 

  const [attributes, setAttributes] = useState({
    name: null,
    origin: null,
    temperaments: [],
    currentImage: "http://beepeers.com/assets/images/commerces/default-image.jpg",
    description: "No Description"

  });
  const [banned, setBanned] = useState([])
  const addToBanned = (attribute) => {
    
    let updatedBanned = new Set([...banned, attribute]);
    let updatedbanned = Array.from(updatedBanned)
    setBanned(updatedbanned)
   
  }
  async function fetchData() {

    const url = `https://api.thecatapi.com/v1/images/search?limit=1&api_key=${ACCESS_KEY}&has_breeds=1`;
    let data;
    let passed = false;
    let bannedAttributes = new Set(banned);
    
    while (!passed) {
      const response = await fetch(url, { method: "GET" });
      data = await response.json();
      let { temperament } = data[0].breeds[0];
      let tempList = temperament.split(", ");
      let encounteredBan = false;
      console.log(tempList)
      for (let i = 0; i < tempList.length; i++) {
        if (bannedAttributes.has(tempList[i])) {
          encounteredBan = true;
          break
        }
      }
      if (encounteredBan) {
        continue
      }
      passed = true;
    }
    const { name, origin, description, temperament } = data[0].breeds[0];

    const temperaments = temperament.split(", ");

    const updatedAttributes = {
      name: name,
      origin: origin,
      temperaments: temperaments,
      currentImage: data[0].url,
      description: description
    }
    setAttributes(updatedAttributes);
    }

  return (
    <div className="App">
      <h1 className='header blue centered'><span className='yellow'> Cat</span>ify</h1>
      <div className="components">
        <Attributes name={attributes.name} origin={attributes.origin} temperaments={attributes.temperaments} addToBanned={addToBanned} />
        <Card fetchData={fetchData} currentImage={attributes.currentImage} description = {attributes.description} />
        <BarnList banned={banned} />
      </div>
    </div>
  )
}

export default App
