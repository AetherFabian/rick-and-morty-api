import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import Http from "../../lib/request";
import "./Detail.css";

const DetailCharacter = () =>{
    const { id } = useParams();
    const [champion, setCharacter] = useState({})
    const [image, setImage] = useState({})

    useEffect(()=>{
        const fetchCharacter = async ( ) =>{
            const characterID = await Http.instance.get_character(id);
            const image = await Http.instance.get_image(id);
            const champion = Object.values(characterID);
            console.log(champion[0], id)
            setCharacter(champion[0])
            setImage(image)
        }
        fetchCharacter();
    },[id])

    return (
        <React.Fragment>
            <div className="Details">
                <div className="Details__container">
                    <h1>{champion.name}</h1>
                    <div className="Details__information">
                        <div className="Details__img">
                            <img src={image} alt={champion.name} />
                        </div>
                        <div className="Details__data">
                            <div className="Data__row">
                               <h3>Status: </h3>
                                <p>{champion.title}</p>
                            </div>
                            <div className="Data__row">
                               <h3>Species: </h3>
                                <p>{champion.blurb}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DetailCharacter;
