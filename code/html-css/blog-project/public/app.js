const articleHeader = document.getElementsByClassName("article-content");

const getPosts = async () => {
  try {
    const mainData = await fetch("http://localhost:4000/posts/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const finData = await mainData.json();
    console.log(finData);
    console.log(222);

    const metaInfo = document.getElementsByClassName("article-meta");

    for (let i = 0; i <= 6; i++) {
      const paragraph = document.createElement("p");
      const header3 = document.createElement("h3");
      const paragraph2 = document.createElement("p");
      const spanTxt = document.createElement("span");
      // console.log(spanTxt, 22);

      spanTxt.innerText = finData[i].timestamp;
      paragraph.innerText = finData[i].description;
      header3.innerText = finData[i].title;
      paragraph2.innerText = finData[i].author;
      articleHeader[i].appendChild(header3);
      articleHeader[i].appendChild(paragraph);
      articleHeader[i].appendChild(spanTxt);
      metaInfo[i].appendChild(paragraph2);
    }
  } catch (err) {
    console.log(err);
  }
};

getPosts();
// console.log(222);
