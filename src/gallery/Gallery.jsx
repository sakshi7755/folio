import { useState } from "react";
import "../gallery/Gallery.css";
import { FaTimes } from "react-icons/fa";
import img1 from "../img/Banner1.jpg";
import img2 from "../img/Banner2.jpg";
import img3 from "../img/Banner3.jpg";
import img4 from "../img/Banner4.png";
import img5 from "../img/Banner5.png";
import img6 from "../img/Banner6.png";
import img7 from "../img/Banner7.png";
import img8 from "../img/Banner8.png";
import img9 from "../img/Banner9.png";
import img10 from "../img/Banner10.png";
import img11 from "../img/Banner11.png";
import img12 from "../img/Banner12.jpg";
import img13 from "../img/Banner13.jpg";
import img14 from "../img/Banner14.jpg";
import img15 from "../img/Banner15.jpg";
import img16 from "../img/Banner16.gif";
import img17 from "../img/Banner17.jpg";
import img18 from "../img/Banner18.jpg";
import img19 from "../img/Banner19.jpg";
import img20 from "../img/Banner20.jpg";
import img21 from "../img/Banner21.jpg";
import img22 from "../img/Banner22.jpg";
import img23 from "../img/Banner23.jpg";
import img24 from "../img/Banner24.jpg";
import img25 from "../img/Banner25.jpg";
import img26 from "../img/Banner26.jpg";
import img27 from "../img/Banner27.jpg";
import img28 from "../img/Banner28.jpg";
import img29 from "../img/Banner29.jpg";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },  {
        id: 7,
        imgSrc: img7,
      },  {
        id: 8,
        imgSrc: img8,
      },
      {
        id: 9,
        imgSrc: img9,
      },
      {
        id: 10,
        imgSrc: img10,
      },
      {
        id: 11,
        imgSrc: img11,
      },
      {
        id: 12,
        imgSrc: img12,
      },  {
          id: 13,
          imgSrc: img13,
        },  {
          id: 14,
          imgSrc: img14,
        },
        {
          id: 15,
          imgSrc: img15,
        },
        {
          id: 16,
          imgSrc: img16,
        },
        {
            id: 17,
            imgSrc: img17,
          },
          {
            id: 18,
            imgSrc: img18,
          },
          {
            id: 19,
            imgSrc: img19,
          },  {
              id: 20,
              imgSrc: img20,
            },  {
              id: 21,
              imgSrc: img21,
            },
            {
              id: 22,
              imgSrc: img22,
            },
            {
              id: 23,
              imgSrc: img23,
            },
            {
                id: 24,
                imgSrc: img24,
              },
              {
                id: 25,
                imgSrc: img25,
              },
              {
                id: 26,
                imgSrc: img26,
              },  {
                  id: 27,
                  imgSrc: img27,
                },  {
                  id: 28,
                  imgSrc: img28,
                },
                {
                  id: 29,
                  imgSrc: img29,
                },
           


  ];
 
  const [model, setModel] = useState(false)

  const [tempImgSrc ,setTempImgSrc] = useState("")

      const getImg = imgSrc=>{
            setTempImgSrc(imgSrc)
            setModel(true)
        }

  return (
    <>
      <div className={model ? "model open" :"model"}>
<img src={tempImgSrc} alt=""/>

<FaTimes  onClick={()=> setModel(false)}/>

  </div>

      <h1 style={{ textAlign: "center", paddingTop: "7rem" ,fontSize:"2rem" }}>
        My work{" "}
      </h1>
     

      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={()=>getImg(item.imgSrc)}>
              <img src={item.imgSrc} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
