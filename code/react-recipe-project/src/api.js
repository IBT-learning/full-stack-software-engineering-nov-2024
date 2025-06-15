// const API_BASE = "http://localhost:4000/recipes";

// export const getRecipes = async () => {
//   const res = await fetch(API_BASE);
//   if (!res.ok) throw new Error("Failed to fetch recipes");
//   return res.json();
// };

// export const getRecipeById = async (id) => {
//   const res = await fetch(`${API_BASE}/${id}`);
//   if (!res.ok) throw new Error("Failed to fetch recipe");
//   return res.json();
// };

// export const createRecipe = async (recipe) => {
//   const res = await fetch(API_BASE, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(recipe),
//   });
//   if (!res.ok) throw new Error("Failed to create recipe");
//   return res.json();
// };

// export const updateRecipe = async (id, recipe) => {
//   const res = await fetch(`${API_BASE}/update/${id}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(recipe),
//   });
//   if (!res.ok) throw new Error("Failed to update recipe");
//   return res.json();
// };

// export const deleteRecipe = async (id) => {
//   const res = await fetch(`${API_BASE}/delete/${id}`, {
//     method: "DELETE",
//   });
//   if (!res.ok) throw new Error("Failed to delete recipe");
//   return res.json();
// };


const BASE_URL = "http://localhost:4000/recipes";

export const getRecipes = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export const getRecipeById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("Recipe not found");
  return res.json();
};

export const createRecipe = async (data) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Create failed");
  return res.json();
};

export const updateRecipe = async (id, data) => {
  const res = await fetch(`${BASE_URL}/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Update failed");
  return res.json();
};

export const deleteRecipe = async (id) => {
  const res = await fetch(`${BASE_URL}/delete/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Delete failed");
  return res.json();
};
