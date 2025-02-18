const header = document.createElement("h1");
header.textContent = "Hello";
document.body.appendChild(header);

const span = document.querySelector("span");

// span.classList.add("blue");

const topics = document.getElementById("topic-list");
// console.log(topics);
const newTopic = document.createElement("li");

newTopic.textContent = "Dom";
topics.appendChild(newTopic);

// const fancy = document.getElementById("fancy");
// fancy.style.backgroundColor = "black";
