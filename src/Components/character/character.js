import React from "react";
import { Link } from "react-router-dom";
import "./character.css";
import Http from "../../lib/request";

const Character = (props) =>{
    const { character } = props
    const id = character["id"]

    const imageAPI = 'http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/' + id + '.png';

    return(
        <React.Fragment>
            <Link
                className="Character__container"
                to={`/character/${id}`}
            >
            <div className="Characters">
                <div className = "Character__container">
                <div className="Character__img">
                <img
                        className= "Character__image"
                        src={imageAPI}
                        alt={props.character["id"]}
                    />
                    
                
                </div>
                
                    <div className="Character__Data">
                        <h2 className = "Character__name">{props.character["id"]}</h2>
                        <p className = "Character__species">{props.character.title}</p>
                    </div>
                </div>
            </div>
            </Link>
        </React.Fragment>
    );
};

export default Character;
