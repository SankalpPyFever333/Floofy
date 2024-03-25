export const updateOrderStatus = async (orderId, Orderstatus) => {
  const updateStatus = await fetch(
    "http://localhost:3000/api/updateOrderStatus",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderRowId: orderId, status: Orderstatus }),
    }
  );

  if (updateStatus.ok) {
    return updateStatus;
  } else {
    throw new Error("Error in updating status");
  }
};