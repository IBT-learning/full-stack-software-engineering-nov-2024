const toDo = document.getElementById("to-do-list");
// const list = document.createElement("li");

const getToDos = async () => {
    // const mainData = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1");
    // const res = await mainData.json();

    const mainData = await fetch("http://localhost:4000/todos");
    const res = await mainData.json();

    // console.log(res);

    res.forEach((item, index) => {
        const list = document.createElement("li");
        const image1 = document.getElementById("img1")
        // console.log(image1, 2)

        list.innerText = `todo ${index + 1}: ${item.title}`;
        list.style.lineHeight = "40px";

        // list.style.border = "5px solid black";
        list.style.width = "50%"

        list.addEventListener("mouseenter", (e) => {
            e.preventDefault();
            list.classList.add("elements");

            if (item.completed == true) {
                image1.style.width = "0px"
                // image1.classList.add("img-hover")
            }
        })

        list.addEventListener("mouseleave", (e) => {
           e.preventDefault();
            list.classList.remove("elements");
            if (item.completed == true) {
                image1.style.width = "auto"
            }
        })

        if (item.completed == true) {
            list.style.textDecoration = "line-through";
        }

        toDo.appendChild(list);
    });
}

getToDos();
