export const fetchProductsUsingId = async (productId) => {
  const response = await fetch("http://localhost:3000/api/getSingleProduct", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId: productId }),
  });

  if (!response.ok) {
    console.log("network error");
    throw new Error("HTTP error", response.status);
  }
  console.log("Product response: ", response);
  return response;
};
