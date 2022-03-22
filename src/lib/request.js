const URLS = "http://ddragon.leagueoflegends.com/cdn/12.5.1/"

class Http{
    static instance = new Http()

    get_characters = async() =>{
        try{
            const request = await fetch (`${URLS}data/en_US/champion.json`)
            const response = await request.json()
            return response.data

        }catch(err){
            throw new Error(err);
        }
    }
    get_character = async(id) => {
        try{
            const request = await fetch (`${URLS}data/en_US/champion/${id}.json`)
            const response = await request.json()
            return response.data

        }catch(err){
            throw new Error(err);
        }
    }
}
export default Http;