import React, { useState } from "react";
import image1 from "../assets/slipper/biryani.png";
import image2 from "../assets/slipper/burger.png";
import image3 from "../assets/slipper/chocolate-cake-with-chocolate-sprinkles.png";
import image4 from "../assets/slipper/ice.png";
import image5 from "../assets/slipper/idli.png";
import image6 from "../assets/slipper/noodles.png";
import image7 from "../assets/slipper/pizza.png";
import image8 from "../assets/slipper/rice.png";
import image9 from "../assets/slipper/shawarma.png";
import image10 from "../assets/slipper/spagati.png";
import image11 from "../assets/slipper/Cupcake.png";
import image12 from "../assets/slipper/curry.png";
import image13 from "../assets/slipper/frenchFries.png";
import image14 from "../assets/slipper/Pastry.png";
import image15 from '../assets/slipper/samosa.png';
import rightArrow from '../assets/slipper/arrow-sm-right-svgrepo-com.svg'
import leftArrow from '../assets/slipper/arrow-sm-left-svgrepo-com.svg';

function Slipper() {
  const [currentState , setCurrentState]=useState(0);

  const backMove = ()=>{

    setCurrentState((prevIndex)=>(prevIndex === 0 ? 0 : prevIndex-1));
    console.log(currentState);
  }
  const frontMove=()=>{

    setCurrentState((prevIndex)=>(prevIndex===4 ? 4:prevIndex+1))
    console.log(currentState);

  }

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15
  ];
  const names = [
    "Biryani","Burger","Cakes","Ice Cream","Idli","Noodles","Pizza","Curry","Shawarma","Manchuria","cupCake" ,"Curry","FrenchFries","Pastry","Samosa"
  ]

  const imageElements = [];
  
  images.forEach((image, index) => {
    imageElements.push(
      <div key={index} className="flex-shrink-0 w-36 h-56 m-1 cursor-pointer" style={{transform:`translateX(-${currentState*200}%)`,transition: 'transform 0.3s ease-in-out'}}>
        <img className="w-full h-44 object-contain" src={image} alt={`Slipper ${index + 1}`} />
        <p className="w-full text-center font-semibold font-sans text-gray-700">{names[index]}</p>
      </div>
    );
  });

  return (
    <>
    <div className="flex w-full justify-center items-center mt-2">
  
    
    <div className="w-4/5 h-auto bg-white " >
    <div className="flex justify-between ">
   <p className="ml-9 font-bold font-sans text-2xl text-gray-900">Cook, Taste, Repeat!😋</p>

   <div className="flex mr-11 space-x-2">

   <button >
   <img src={leftArrow} alt="left Arrow" className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-400 transition-colors" onClick={backMove} />
   </button>
 
  <button >
  <img src={rightArrow} alt="Right Arrow" className="w-6 h-6  bg-gray-200 rounded hover:bg-gray-400 transition-colors" onClick={frontMove} />
  </button>

   </div>



   </div>
      <div className="flex overflow-hidden" >
        {imageElements}
      </div>
    </div>
    </div>
   
    </>
    
  );
}

export default Slipper;
