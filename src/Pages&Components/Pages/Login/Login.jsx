import loginImg from '../../../assets/others/authentication2.png';
import backgroundImage from "../../../assets/images/bg.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://simple-authentications-backend.onrender.com/api/account/login/', formData);
            const { access, user_type } = response.data;
            localStorage.setItem('access', access);
            if (user_type === 'doctor') {
                navigate('/doctor');
            } else if (user_type === 'patient') {
                navigate('/patient');
            }
        } catch (error) {
            console.error('There was an error logging in!', error);
            setError('Login failed. Please check your username and password.');
        }
    };

    return (
        <div
            className="hero min-h-screen bg-base-200"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse gap-52">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Username"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        {error && (
                            <div className="form-control mt-3">
                                <span className="text-red-500">{error}</span>
                            </div>
                        )}
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary bg-[#FEDFBB] text-black hover:bg-slate-300">Log In</button>
                        </div>
                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <img className='w-[600px] h-[450px]' src={loginImg} alt="Login" />
                </div>
            </div>
        </div>
    );
};

export default Login;
