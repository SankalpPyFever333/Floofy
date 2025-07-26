import { base_api } from "../../base_api"

export const fetchSpecificUserPost = async (userId) => {
  const response = await fetch(`${base_api}/api/fetchSpecificUserPost`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: userId }),
  });
  if (!response.ok) throw new Error("Could not find the post");
  return await response.json();
};
