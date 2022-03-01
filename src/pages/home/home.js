import React from "react";
import "./home.css"
import Character from "../../Components/character/character";
import Http from "../../lib/request";

class Home extends React.Component{
    state={
        title:"Rick and Morty X React",
        characters:[],
    };
<<<<<<< HEAD
    
    componentDidMount = () => {
        this.getData(URL)
    };
    
=======

    componentDidMount = () => {
        this.getData(URL)
    };

>>>>>>> deploy
    getData = async(api_url) => {
        const response = await Http.instance.get_characters()
        console.log(response)
        this.setState({ characters: response });
    };

    render(){
        return(
            <React.Fragment>
<<<<<<< HEAD
                <h1>{this.state.title}</h1>
                <div className="Characters">
                    {this.state.characters.map((character) => {
                        return <Character character = {character} />
                    } )}
=======
                <div className="back">
                    <div className="logoHolder">
                        <img className="logo"src="https://lyricstranslate.com/files/styles/artist/public/Rick_and_Morty_logo.png" alt="Rick and Morty"/>
                    </div>
                    <div className="Characters">
                        {this.state.characters.map((character) => {
                            return <Character character = {character} />
                        } )}
                    </div>
>>>>>>> deploy
                </div>
            </React.Fragment>
        );
    }
}

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> deploy
