import React, { useContext, useState } from 'react'
import './Searchsec.css'
import { CiSearch } from "react-icons/ci";
import Srcinput from '../context/Datasearch';
import Blogcarusel from './components/blogscarusel/Blogcarusel';



const data = [
    {
        id: 1,
        img: 'https://picsum.photos/id/2/400/300',
        ppimg: 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1e3b25/_orig/pixomatic_1572877090227.png',
        header: 'Niyə proqramlasdirma?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor...',
    }, 
    {
        id: 2,
        img: 'https://picsum.photos/id/633/400/300',
        ppimg: 'https://kpopping.com/documents/97/0/1440/230902-I-LL-LIT-Yunah-for-Vogue-Korea-Profile-Photos-documents-2.jpeg?v=294df',
        header: 'Hobbilərini qoru',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor...',
    },
    {
        id: 3,
        img: 'https://picsum.photos/id/132/400/300',
        ppimg: 'https://plus.college.indiana.edu/images/profiles/profiles-768x768/assistant.jpg',
        header: 'Bakıdaki yol problemi',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor...',
    },
    {
        id: 4,
        img: 'https://picsum.photos/id/999/400/300',
        ppimg: 'https://assets.entrepreneur.com/content/3x2/2000/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg?format=pjeg&auto=webp&crop=1:1',
        header: 'Yeməyi belə sev',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor...',
    },


]


const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

function Searchsec() {

    const [inputtxt, setInputtxt] = useState('')
    const contextdata = useContext(Srcinput)
    contextdata.setSearchinp(inputtxt)



    return (

        <section>
            <div className="container">
                <div className="searchsec">
                    <div className="searchbar">
                        <div className="searchwrap">
                            <CiSearch size={32} />
                            <input
                                value={inputtxt}
                                onChange={(e) =>{ 
                                    setInputtxt(e.target.value)
                                    scrollToTop()
                                }}
                                type="text" placeholder="Search for blog"
                            />
                        </div>
                    </div>
                    <div className="sercedBlogs">
                        <Blogcarusel data={data} inputtxt={inputtxt}  />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Searchsec