let getMovie = document.getElementById('getMovie')
let image = document.getElementById('image')
let namingAttemptInput = document.getElementById('input')
let description = document.getElementById('description')
let giveUpButton = document.getElementById('giveUpButton')
let quessButton = document.getElementById('quessButton')
let data

const imageReveal = ()=>{
    image.src = data.movieUrl
}
giveUpButton.onclick= ()=>{
    if(description!==undefined){
        imageReveal()
    }
}

quessButton.onclick = ()=>{
    if(description!==undefined){
        if(namingAttemptInput.value.toLowerCase() === data.movieName.toLowerCase()){
            imageReveal(data)
        }
        else{
            alert('Wrong anwser')
        }
    }
}

const movieFetch = async()=>{
    namingAttemptInput.value = ''
    image.src = ''
    description.textContent = 'Loading resources'
    const movieUrl = await fetch('/movie')
    data = await movieUrl.json()
    description.textContent = data.description
}
getMovie.onclick =()=>movieFetch()