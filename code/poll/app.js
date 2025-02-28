const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const htmlCounter = document.getElementById("html");
const jsCounter = document.getElementById("js");
const voterName =document.getElementById("voter-name");
let voters = [];


yesButton.addEventListener("click",  () => {
    if (!voters.includes(voterName.value)) {
    voters.push(voterName.value);
    console.log(voters);

    jsCounter.innerText = Number(jsCounter.innerText) +1;
    }
});

noButton.addEventListener("click",  () => {
    if (!voters.includes(voterName.value)) {
     voters.push(voterName.value);
    htmlCounter.innerText = Number(jsCounter.innerText) +1;
    }
});

const voteTracker = (countElement) => {
    if (!voters.includes(voterName.value)) {
        voters.push(voterName.value);
        countElement.innerText = Number(countElement.innerText) + 1;
    }
};