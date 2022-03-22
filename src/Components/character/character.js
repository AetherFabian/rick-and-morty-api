import React from "react";
import { Link } from "react-router-dom";
import "./character.css";
import Http from "../../lib/request";

const Character = (props) =>{
    const { character } = props
    console.log(character)
    const id = character["id"]
    
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
                        src={props.character}
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
