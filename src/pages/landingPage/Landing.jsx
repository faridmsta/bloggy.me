import React, { useContext, useEffect, useState } from 'react';
import './Landing.css';
import Swiper from '../../components/swiper/Swiper.jsx';
import imgswipe1 from '../../components/swiper/components/img/technoligies.jpg';
import Aboutgrid from '../../components/aboutgrid/Aboutgrid.jsx';
import Searchsec from '../../components/searchsec/Searchsec.jsx';
import Srcinput from './../../components/context/Datasearch.jsx';
import Swiperofblogs from '../../components/swiperofblogs/Swiperofblogs.jsx';

const caruselitems = [
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
    "id": 1,
    "category": "Tech",
    "title": "What is new in 2024 Tech",
    "img": "https://www.e-computers.co.uk/wp-content/uploads/2022/01/seyed-sina-fazeli-XP9JF6jyRGc-unsplash.jpg",
    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    "author": {
      "name": "Lane doe",
      "email": "lane.doe@example.com",
      "bio": "Lane is a tech enthusiast and a writer",
      "ppimg": "https://img.freepik.com/premium-photo/close-up-portrait-smiling-young-woman-city_1048944-12068603.jpg"
    },
    "date": {
      "day": 12,
      "month": 5,
      "year": 2024
    },
    "likes": 0,
    "comments": [
      {
        "CAuthor": "",
        "content": "",
        "likes": 0
      }
    ]

  },
  {
    "id": 2,
    "category": "Biology",
    "title": "How pollution is working?",
    "img": "https://cdn.britannica.com/51/195951-050-8265B115/pollution-bags-plastics-ocean-food-packaging.jpg",
    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    "author": {
      "name": "Lane doe",
      "email": "lane.doe@example.com",
      "bio": "Lane is a tech enthusiast and a writer",
      "ppimg": "https://img.freepik.com/premium-photo/close-up-portrait-smiling-young-woman-city_1048944-12068603.jpg"
    },
    "date": {
      "day": 12,
      "month": 5,
      "year": 2024
    },
    "likes": 0,
    "comments": [
      {
        "CAuthor": "",
        "content": "",
        "likes": 0
      }
    ]

  },
  {
    "id": 3,
    "category": "Food",
    "title": "Cake for 1 minute",
    "img": "https://static01.nyt.com/images/2023/10/27/multimedia/27cakerex-plzm/27cakerex-plzm-threeByTwoMediumAt2X.jpg",
    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    "author": {
      "name": "Lane doe",
      "email": "lane.doe@example.com",
      "bio": "Lane is a tech enthusiast and a writer",
      "ppimg": "https://img.freepik.com/premium-photo/close-up-portrait-smiling-young-woman-city_1048944-12068603.jpg"
    },
    "date": {
      "day": 12,
      "month": 5,
      "year": 2024
    },
    "likes": 0,
    "comments": [
      {
        "CAuthor": "",
        "content": "",
        "likes": 0
      }
    ]

  }
]


const lastdata = [
  {
    "id": 1,
    "category": "Tech",
    "title": "What is new in 2024 Tech",
    "img": "https://www.e-computers.co.uk/wp-content/uploads/2022/01/seyed-sina-fazeli-XP9JF6jyRGc-unsplash.jpg",
    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    "author": {
      "name": "Lane doe",
      "email": "lane.doe@example.com",
      "bio": "Lane is a tech enthusiast and a writer",
      "ppimg": "https://img.freepik.com/premium-photo/close-up-portrait-smiling-young-woman-city_1048944-12068603.jpg"
    },
    "date": {
      "day": 12,
      "month": 5,
      "year": 2024
    },
    "likes": 0,
    "comments": [
      {
        "CAuthor": "",
        "content": "",
        "likes": 0
      }
    ]

  },
  {
    "id": 2,
    "category": "Biology",
    "title": "How pollution is working?",
    "img": "https://cdn.britannica.com/51/195951-050-8265B115/pollution-bags-plastics-ocean-food-packaging.jpg",
    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    "author": {
      "name": "Lane doe",
      "email": "lane.doe@example.com",
      "bio": "Lane is a tech enthusiast and a writer",
      "ppimg": "https://img.freepik.com/premium-photo/close-up-portrait-smiling-young-woman-city_1048944-12068603.jpg"
    },
    "date": {
      "day": 12,
      "month": 5,
      "year": 2024
    },
    "likes": 0,
    "comments": [
      {
        "CAuthor": "",
        "content": "",
        "likes": 0
      }
    ]

  },
  {
    "id": 3,
    "category": "Food",
    "title": "Cake for 1 minute",
    "img": "https://static01.nyt.com/images/2023/10/27/multimedia/27cakerex-plzm/27cakerex-plzm-threeByTwoMediumAt2X.jpg",
    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    "author": {
      "name": "Lane doe",
      "email": "lane.doe@example.com",
      "bio": "Lane is a tech enthusiast and a writer",
      "ppimg": "https://img.freepik.com/premium-photo/close-up-portrait-smiling-young-woman-city_1048944-12068603.jpg"
    },
    "date": {
      "day": 12,
      "month": 5,
      "year": 2024
    },
    "likes": 0,
    "comments": [
      {
        "CAuthor": "",
        "content": "",
        "likes": 0
      }
    ]

  }
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

  const [dataBlogs, setDataBlogs] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => res.json())
      .then(res => setDataBlogs(res))
  }, [])

  const swiperData = [...dataBlogs].sort((a, b) => b.likes - a.likes).slice(0, 4)
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
            <Swiper items={swiperData} />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <Searchsec data={dataBlogs} />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="recomented">
            <div className="heading">
              <h2>Recommended</h2>
            </div>
            <Swiperofblogs data={dataBlogs} />
          </div>
        </div>
      </section>
      <Aboutgrid />
    </div >
  );
}

export default Landing;
