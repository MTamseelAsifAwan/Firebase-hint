import React, { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [person, setPerson] = useState('');
    const navigate = useNavigate(); // Correctly use the hook inside the component

    const loginuser = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            setPerson(response.user.email);
            navigate('/'); // Navigate to the desired route after successful login
        } catch (error) {
            alert(error.message);
        }
    };
    const signuphandle =() =>{
        navigate('/signup');
    }

    return (
        <>
        <div>
            <h1 className=' flex justify-center items-center  font-bold text-black w-20 mt-3'>Login</h1>
            <form onSubmit={loginuser}>
                <label>Username:</label><br />
                <input className='bg-purple-700 border rounded-lg  text-white w-60 mt-3'
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="username"
                /><br />
                <label>Password:</label><br />
                <input className='bg-purple-700 border rounded-lg font-bold text-white w-40 mt-3'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                /><br />
                <input className='bg-purple-700 border rounded-lg font-bold text-white w-20 mt-3' type="submit" value="Submit" />
                <button className='bg-purple-700 border rounded-lg font-bold text-white w-20 mt-3' onClick={signuphandle} >Signup</button>
                {person && <h3>Welcome back {person}</h3>}
            </form>
            </div>
        </>
    );
};

export default Login;