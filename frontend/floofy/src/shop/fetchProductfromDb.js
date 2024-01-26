
export const fetchProducts = async () => {
  const response = await fetch("http://localhost:3000/api/getProductFromShop", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.log("network error");
    throw new Error("HTTP error" , response.status)
  }   
  return response;
};


