import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
    <div className="jumbotron bg-light p-5">
        <h1 className="display-4">Welcome to RealTime Collaboration Tool</h1>
        <p className="lead">
            Real-time features enhance user engagement by delivering immediate feedback and responses.
        </p>
                <hr className="my-4" />
                <p>
            Building real-time applications with the MERN stack offers numerous advantages, from enhanced user engagement to efficient data handling. 
                   </p>
        
        <div className="mt-4">
            <Link to="/register" className="btn btn-primary btn-lg me-3">Register</Link>
            <Link to="/login" className="btn btn-secondary btn-lg">Login</Link>
        </div>
    </div>
);

export default LandingPage;
