
"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function SignupPage() {


    const route = useRouter()
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        mobileno: '',
        speciality: '',
        email: '',
        password: '',
        confirm_password: '',
    });
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (formData.password !== formData.confirm_password) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const response = await fetch('https://appointment-nestjs.vercel.app/doctor/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const result = await response.json();
                console.log('User registered:', result);
                alert('Registration successful!');
                setFormData({
                    first_name: '',
                    last_name: '',
                    mobileno: '',
                    speciality: '',
                    email: '',
                    password: '',
                    confirm_password: '',
                });
                 route.push("/doctor/login")
            } else {
                throw new Error("email already existss")
                // console.error('Error registering user:', response.statusText);
                // alert('Registration failed. Please try again.');
            }
        } catch (error: any) {
            console.error('Error:', error);
            alert(error.message);
        }
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center ">
                <div className="w-full max-w-md px-8 py-2 bg-white shadow-lg rounded-lg">
                    <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Register</h1>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className='flex justify-between gap-10'>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange} 
                                    placeholder="Enter Your First Name Doe"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleChange} 
                                    placeholder="Enter Your Last Name"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                            <input
                                type="number"
                                name="mobileno"
                                value={formData.mobileno}
                                onChange={handleChange} 
                                placeholder="Enter Your Contact Number"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        

                        <div>
                            <label className="block text-sm font-medium text-gray-700">speciality</label>
                            <input
                                type="string"
                                name="speciality"
                                value={formData.speciality}
                                onChange={handleChange} 
                                placeholder="Enter Your speciality"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange} 
                                placeholder="Enter Your Email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                         
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    placeholder="********"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange} 
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder="********"
                                    name="confirm_password"
                                    value={formData.confirm_password}
                                    onChange={handleChange} 
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                        

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Register
                        </button>
                    </form>

                    <p className="mt-4 text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <a href="/doctor/login" className="text-indigo-600 hover:text-indigo-700">
                            Log In
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignupPage