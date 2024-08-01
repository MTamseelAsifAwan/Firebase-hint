// src/components/DisplayData.js

import React, { useEffect, useState } from 'react';
import { database } from './firebase';
import { ref, onValue } from 'firebase/database';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const DisplayData = () => {
  const [usersData, setUsersData] = useState(null);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user) {
          const usersRef = ref(database, 'users');
          onValue(usersRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
              // Convert data object to an array for easier rendering
              const usersArray = Object.keys(data).map(key => ({
                id: key,
                ...data[key],
              }));
              setUsersData(usersArray);
            } else {
              setUsersData([]);
            }
          });
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [user, navigate]);

  if (!usersData) {
    return (
      <div className="w-32 ml-96 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#065f46_0deg,#065f46_180deg,transparent_180deg,transparent_360deg)]">
        <span className="absolute w-[85%] flex justify-center items-center aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#34d399_0deg,#34d399_180deg,transparent_180deg,transparent_360deg)]"></span>
      </div>
    );
  }

  return (
    <div>
      <h1>All Users Data</h1>
      {usersData.length > 0 ? (
        <ul>
          {usersData.map(user => (
            <li key={user.id}>
              <h2>User ID: {user.id}</h2>
              <p><strong>Name:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default DisplayData;
