import React from 'react'
import './Aboutgrid.css'
import rec65 from './components/img/rectangle65.png'
import rec66 from './components/img/rectangle66.jpg'
import rec68 from './components/img/rectangle68.jpg'
import rec74 from './components/img/rectangle74.jpg'
import { Link } from 'react-router-dom'
function Aboutgrid() {
    return (
        <section className='whatisbloogyme' >
            <div className="container">
                <div className="whatisbloogymewrap">
                    <h2>What is Bloggy.me</h2>
                    <div className="grids">
                        <div className="gridbox">
                            <div className="text">
                                <p>
                                    Поставка <br />
                                    программного <br /> обеспечения
                                </p>
                            </div>
                        </div>

                        <div className="gridbox">
                            <div className="text">
                                <p>
                                    Поставка <br />
                                    программного <br /> обеспечения
                                </p>
                            </div>
                            <div className="img">
                                <img src={rec65} alt="" />
                            </div>
                        </div>

                        <div className="gridbox">
                            <div className="img">
                                <img src={rec66} alt="" />
                            </div>
                            <div className="text">

                                <p>
                                    Поставка <br />
                                    программного <br /> обеспечения
                                </p>
                            </div>
                        </div>

                        <div className="gridbox">
                            <div className="text">
                                <p>
                                    Поставка <br />
                                    программного <br /> обеспечения
                                </p>
                            </div>
                        </div>

                        <div className="gridbox">
                            <div className="img">
                                <img src={rec68} alt="" />
                            </div>
                            <div className="text">
                                <p>
                                    Поставка <br />
                                    программного <br /> обеспечения
                                </p>
                            </div>
                        </div>

                        <div className="gridbox gridboxmore">
                            <Link>More</Link>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutgrid