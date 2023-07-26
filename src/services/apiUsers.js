export async function getUsers() {
  const res = await fetch(
    `https://dummyjson.com/users?limit=1&skip=0&select=firstName,age,email,phone,image,company`
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createUser(newUser) {
  const res = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });
  const data = await res.json();

  return data;
}

export async function deleteUserApi(id) {
  const res = await fetch(`https://dummyjson.com/users/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();

  return data;
}

export async function createEditUser(id, changedValues) {
  const res = await fetch(`https://dummyjson.com/users/${id}`, {
    method: "PUT" /* or PATCH */,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(changedValues),
  });
  const data = await res.json();

  return data;
}
