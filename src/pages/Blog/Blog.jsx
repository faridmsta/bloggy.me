import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import './Blog.css'

function Blog() {
    
    const {user,id} = useParams()
    
    const [dataBlog, setDataBlog] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/blogs?author_name=${user}&id=${id}`)
            .then(res => res.json())
            .then(res => setDataBlog(res[0]))
    },[])



  return (
    <>
    <section className="blog">
        <div className="container">
            <div className="backhome">
                <Link to="/"><FaArrowLeft/> Back to home</Link>
            </div>
            <div className="blogWrap">
                <div className="intro">
                    <div className="bgGradient">
                        <h2>
                            {dataBlog.title}
                        </h2>
                    </div>
                        <img src={dataBlog.img} alt="" />
                </div>
                <div className="blogContent">
                    <p>{dataBlog.content}</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Blog