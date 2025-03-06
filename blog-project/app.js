const articleHeader = document.getElementsByClassName("article-content");

const getPosts = async () => {
    const mainData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await mainData.json();
    const finData = await response.splice(0, 6);
    console.log(finData)
    // const header3 = document.getElementsByTagName("h3");

    for (let i = 0; i <= finData.length; i++) {

        const paragraph = document.createElement("p");
        const header3 = document.createElement("h3");

        paragraph.innerText = finData[i].body;
        header3.innerText = finData[i].title;
        articleHeader[i].appendChild(header3);
        articleHeader[i].appendChild(paragraph);
    }
}

getPosts();