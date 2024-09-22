'use client';
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FavoriteItems } from "./FavoriteItems"; // Importing data for favorite items
import SliderlItem from './SliderItem'; // Importing individual slider item component

// Main component for rendering the slider with multiple item
const FavoritesSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed:1000,
        slidesToShow:5,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:1750,
        arrows:false
      };
    
    return (
        <div>
            <Slider {...settings}>
                {FavoriteItems.map((item)=><SliderlItem key={item.id} image={item.image} title={item.title}/>)}
            </Slider>
        </div>
    )
}

export default FavoritesSlider