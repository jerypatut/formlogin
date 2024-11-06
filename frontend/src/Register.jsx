import React, { useState } from "react";
import './index.css';
import googleGif from './assets/google-gif.gif'; // Gambar Google Gif
import logo from './assets/loogo-01.png'; // Gambar logo
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Register() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Mengirim data ke server
        axios.post('http://localhost:8081/register', values)
            .then(res => {
                if (res.data.Status === "Success") {
                    navigate('/login');
                } else {
                    alert("Error bro");
                }
            })
            .catch(err => console.log(err)); // Menangani kesalahan
    };

    const googleLogin = () => {
        // Google Sign-in logic
        window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email";
    };

    return (
        <div className="main-container">
            <img src={logo} alt="Logo" />
            <h2>Hi, Welcome back! - Register Now</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nama</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        onChange={e => setValues({ ...values, name: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        onChange={e => setValues({ ...values, email: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        onChange={e => setValues({ ...values, password: e.target.value })}
                        required
                    />
                    
                    <div className="forgot-password">
                        <a href="#">Lupa Password?</a>
                    </div>
                </div>
                <button type="submit" className="login-btn">Register</button>
            </form>

            <div className="google-login" onClick={googleLogin}>
                <img src={googleGif} alt="Google Logo" />
                <span>Masuk dengan Google</span>
            </div>

            <div className="footer-text">
                Sudah punya akun? <Link to="/login">Login disini</Link>
            </div>

            <footer>
                Welcome to MatchupSkills | Copyright &copy; 2024 MatchupSkills
            </footer>
        </div>
    );
}

export default Register;
