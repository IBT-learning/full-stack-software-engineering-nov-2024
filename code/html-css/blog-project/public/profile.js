const formGroup = document.getElementsByClassName("form-group");

const getProfile = async () => {
    const mainData = await fetch("http://localhost:4000/profile/2");
    const res = await mainData.json();
    // console.log(res)

    const posts = await fetch("http://localhost:4000/data");
    const postResponse = await posts.json();
    const sortedData = postResponse.slice(2, 5);

    // console.log(sortedData)
    // Create a style element for common styles
    const styleEl = document.createElement('style');
    styleEl.textContent = `
        .profile-input {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border-width: 0;
            background-color: #333;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        
        .post-paragraph {
            background-color: #f5f5f5;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 15px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .post-title {
            font-weight: bold;
            margin-bottom: 8px;
            color: #333;
        }
        
        .post-body {
            color: #666;
            line-height: 1.5;
        }
    `;
    document.head.appendChild(styleEl);

    // Name input
    const inputting = document.createElement("input");
    inputting.type = "text";
    inputting.placeholder = res.name;
    inputting.value = res.name;
    inputting.className = "profile-input";
    formGroup[0].appendChild(inputting);

    // Address input
    const inputting2 = document.createElement("input");
    inputting2.type = "text";
    inputting2.placeholder = res.body;
    inputting2.value = res.body;
    inputting2.className = "profile-input";
    formGroup[1].appendChild(inputting2);

    // Company info textarea
    const inputting3 = document.createElement("textarea");
    inputting3.placeholder = res.body;
    inputting3.value = res.body;
    inputting3.className = "profile-input";
    inputting3.style.minHeight = "80px"; // Extra height for textarea
    formGroup[2].appendChild(inputting3);

    // Content section
    const contents = document.getElementsByClassName("lastcontent");

    // Display the posts with improved formatting
    for (let j = 0; j < sortedData.length; j++) {
        const postContainer = document.createElement("div");
        postContainer.className = "post-paragraph";

        const titleElement = document.createElement("div");
        titleElement.className = "post-title";
        titleElement.textContent = sortedData[j].title;

        const bodyElement = document.createElement("div");
        bodyElement.className = "post-body";
        bodyElement.textContent = sortedData[j].body;

        postContainer.appendChild(titleElement);
        postContainer.appendChild(bodyElement);

        contents[0].appendChild(postContainer);
    }
}

getProfile();