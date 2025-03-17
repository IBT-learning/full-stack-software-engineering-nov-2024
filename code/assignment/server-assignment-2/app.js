import express from "express"
const app = express();

app.get("/", (req,res) => {
    res.send("<h1>EPITOME</>")
});

app.get("/about", (req, res) => {
    res.send("I'm an optometrist with interest in software engineering to help bridge the gap between technology and eyecare management.")

});

app.get("/greet/:username", (req, res) => {
    const user = req.params.username
    res.send(`Greetings ${user}`)
});


// app.get("/favorite", (req, res) => {
//     const favorite = req.query.fave
//     if (favorite) {
//         res.send(`My favorite thing is ${favorite}`)
//     } else {
//         res.send("My favorite thing is not included")
//     }

// });


// additional task

app.get("/favorite", (req, res) => {
    const queryParams = req.query

    if (Object.keys(queryParams).length > 0) {
        let responseString = "";
        const favorites = [];

        for (const key in queryParams) {
            if (queryParams.hasOwnProperty(key)) {
                responseString += `My favorite ${key} is ${queryParams[key]}. `
            }
        }
        res.send(responseString.trim());
    } else {
        res.send("Please provide your favorite things")
    }
});


app.listen(5000, () => {
    console.log("Listening to port 4000")
});

