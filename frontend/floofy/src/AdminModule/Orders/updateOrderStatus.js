import { base_api } from "../../base_api";

export const updateOrderStatus = async (orderId, Orderstatus) => {
  const updateStatus = await fetch(`${base_api}/api/updateOrderStatus`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ orderRowId: orderId, status: Orderstatus }),
  });

  if (updateStatus.ok) {
    return updateStatus;
  } else {
    throw new Error("Error in updating status");
  }
};
