import React from "react";
import { Link } from "react-router-dom";
import "./character.css"

const Character = (props) =>{
    const { character } = props
    return(
        <React.Fragment>
            <Link
                className="Character__container"
                to={`/character/${character.id}`}
            >
            <div className="Characters">
                <div className = "Character__container">
                <div className="Character__img">
                <img
                        className= "Character__image"
                        src={props.character.image}
                        alt={props.character.name}
                    />
                </div>
                    <div className="Character__Data">
                        <h2 className = "Character__name">{props.character.name}</h2>
                        <p className = "Character__species">{props.character.species}</p>
                        <p className = "Character__status">{props.character.status}</p>
                        <p className="Character__gender">{props.character.gender}</p>
                    </div>
                </div>
            </div>
            </Link>
        </React.Fragment>
    );
};

export default Character;