'use client'
import styles from './foodcard.module.css'
import Image from 'next/image'
import { useState } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { RiAddCircleLine, RiAddCircleFill } from "react-icons/ri";

function FoodCard(props) {
    const { image, name, price, ingredients } = props;
    const [isFavorite, setIsFavorite] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const toggleAdd = () => {
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src={image} alt={name} width={100} height={100} />
            </div>
            <div className={styles.name}>
                <div className={styles.headers}>
                    <h1>{name}</h1>
                    <h2>{price} TL</h2>
                    <h3>{ingredients}</h3>
                </div>
                {isAdded ? (
                    <RiAddCircleFill
                        onClick={toggleAdd}
                        style={{ color: "orange", cursor: "pointer", margin: "15px", fontSize: "25px", position: "absolute", right: "40px" }}
                    />
                ) : (
                    <RiAddCircleLine
                        onClick={toggleAdd}
                        style={{ color: "black", cursor: "pointer", margin: "15px", fontSize: "25px", position: "absolute", right: "40px" }}
                    />
                )}
                {isFavorite ? (
                    <FaHeart
                        onClick={toggleFavorite}
                        style={{ color: "red", cursor: "pointer", margin: "15px 15px", fontSize: "25px", position: "absolute", right: "10px" }}
                    />
                ) : (
                    <FaRegHeart
                        onClick={toggleFavorite}
                        style={{ color: "black", cursor: "pointer", margin: "15px 15px", fontSize: "25px", position: "absolute", right: "10px" }}
                    />

                )}
            </div>
        </div>
    )
}

export default FoodCard
