import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Firestoresend from './firestoresend';
import './App.css';
import FirestoreDisplay from './firestoredisplay';
import Login from './login';
import Signup from './signup';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FirestoreDisplay />} />
          <Route path="/send" element={<Firestoresend />} />
          <Route path="/signup" element={<Signup  />} />
          <Route path="/Login" element={<Login />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;