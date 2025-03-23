import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import DocumentForm from './Components/DocumentForm';
import DocumentDetails from './Components/DocumentDetails';
import LandingPage from './Components/LandingPage';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/document/:id" element={<DocumentDetails/>} />
                <Route path="/document/new" element={<DocumentForm />} />
            </Routes>
        </Router>
    );
}

export default App;