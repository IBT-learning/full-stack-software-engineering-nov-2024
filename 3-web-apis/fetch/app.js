/* 
    ? API: Application Programming Interface
    * provided by a server, as a way for clients to communicate with them
    * uses the HTTP request and response lifecycle
    * most common type is a REST API
        * Representational State Transfer
    * interactions include:
        * CRUD // HTTP
            * Create // PUT (or maybe POST)
            * Retrieve // GET
            * Update // POST (or maybe PUT)
            * Delete // DELETE
 */

const url = "https://jsonplaceholder.typicode.com/users/"
// const url = "https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0";

// Handle response using Resolvers
fetch(url)
  .then((res) => res.json())
  .then((res) => console.log(res))

// ... or with Async / Await
async function getPokemon() {
  const res = await fetch(url)
  console.log(res)
  const data = await res.json()
  console.log(data)

  data.results.forEach((monster) => showPokemon(monster))
}

async function showPokemon(monster) {
  const res = await fetch(monster.url)
  const data = await res.json()

  // add label
  const h3 = document.createElement("h3")
  h3.textContent = monster.name
  document.body.appendChild(h3)

  // add picture
  const pic = document.createElement("img")
  pic.setAttribute("src", data.sprites.front_default)
  document.body.appendChild(pic)
}

getPokemon()
