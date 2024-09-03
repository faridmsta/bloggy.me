import React, { useContext, useState } from 'react'
import './Searchsec.css'
import { CiSearch } from "react-icons/ci";
import Srcinput from '../context/Datasearch';
import Blogcarusel from './components/blogscarusel/Blogcarusel';





const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function Searchsec({ data }) {

    const [inputtxt, setInputtxt] = useState('')
    const contextdata = useContext(Srcinput)
    contextdata.setSearchinp(inputtxt)



    return (

        <section>

            <div className="searchsec">
                <div className="searchbar">
                    <div className="searchwrap">
                        <CiSearch size={32} />
                        <input
                            value={inputtxt}
                            onChange={(e) => {
                                setInputtxt(e.target.value)
                                scrollToTop()
                            }}
                            type="text" placeholder="Search for blog"
                        />
                    </div>
                </div>
                <div className="sercedBlogs">
                    <Blogcarusel data={data} inputtxt={inputtxt} />
                </div>
            </div>

        </section>

    )
}

export default Searchsec