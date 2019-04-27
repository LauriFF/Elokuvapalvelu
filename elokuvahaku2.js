const fetch = require('node-fetch')


const tark = async()=>{
    const check = false
    while(check==false){
        const osoite = await getData()
        if(osoite.osoite !== 'https://image.tmdb.org/t/p/w500undefined'){
            return osoite
        }
    }
}

const getData = async ()=>{
        const url2 = 'https://image.tmdb.org/t/p/w500'
        const url = 'https://api.themoviedb.org/3/movie/'
        try{
            let randomNum = Math.floor((Math.random()*1000)+1)
            let response = await fetch(url+randomNum+process.env.MOVIEDB_API)
            let json = await response.json()
            let osoite = await url2+json.poster_path
            let kuvaus = json.overview
            let nimi = json.original_title
            return{osoite,kuvaus,nimi}
            //log(osoite)
    }
        catch(e){
            return 'erroria lykkää'
        }
    }

module.exports = tark