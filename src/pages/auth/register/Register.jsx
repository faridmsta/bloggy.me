import React, { useState } from 'react';
import './Register.css';
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
function Register() {

  const [spassword, setSpassword] = useState("");
  const [showpass, setShowpass] = useState(false);


  const [userinput, setUserinput] = useState({
    name: '',
    surname: '',
    username: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!userinput.name.trim() || !userinput.surname.trim() || !userinput.username.trim() || !userinput.email.trim() || !userinput.phone.trim() || !userinput.password.trim()) {
      toast.error("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userinput.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (userinput.password !== spassword) {
      toast.error("Passwords do not match");
      return;
    }

    console.log("Submitting form with data: ", userinput);

    setUserinput({
      name: '',
      surname: '',
      username: '',
      phone: '',
      email: '',
      password: '',
    });
    setSpassword('');
    setShowpass(false);


  
    toast.success("Registration successful!")
  }

  


  return (
    <div>
      <section className="register">
        <div className="left">
          <div className="formBox">
            <h2>Register</h2>
            <form action="">
              <div className="half">
                <div className="icon">
                  <VscBlank />
                </div>
                <Input
                  id='fNameinp'
                  classN=''
                  type='text'
                  labelN='First Name'
                  placeholder=''
                  value={userinput.name}
                  setValue={e => setUserinput({ ...userinput, name: e.target.value })}
                />
              </div>
              <div className="half">
                <Input
                  id='lNameinp'
                  classN=''
                  type='text'
                  labelN='Last Name'
                  placeholder=''
                  value={userinput.surname}
                  setValue={e => setUserinput({ ...userinput, surname: e.target.value })}
                />
              </div>
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
                <div className="icon">
                  <CiPhone />
                </div>
                <Input
                  id='phoneinp'
                  classN=''
                  type='tel'
                  labelN='Telephone'
                  placeholder=''
                  value={userinput.phone}
                  setValue={e => setUserinput({ ...userinput, phone: e.target.value })}
                />
              </div>
              <div className="half">
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
              <div className="half">
                <Input
                  id='spassinp'
                  classN=''
                  type='password'
                  labelN='Comfirm Password'
                  placeholder=''
                  value={spassword}
                  setValue={e => setSpassword(e.target.value)}
                />
              </div>
              <div className="full">
                <Link to='/login'>Already have an account?</Link>
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
  );
}

export default Register;
