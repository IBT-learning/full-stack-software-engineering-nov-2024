// fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(json => console.log(json))

async function run() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return data;
}

// console.log(run())

const contents = document.getElementById("contents");
const backButton = document.getElementById("back");
const nextButton = document.getElementById("next");

const getPoke = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=3");
    const {results} = await data.json();
    // console.log(results)

    let num = 2;
    backButton.addEventListener("click", async (e) => {
        e.preventDefault();
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${num + 2}`);
        const res = await data.json();
        console.log(res)
    })

    results.forEach(item => {
        showPokemon(item)
    })


}

getPoke()


const showPokemon = async (pokemon) => {
    const header = document.createElement("h3");
    const res = await fetch(pokemon.url);
    const data = await res.json();

    header.innerText = pokemon.name;
    contents.appendChild(header);

    const sprites = document.createElement("img");
    // const backButton = document.getElementById("back");
    // const frontButton = document.getElementById("front");
    // console.log(backButton)

    sprites.src = data.sprites.front_default;
    sprites.alt = Math.random();
    sprites.width = 100;
    sprites.height = 100;
    contents.appendChild(sprites);
}







