import { BsFilterRight } from "react-icons/bs";
import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import './Allblogs.css'
import { Link } from "react-router-dom";
import Blogcard from './../../components/blogcard/Blogcard'

function AllBlogs() {
    const [dataBlogs, setDataBlogs] = useState([])
    const [inputtxt, setInputtxt] = useState('')

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then(res => setDataBlogs(res))
    })

    const filterData =
        dataBlogs
            .filter((item) => item.title.toLowerCase().includes(inputtxt.toLowerCase()) || item.content.toLowerCase().includes(inputtxt.toLowerCase()))


    return (
        <div>
            <section className="allblogs">
                <div className="container">
                    <div className="allblogsWrap">
                        <div className="searchsec">
                            <div className="searchbar">
                                <div className="searchwrap">
                                    <CiSearch size={32} />
                                    <input
                                        value={inputtxt}
                                        onChange={(e) => {
                                            setInputtxt(e.target.value)
                                        }}
                                        type="text" placeholder="Search for blog"
                                    />
                                </div>
                            </div>
                            <div className="filterOpen">
                                <BsFilterRight size={32} />
                            </div>
                        </div>
                        <div className="filter">

                        </div>
                        <div className="cards">
                            {
                                filterData.length != 0 ?
                                    filterData
                                        .filter((item) => item.title.toLowerCase().includes(inputtxt.toLowerCase()) || item.content.toLowerCase().includes(inputtxt.toLowerCase()))
                                        .map((item, index) => (
                                            <Blogcard item={item} index={index} />
                                        ))
                                    :
                                    <p style={{ textAlign: 'center', width: '100%' }}>
                                        No blogs found
                                    </p>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AllBlogs