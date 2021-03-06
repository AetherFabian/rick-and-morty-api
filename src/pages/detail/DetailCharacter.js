import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import Http from "../../lib/request";
import "./Detail.css"

const DetailCharacter = () =>{
    const { id } = useParams();
    const [character, setCharacter] = useState({})
    const [origin, setOrigin] = useState({})
    const [location, setLocation] = useState({})

    useEffect(()=>{
        const fetchCharacter = async ( ) =>{
            const character = await Http.instance.get_character(id);
            setCharacter(character)
            setOrigin(character.origin)
            setLocation(character.location)
        }
        fetchCharacter();
    },[id])

    return (
        <React.Fragment>
            <div className="Details">
                <div className="Details__container">
                    <h1>{character.name}</h1>
                    <div className="Details__information">
                        <div className="Details__img">
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div className="Details__data">
                            <div className="Data__row">
                               <h3>Status: </h3>
                                <p>{character.status}</p>
                            </div>
                            <div className="Data__row">
                               <h3>Species: </h3>
                                <p>{character.species}</p>
                            </div>
                            <div className="Data__row">
                               <h3>Type: </h3>
                                <p>{character.type || "NA"}</p>
                            </div>
                            <div className="Data__row">
                               <h3>Gender: </h3>
                                <p>{character.gender}</p>
                            </div>
                            <div className="Data__row">
                               <h3>Origin: </h3>
                                <p>{origin.name}</p>
                            </div>
                            <div className="Data__row">
                               <h3>Location: </h3>
                                <p>{location.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DetailCharacter;
