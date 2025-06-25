import express from "express";
import fs from "fs";
const app = express();
const PORT = 4000;

app.use(express.json());

// Utility function to read/write profile data
const readProfiles = () => {
    const data = fs.readFileSync("./static/profile.json", "utf8");
    return JSON.parse(data);
};

const writeProfiles = (profiles) => {
    fs.writeFileSync("./static/profile.json", JSON.stringify(profiles, null, 2));
};

// GET all profiles
app.get("/", (req, res) => {
    const profiles = readProfiles();
    res.send(profiles);
});

// GET a profile by ID
app.get("/find/:profileId", (req, res) => {
    const profiles = readProfiles();
    const profile = profiles.find(p => p.id == req.params.profileId);
    if (!profile) {
        return res.status(404).send("Profile not found");
    }
    res.send(profile);
});

// ✅ POST - Add a new profile
app.post("/create", (req, res) => {
    const profiles = readProfiles();
    const newProfile = req.body;
    newProfile.id = Date.now().toString(); // simple unique ID
    profiles.push(newProfile);
    writeProfiles(profiles);
    res.status(201).send({ message: "Profile created", profile: newProfile });
});

// ✅ PUT - Update an existing profile by ID
app.put("/update/:profileId", (req, res) => {
    const profiles = readProfiles();
    const index = profiles.findIndex(p => p.id == req.params.profileId);
    if (index === -1) {
        return res.status(404).send("Profile not found");
    }
    profiles[index] = { ...profiles[index], ...req.body };
    writeProfiles(profiles);
    res.send({ message: "Profile updated", profile: profiles[index] });
});

// ✅ DELETE - Remove a profile by ID
app.delete("/delete/:profileId", (req, res) => {
    const profiles = readProfiles();
    const updatedProfiles = profiles.filter(p => p.id != req.params.profileId);
    if (updatedProfiles.length === profiles.length) {
        return res.status(404).send("Profile not found");
    }
    writeProfiles(updatedProfiles);
    res.send({ message: "Profile deleted" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
