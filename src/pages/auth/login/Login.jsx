import React, { useState } from 'react';
import './Login.css';
import logicon from './../components/img/Login-amico.svg';
import Input from '../../../components/input/Input';
import toast from 'react-hot-toast';

import { CiAt } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { RiEyeLine } from "react-icons/ri";
import { RiEyeCloseLine } from "react-icons/ri";
import { VscBlank } from "react-icons/vsc";
import { Link } from 'react-router-dom';


function Login() {



    const [showpass, setShowpass] = useState(false);

    const [userinput, setUserinput] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Basic input validation
        if (!userinput.username.trim() || !userinput.email.trim() || !userinput.password.trim()) {
            toast.error("All fields are required.");
            return;
        }
    
        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userinput.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
    
        // Mock API call or form submission
        console.log("Submitting login form with data: ", userinput);
    
        // Clear form fields after submission (if needed)
        setUserinput({
            username: '',
            email: '',
            password: '',
        });
    
        toast.success("Login successful!");
    };
    

    return (
        <div>
            <section className="login">
                <div className="left">
                    <div className="formBox">
                        <h2>Login</h2>
                        <form action="">
                            <div className="full">
                                <div className="icon">
                                    <CiAt />
                                </div>
                                <Input
                                    id='userNameinp'
                                    classN=''
                                    type='text'
                                    labelN='Username'
                                    placeholder=''
                                    value={userinput.username.toLocaleLowerCase()}
                                    setValue={e => setUserinput({ ...userinput, username: e.target.value })}
                                />
                            </div>
                            <div className="full">
                                <div className="icon">
                                    <CiMail />
                                </div>
                                <Input
                                    id='emailinp'
                                    classN=''
                                    type='email'
                                    labelN='Email'
                                    placeholder=''
                                    value={userinput.email}
                                    setValue={e => setUserinput({ ...userinput, email: e.target.value })}
                                />
                            </div>
                            <div className="full">
                                <div onClick={() => { setShowpass(!showpass) }} className="icon">
                                    {showpass ? <RiEyeLine /> : <RiEyeCloseLine />}
                                </div>
                                <Input
                                    id='passinp'
                                    classN=''
                                    type={showpass ? 'text' : 'password'}
                                    labelN='Password'
                                    placeholder=''
                                    value={userinput.password}
                                    setValue={e => setUserinput({ ...userinput, password: e.target.value })}
                                />
                            </div>

                            <div className="full">
                                <Link to='/reg'>Dont have an account?</Link>
                            </div>
                            <div className="full">
                                <button type='submit' onClick={handleSubmit} >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="right">
                    <img src={logicon} alt="Register Illustration" />
                </div>
            </section>
        </div>
    )
}

export default Login