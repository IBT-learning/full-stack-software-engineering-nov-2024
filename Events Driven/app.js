const emailField = document.querySelector("#email")
const passwordField = document.querySelector("#password")
const submitButton = document.querySelector("#submit")

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(emailField.)
})

const promiseHelper = (resolve, reject) => {
    resolve("Logged in");
};
const getPromise = new Promise(promiseHelper);

// getPromise.then((result) => result.toLowerCase()).then((next) => console.log(next));

async function startAsync() {
    const name = await  "Owen";
     return name
}

startAsync().then(e => console.log(e));

console.log("No");


