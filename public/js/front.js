let nappi = document.getElementById('nappi')
let kuva = document.getElementById('kuva')
let nimiKokeilu = document.getElementById('input')
let tarina = document.getElementById('tarina')
let nappi2 =document.getElementById('nappi2')
let data

const kuvanPaljastus = ()=>{
    kuva.src = data.osoite
}
nappi2.onclick= ()=>{
    if(tarina!==undefined){
        kuvanPaljastus()
    }
}

nimiKokeilu.onkeyup = ()=>{
    if(tarina!==undefined){
        if(nimiKokeilu.value.toLowerCase() === data.nimi.toLowerCase()){
            kuvanPaljastus(data)
        }
    }
}

const haku2 = async()=>{
    nimiKokeilu.value = ''
    kuva.src = ''
    tarina.textContent = 'Loading resources'
    osoite = await fetch('/osoite')
    data = await osoite.json()
    //console.log(data.nimi)
    tarina.textContent = data.kuvaus
}
nappi.addEventListener("click", haku2)