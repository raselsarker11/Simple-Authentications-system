import { useState } from 'react';
import axios from 'axios';
import backgroundImage from "../../../assets/images/bg.png";
const SignUp = () => {
    const [username, setUsername] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [profile_picture, setProfile_picture] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirm_password] = useState('');
    const [address_line, setAddress_line] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [user_type, setUser_type] = useState('');
    const [error, setError] = useState('');

    const handleRegistration = async (event) => {
        event.preventDefault();

        setError('');

        if (password !== confirm_password) {
            setError('Passwords do not match!');
            alert('Passwords do not match!');
            return;
        }

        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            setError('Password must be at least eight characters long and contain at least one letter, one number, and one special character.');
            return;
        }

        const formData = new FormData();
        formData.append('username', username);
        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append('profile_picture', profile_picture);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('confirm_password', confirm_password);
        formData.append('address_line', address_line);
        formData.append('city', city);
        formData.append('state', state);
        formData.append('pincode', pincode);
        formData.append('user_type', user_type);

        try {
            console.log('Payload being sent:', formData);
            const response = await axios.post('http://127.0.0.1:8000/api/account/register/', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            console.log('Response from server:', response.data);
            if (response.status >= 200 && response.status < 300) {
                setError('Congratulations! Your Account Created Successfully.');
                alert('Congratulations! Your Account Created Successfully.');
                setUsername('');
                setFirst_name('');
                setLast_name('');
                setProfile_picture(null);
                setEmail('');
                setPassword('');
                setConfirm_password('');
                setAddress_line('');
                setCity('');
                setState('');
                setPincode('');
                setUser_type('');
                setError('');
                window.location.href = 'login';
            } else {
                setError(response.data?.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during axios request:', error);
            if (error.response) {
                setError(error.response.data?.message || 'Registration failed. Please try again.');
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-full max-w-full w-full bg-gray-100 py-16 pb-24" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <form className="bg-white p-8 rounded shadow-md w-full max-w-2xl" onSubmit={handleRegistration} encType="multipart/form-data">
                <h2 className="text-3xl font-bold mb-6 text-center">SignUp</h2>
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">User Type</label>
                    <select
                        name="user_type"
                        value={user_type}
                        onChange={(e) => setUser_type(e.target.value)}
                        className="mt-1 p-3 block w-full border border-gray-300 rounded"
                        required
                    >
                        <option value="">Select User Type</option>
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 p-3 block w-full border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-6 flex gap-4">
                    <div className="w-1/2">
                        <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                        <input
                            type="text"
                            name="first_name"
                            value={first_name}
                            onChange={(e) => setFirst_name(e.target.value)}
                            className="mt-1 p-3 block w-full border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                        <input
                            type="text"
                            name="last_name"
                            value={last_name}
                            onChange={(e) => setLast_name(e.target.value)}
                            className="mt-1 p-3 block w-full border border-gray-300 rounded"
                            required
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Profile Picture</label>
                    <input
                        type="file"
                        name="profile_picture"
                        onChange={(e) => setProfile_picture(e.target.files[0])}
                        className="mt-1 p-3 block w-full border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 p-3 block w-full border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-6 flex gap-4">
                    <div className="w-1/2">
                        <label className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 p-3 block w-full border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
                        <input
                            type="password"
                            name="confirm_password"
                            value={confirm_password}
                            onChange={(e) => setConfirm_password(e.target.value)}
                            className="mt-1 p-3 block w-full border border-gray-300 rounded"
                            required
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Address</label>
                    <input
                        type="text"
                        name="address_line"
                        placeholder="Line 1"
                        value={address_line}
                        onChange={(e) => setAddress_line(e.target.value)}
                        className="mt-1 p-3 block w-full border border-gray-300 rounded mb-3"
                        required
                    />
                    <div className="flex gap-4">
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="mt-1 p-3 block w-1/3 border border-gray-300 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="state"
                            placeholder="State"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className="mt-1 p-3 block w-1/3 border border-gray-300 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="pincode"
                            placeholder="Pincode"
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                            className="mt-1 p-3 block w-1/3 border border-gray-300 rounded"
                            required
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#61e945] text-white p-3 rounded hover:bg-green-600"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
