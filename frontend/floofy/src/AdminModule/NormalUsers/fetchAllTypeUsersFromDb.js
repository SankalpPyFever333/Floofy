import { base_api } from "../../base_api";

export const allTypeUserResponse = async () => {
  const response = await fetch(`${base_api}/api/fetchAllTypeUsers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("HTTP-Error: " + response.status);
  }
  console.log("All user response:", response);
  return response;
};
