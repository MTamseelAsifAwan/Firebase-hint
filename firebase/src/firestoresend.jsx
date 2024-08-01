import { useState, useEffect } from 'react';
import { firestore } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Firestoresend = () => {
  const [citiesData, setCitiesData] = useState([]);
  const [cityName, setCityName] = useState("");

 

  const addCity = async () => {
    try {
      await addDoc(collection(firestore, 'cities'), { name: cityName });
      setCityName('');
    } catch (error) {
      console.log('Error adding city', error);
    }
  };



  return (
    <>
<div>
    <h1>  Enter data</h1>
      {citiesData.map((item) => (
        <p key={item.id}>{JSON.stringify(item)}</p>
      ))}
      <input className=' border border-black rounded-lg'
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Enter city name"
      />
      <button className='bg-red-500 mt-1 border border-black rounded-lg' onClick={addCity}>Add City</button>
      </div>
    </>
  );
};

export default Firestoresend;