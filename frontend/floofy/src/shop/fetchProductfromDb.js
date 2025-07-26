import { base_api } from "../base_api"

export const fetchProducts = async () => {
  const response = await fetch(`${base_api}/api/getProductFromShop`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.log("network error");
    throw new Error("HTTP error", response.status);
  }
  console.log("Product response: ", response);
  return response;
};
