// src/components/DataForm.js

import React, { useState } from 'react';
import { database } from './firebase';
import { ref, set } from 'firebase/database';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

const DataForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user] = useAuthState(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      const userId = user.uid;

      set(ref(database, 'users/' + userId), {
        username: name,
        email: email,
      }).then(() => {
        alert('Data saved successfully!');
      }).catch((error) => {
        console.error('Error saving data: ', error);
      });
    } else {
      alert('You need to log in first');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
        className='bg-purple-500 border rounded-lg text-white ' 
          type="text" 
          placeholder='Name'
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          className='bg-purple-500 border rounded-lg text-white ' 

          placeholder='Email'
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <button className='bg-purple-600 text-white border rounded-lg w-20 font-bold' type="submit">Submit</button>
    </form>
  );
};

export default DataForm;
