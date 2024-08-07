import React, { useContext, useEffect, useState } from 'react';
import './Landing.css';
import Swiper from '../../components/swiper/Swiper.jsx';
import imgswipe1 from '../../components/swiper/components/img/technoligies.jpg';
import Aboutgrid from '../../components/aboutgrid/Aboutgrid.jsx';
import Searchsec from '../../components/searchsec/Searchsec.jsx';
import Srcinput from './../../components/context/Datasearch.jsx';
import Swiperofblogs from '../../components/swiperofblogs/Swiperofblogs.jsx';

const items = [
  {
    src: imgswipe1,
    header: 'Blogname',
    alt: 'Technoligies',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ad laborum minus laudantium.Lorem ipsum, dolor sit amet consectetur adipisicing elit... ',
    link: '/tech',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/1440/400',
    header: 'Blogname2',
    alt: 'photoinfo',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ad laborum minus laudantium.Lorem ipsum, dolor sit amet consectetur adipisicing elit... ',
    link: '/tech',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1440/400',
    header: 'Blogname3',
    alt: 'photoinfo',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ad laborum minus laudantium.Lorem ipsum, dolor sit amet consectetur adipisicing elit... ',
    link: '/tech',
    key: 3,
  },
  {
    src: 'https://picsum.photos/id/456/1440/400',
    header: 'Blogname4',
    alt: 'photoinfo',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ad laborum minus laudantium.Lorem ipsum, dolor sit amet consectetur adipisicing elit... ',
    link: '/tech',
    key: 4,
  },
];

const recomentedData = [
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

function Landing() {
  const [swiperClass, setSwiperClass] = useState('');
  const [swiperMaxHeight, setSwiperMaxHeight] = useState(1000);
  const contextData = useContext(Srcinput);

  useEffect(() => {
    if (contextData.searchinp.length > 0) {

      let startHeight = swiperMaxHeight;
      setSwiperClass('op0');

      const animateHeight = () => {
        startHeight -= 100;
        if (startHeight <= 0) {
          setSwiperMaxHeight(0);
        } else {
          setSwiperMaxHeight(startHeight);
          requestAnimationFrame(animateHeight);
        }
      };

      animateHeight();
    } else {
      setSwiperClass('');
      setSwiperMaxHeight(700);
    }
  }, [contextData.searchinp]);

  return (
    <div>
      <section
        style={{
          maxHeight: swiperMaxHeight,
        }}
        className={`SwiperAll ${swiperClass}`}
      >
        <div className="container">
          <div className="swiper">
            <Swiper items={items} />
          </div>
        </div>
      </section>
      <Searchsec />
      <section>
        <div className="container">
          <div className="recomented">
            <div className="heading">
              <h2>Recommended</h2>
            </div>
            <Swiperofblogs data={recomentedData} />
          </div>
        </div>
      </section>
      <Aboutgrid />
    </div >
  );
}

export default Landing;
