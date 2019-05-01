const fetch = require('node-fetch')


const movieUrlCheck = async()=>{
    while(true){
        const url = await getData()
        if(url.movieUrl !== 'https://image.tmdb.org/t/p/w500undefined' &&
            url.movieUrl !== 'https://image.tmdb.org/t/p/w500null' ){
            return url
        }
    }
}

const getData = async ()=>{
        try{
            let randomNum = Math.floor((Math.random()*1000)+1)
            let response = await fetch(process.env.API_BASE_URL+randomNum+process.env.MOVIEDB_API)
            let json = await response.json()
            let movieUrl = await process.env.IMAGE_BASE_URL+json.poster_path
            let description = json.overview
            let movieName = json.original_title
            return{movieUrl,description,movieName}
    }
        catch(e){
            return 'error'
        }
    }

module.exports = movieUrlCheck