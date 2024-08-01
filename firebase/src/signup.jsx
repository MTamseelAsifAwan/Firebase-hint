import React, { useState } from 'react';
import { auth, database } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from "firebase/database";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [person, setPerson] = useState('');
    const navigate = useNavigate(); // Use the useNavigate hook for navigation

    const writeUserData = (userId, email) => {
        set(ref(database, 'users/' + userId), {
            email: email,
        }).then(() => {
            console.log("Data saved successfully.");
        }).catch((error) => {
            console.error("Data could not be saved: " + error);
        });
    };

    const registerWithFirebase = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("Email:", email);
        console.log("Password:", password);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            setPerson(response.user.email);
            writeUserData(response.user.uid, response.user.email);
            navigate('/'); // Navigate to the home page after successful signup
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={registerWithFirebase} className="flex flex-col justify-center items-center">
                <h1 className='bg-slate-400 w-full flex justify-center'>Signup Form</h1>
                <input
                    className='bg-purple-300 border rounded-lg text-white w-60 mt-3'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="abc@example.com"
                />
                <input
                    className='bg-purple-300 border rounded-lg text-white w-60 mt-3'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className='bg-purple-700 border rounded-lg font-bold text-white w-20 mt-3' type="submit">
                    Register
                </button>
                {person && <h3 className='user-email'>{person}</h3>}
            </form>
        </div>
    );
};

export default Signup;
