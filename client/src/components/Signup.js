import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Signup() {
    const history = useHistory();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        zipcode: '',
        month: '',
        day: '',
        year: ''
    });

    const classX = "mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
    const url = process.env.REACT_APP_SERVER_URL;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/api/signup`, formData);
            console.log('Signup successful:', response.data);
            // Show alert with message from API response
            alert(response.data.message);
            // Redirect user to login page
            history.push('/login');
        } catch (error) {
            if (error) {
                alert(error.response.data.message);
            }

            // Handle signup error, such as displaying an error message to the user
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-5 md:flex md:items-center md:justify-between">
            <div>
                <h1 className="text-3xl font-bold">Sign Up for Yelp</h1>
                <p>Connect with great local businesses.</p>
                <p>By continuing, you agree to Yelp’s <a href="https://www.yelp.com/static?p=tos">Terms of Service</a> and acknowledge Yelp’s <a href="https://www.yelp.com/tos/privacy_policy">Privacy Policy</a>.</p>
            </div>

            <div className="mt-5">
                <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <img src={process.env.PUBLIC_URL + "/img/google.svg"} className="w-5" alt="Google" />
                    <span>Continue with Google</span>
                </button>
                <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <img src={process.env.PUBLIC_URL + "/img/apple.svg"} className="w-5" alt="Apple" />
                    <span>Continue with Apple</span>
                </button>
                <p className="text-gray-400">Don't worry, we never post without your permission.</p>
            </div>

            <fieldset className="my-5 w-full text-center">
                <legend>OR</legend>
            </fieldset>

            <div className="mt-5">
                <form onSubmit={handleSubmit} className="max-w-xs">
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className={classX} />
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className={classX} />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className={classX} />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className={classX} />
                    <input type="number" name="zipcode" placeholder="ZIP Code" value={formData.zipcode} onChange={handleChange} required className={classX} />
                    <p>Birthday <span className='text-gray-200'>Optional</span></p>
                    <input type="month" name="month" placeholder="Month" required value={formData.month} onChange={handleChange} className={classX} />
                    <input type="number" name="day" placeholder="Day" required value={formData.day} onChange={handleChange} className={classX} />
                    <input type="number" name="year" placeholder="Year" required value={formData.year} onChange={handleChange} className={classX} />
                    <input type="submit" value="Sign Up" className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outlin" />
                </form>

                <small>Already on Yelp? <Link to='/login'>  <a className='text-blue-900'>Log in</a>  </Link></small>
            </div>
        </div>
    );
}

export default Signup;
