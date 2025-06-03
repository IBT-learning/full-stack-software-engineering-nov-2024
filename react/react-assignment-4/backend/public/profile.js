// DOM elements
const fullNameInput = document.getElementById("fullname");
const bioInput = document.getElementById("bio");
const addressInput = document.getElementById("address");
const form = document.querySelector("form");

// Check if user exists and load data
const checkAndLoadUser = async () => {
  const userToken = localStorage.getItem("userToken");

  if (userToken) {
    try {
      const userData = await getUser(userToken);
      if (userData) {
        // Populate form with existing data
        fullNameInput.value = userData.fullName || "";
        bioInput.value = userData.bio || "";
        addressInput.value = userData.address || "";
        return true; // User exists
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }
  return false; // User doesn't exist
};

// Get user data
const getUser = async (token) => {
  try {
    const response = await fetch(`http://localhost:4000/users/user/${token}`, {
      method: "GET",
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Failed to fetch user");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

// Create new user
const createUser = async (userData) => {
  try {
    const response = await fetch("http://localhost:4000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();
    if (result.token) {
      localStorage.setItem("userToken", result.token);
    }
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// Update existing user
const updateUser = async (token, userData) => {
  try {
    const response = await fetch(`http://localhost:4000/users/${token}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error("Failed to update user");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// Form submission handler
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userData = {
    fullName: fullNameInput.value,
    bio: bioInput.value,
    address: addressInput.value,
  };

  const userToken = localStorage.getItem("userToken");

  try {
    if (userToken) {
      // Update existing user
      await updateUser(userToken, userData);
      showToast("Profile updated successfully!");
    } else {
      // Create new user
      await createUser(userData);
      showToast("Account created successfully!");
    }
  } catch (error) {
    console.error("Error saving user:", error);
    showToast("Error saving profile", "error");
  }
});

// Show toast notification
const showToast = (message, type = "success") => {
  const toast = document.createElement("div");
  toast.className = `fixed bottom-4 right-4 ${
    type === "success" ? "bg-green-500" : "bg-red-500"
  } text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in`;
  toast.innerHTML = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("animate-fade-out");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

// Initialize page
(async () => {
  const userExists = await checkAndLoadUser();
  if (!userExists) {
    console.log("No existing user found");
  }
})();
