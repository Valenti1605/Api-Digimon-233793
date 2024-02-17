import { listaDigimon } from "./dependencies.js";
import { Digimon } from "../models/Digimon.js";

let api = document.getElementById("btn-api")
api.addEventListener("click", function(){
    let url = "https://digimon-api.vercel.app/api/digimon"
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            data.forEach(element => {
                let digimons = new Digimon()
                digimons.setName(element.name)
                digimons.setImage(element.img)
                digimons.setLevel(element.level)
                listaDigimon.addDigimons(digimons)
            })
            
        }
    )
})

const btnView = document.getElementById("btn-view")
btnView.addEventListener("click", ()=> {
    
    const containerCard = document.querySelector("#container-card")

    listaDigimon.getDigimons().forEach(item =>{
        let digimon = document.createElement("div")
        digimon.classList.add("character-card")

        let name= document.createElement("p")
        name.innerHTML = "Nombre: " + item.getName()

        let image = document.createElement("img")
        image.src = item.getImage()

        let level = document.createElement("p")
        level.innerHTML = "Nivel: " + item.getLevel()

        digimon.appendChild(image);
        digimon.appendChild(name);
        digimon.appendChild(level);

        containerCard.appendChild(digimon);

        image.classList.add('img-card')
    })
})
