const articleHeader = document.getElementsByClassName("article-content");

const getPosts = async () => {
    const mainData = await fetch("http://localhost:4000/data");
    const finData = await mainData.json();


    const metaInfo = document.getElementsByClassName("article-meta");

    for (let i = 0; i <= finData.length; i++) {

        const paragraph = document.createElement("p");
        const header3 = document.createElement("h3");
        const paragraph2 = document.createElement("p");
        const spanTxt = document.createElement("span");
        // console.log(spanTxt, 22);


        spanTxt.innerText = finData[i].date;
        paragraph.innerText = finData[i].body;
        header3.innerText = finData[i].name;
        paragraph2.innerText = finData[i].creator;
        articleHeader[i].appendChild(header3);
        articleHeader[i].appendChild(paragraph);
        articleHeader[i].appendChild(spanTxt);
        metaInfo[i].appendChild(paragraph2);
    }
}

getPosts();