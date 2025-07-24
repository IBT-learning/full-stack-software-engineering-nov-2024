const BASE_URL = "http://localhost:4000";

export async function fetchRecipes() {
  const res = await fetch(`${BASE_URL}/recipes`);
  if (!res.ok) throw new Error("Failed to fetch recipes");
  return res.json();
}

export async function fetchRecipe(id) {
  const res = await fetch(`${BASE_URL}/recipes/${id}`);
  if (!res.ok) throw new Error("Failed to fetch recipe");
  return res.json();
}

export async function createRecipe(recipe) {
  const res = await fetch(`${BASE_URL}/recipes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recipe),
  });
  if (!res.ok) throw new Error("Failed to create recipe");
  return res.json();
}

export async function updateRecipe(id, updated) {
  const res = await fetch(`${BASE_URL}/recipes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updated),
  });
  if (!res.ok) throw new Error("Failed to update recipe");
  return res.json();
}

export async function deleteRecipe(id) {
  const res = await fetch(`${BASE_URL}/recipes/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete recipe");
  return res.json();
}
