import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import './User.css'

import { IoMailOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi2";

import Searchsec from './../../components/searchsec/Searchsec'
function User() {
  const { user } = useParams()

  const [dataUser, setDataUser] = useState([])
  const [dataUserBlogs, setDataUserBlogs] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8000/users?name=${user}`)
      .then(res => res.json())
      .then(res => setDataUser(res[0]))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:8000/blogs?author.name=${user}`)
      .then(res => res.json())
      .then(res => setDataUserBlogs(res))
  }, [])

  return (
    <div>
      <section className="user">
        <div className="container">
        <div className="backhome">
                <Link to="/"><FaArrowLeft/> Back to home</Link>
            </div>
          <div className="userWrap">
            <div className="userInfo">
              <div className="image">
                <img src={dataUser.ppimg} alt={dataUser.name} />

              </div>
              <div className="right">
                <h4>{dataUser.name}</h4>
                <h5>@{dataUser.username}</h5>
              </div>
            </div>
            <div className="biografy">
              <p>{dataUser.bio}</p>   
            </div>
            <div className="contact">
              <p><IoMailOutline /> | {dataUser.phone}</p>
              <p><HiOutlinePhone /> | {dataUser.mail}</p>
            </div>
           <Searchsec data={dataUserBlogs} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default User