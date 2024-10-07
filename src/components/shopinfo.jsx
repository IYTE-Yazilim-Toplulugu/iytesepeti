"use client"
import React, { useState } from 'react'
import Image from 'next/image'  
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { MdFavorite, MdFavoriteBorder, MdStar } from "react-icons/md"; 

const ShopInfo = (props) => {
  const {image,name,description,address,phone,email} = props
  const [isFavorite, setIsFavorite] = useState(false); 
  const [rating, setRating] = useState(0); 

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); 
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <>
      <div className='flex flex-col font-serif my-10 justify-start border-2 rounded-xl h-auto  ' style={{borderColor:"rgb(191, 191, 191)" }}>
        <div className='flex justify-center'>
          <Image className='h-[360px] w-[85%] mx-5 my-10 bg-slate-600 bg-cover rounded-xl' src={image} alt="image"></Image>
        </div>
        <div className="flex flex-col w-auto my-4 overflow-auto flex-grow items-center">          
          <div className="flex flex-row justify-between w-[75%] items-center">
            <h1 className='text-3xl font-bold text-start self-start'>{name}</h1>
            <div className="flex flex-row mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <MdStar
                  key={star}
                  className={`w-8 h-8 cursor-pointer ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
                  onClick={() => handleRating(star)}
                />
              ))}
              <span className='ml-2 text-[22px] text-gray-500 cursor-pointer hover:underline'>Yorumları Gör</span>
            </div>
          </div>
          <div className="relative left-[-340px] top-[-50px] w-1">
          {isFavorite ? (
            <MdFavorite 
              className='w-8 h-8 text-red-500 mr-3 mt-3' 
              onClick={toggleFavorite}
            />
          ) : (
            <MdFavoriteBorder 
              className='w-8 h-8 text-black mr-3 mt-3'
              onClick={toggleFavorite}
            />
          )}
        </div>
          <ol className='flex flex-row my-3 gap-6 text-xl space-y-2 text-start' style={{color:"rgb(155, 19, 33)"}}> 
              <div className='flex flex-col gap-2 max-w-[50%]'>  
                <li className='flex flex-wrap  '>
                  <div className='flex flex-row hover:cursor-pointer '> 
                    <IoIosInformationCircleOutline className='w-8 h-auto text-black pr-2'/> 
                    <span className='font-bold text-black w-auto'> 
                     Açıklama: 
                    </span> 
                  </div>
                  <p className='pl-2'>{description}</p>
                </li>

                <li className='flex flex-wrap'>
                  <div className='flex flex-row hover:cursor-pointer'> 
                    <IoLocationOutline  className='w-8 h-auto text-black pr-2'/>
                    <span className='font-bold text-black w-auto'>
                     Adres: 
                    </span> 
                  </div>
                  <p className='pl-2'>{address}</p>
                </li>
              </div>
              <div className='flex flex-col gap-2 max-w-[50%]'>
                <li className='flex flex-wrap'> 
                  <div className='flex flex-row hover:cursor-pointer '> 
                  <FiPhone className='w-8 h-auto text-black pr-2'/>
                    <span className='font-bold text-black'> 
                     Telefon: 
                    </span> 
                  </div>
                  <p className='pl-2'>{phone}</p>
                  </li>

                <li className='flex flex-wrap'>
                  <div className='flex flex-row hover:cursor-pointer '> 
                    <MdOutlineMail className='w-8 h-auto text-black pr-2'/>
                    <span className='font-bold text-black'> 
                     Email: 
                    </span> 
                  </div>
                  <p className='pl-2'>{email}</p>
                </li>
              </div>
          </ol>
        </div> 
        
        

      </div>
    </>
  )
}

export default ShopInfo