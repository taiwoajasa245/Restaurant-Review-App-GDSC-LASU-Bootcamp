import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [user, setUser] = useState(null); // State to store user information
    const [error, setError] = useState(null); // State to handle errors

    const classX = "mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
    const url = process.env.REACT_APP_SERVER_URL;

    const history = useHistory();

    // useEffect(() => {
    //     // Fetch user information if user is logged in (for example, from local storage)
    //     const storedUser = localStorage.getItem('user');
    //     console.log('Stored user:', storedUser); // Log storedUser value
    //     if (storedUser) {
    //         setUser(JSON.parse(storedUser));
    //     }
    // }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/api/login`, formData);
            console.log('Login successful:', response.data);
            const userData = response.data.data; // Assuming your server returns user data upon successful login
            alert(response.data.message);
            setUser(userData); // Store user data in state

            const token = response.data.token; // Assuming your server returns a token upon successful login
            localStorage.setItem('token', token); // Store the token in localStorage


            localStorage.setItem('user', JSON.stringify(userData)); // Store user data in local storage

            // After successful login, redirect to the user's dashboard with user ID
            history.push(`/users/${response.data.id}/dashboard`);

        } catch (error) {
            console.error('Login error:', error);
            if (error) {
                alert(error.response.data.message);
            }

            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div>

            <div className="max-w-4xl mx-auto p-5 md:flex md:items-center md:justify-between">
                {/* Your existing login form JSX */}
                <div>
                    <h1 className="text-3xl font-bold">Log In to Yelp</h1>

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
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className={classX} />
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className={classX} />
                        <input type="submit" value="Log In" className="flex w-full text-center mt-2  bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-bold text-gray-800 hover:bg-gray-200 " />
                    </form>
                    <small>New to Yelp? <Link to='/signup'>  <a className='text-blue-900'>Sign up </a>  </Link></small>

                </div>
            </div>

        </div>
    );
}

export default Login;

