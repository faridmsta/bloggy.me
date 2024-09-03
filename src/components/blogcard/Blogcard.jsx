import React from 'react'
import './Blogcard.css'
import { Link } from 'react-router-dom'

function Blogcard({item,index}) {
    return (

        <div className="blogCard" key={index}>
            <Link to={`/blogs/${item.author['name']}/${item.id}`} className="image">
                <img src={item.img} alt={item.title} />
            </Link>
            <Link to={`/blogs/${item.author['name']}/${item.id}`} className="info">
                <div className="category">
                    <p className={`${item.category}`} >{item.category}</p>
                </div>
                <div className="title">
                    <h2>{item.title}</h2>
                </div>
                <div className="content">
                    <p>{item.content}</p>
                </div>
            </Link>
            <Link to={`/${item.author['name']}`} className="user">
                <div className="ppimg">
                    <img src={item.author['ppimg']} alt="" />
                </div>
                <div className="userInfo">
                    <p>{item.author['name']}</p>
                    <p>{item.date['day']}/{item.date['month'] < 10 ? '0' + item.date['month'] : item.date['month']}/{item.date['year']}</p>
                </div>
            </Link>
        </div>

    )
}

export default Blogcard