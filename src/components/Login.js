import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "../pages/Index";
import Gallery from '../pages/Gallery';
import LoginForm from './LoginForm';
import LogoutScreen from './LogoutScreen';

function Login() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToHome, setRedirectToHome] = useState(false); // State for redirection

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            setLoggedIn(true);
            setRedirectToHome(true); 
        } else {
            alert("Invalid username or password");
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUsername('');
        setPassword('');
        setRedirectToHome(false);
    };

    return (
        <Router>
            <div>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                        <div class="container">
                            <Link to="/" class="navbar-brand">KittyDeluxe</Link>
                            <div>
                                <ul class="navbar-nav ml-auto">
                                    {loggedIn ? (
                                        <>
                                            <li class="nav-item">
                                                <Link to="/home" class="nav-link">Home</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to="/gallery" class="nav-link">Gallery</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to="/logout" onClick={handleLogout} class="nav-link">Logout</Link>
                                            </li>
                                        </>
                                    ) : (
                                        <li class="nav-item">
                                            <Link to="/" class="nav-link">Login</Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="mt-4"> {/* Adding padding below the navbar */}
                    <Routes>
                        {/* Redirect to home page if logged in */}
                        {redirectToHome && <Route path="/" element={<Home />} />}
                        <Route path="/" element={<LoginForm handleLogin={handleLogin} username={username} setUsername={setUsername} password={password} setPassword={setPassword} />} />
                        <Route path="/home" element={loggedIn ? <Home /> : null} />
                        <Route path="/gallery" element={loggedIn ? <Gallery /> : null} />
                        <Route path="/logout" element={loggedIn ? <Logout handleLogout={handleLogout} /> : <LogoutScreen/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

function Logout({ handleLogout }) {
    handleLogout();
    return null; 
}

export default Login;
