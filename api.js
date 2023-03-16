
const pokedex = document.getElementById("pokedex");
const botonesBody = document.querySelectorAll(".a");

const getPokemos = async () => {
    for (let i = 1; i <= 151; i++) {
        await fetchPokemon(i)

    }
}


const fetchPokemon = async (id) => {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    createPokemon(data)

}
getPokemos();

function createPokemon(data) {
    const elementos = document.createElement("div")
    elementos.classList.add("data")


    // caracteristicas de los pokempones
    const pokeType = data.types.map(el => el.type.name);
    console.log(pokeType);

    

    botonesBody.forEach(boton =>boton.addEventListener("click",(event)=> {
        const botonId= event.currentTarget.id;
   
        
        
    }));
    


    const pokedex2 = `

<div id=container class= "imageCointener" >
<img src="${data.sprites.other.dream_world.front_default}"
</div>
<div class= containerId>
<div  class= "circulo">
<p class="id2">${data.id}</p>
</div>
</div>
<div id=container class= "name">
<h2 class="name2">${data.name}</h2>
</div>
<div  id=container class= "type2">
<p class=type>${pokeType}</p>
<div id=container class= "base">
<p class="base2">Experiencia Base:${data.base_experience}</p>
</div>

</div>
</div>

`;

    elementos.innerHTML = pokedex2;
    pokedex.appendChild(elementos)
}






