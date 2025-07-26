import { base_api } from "../../base_api";

export const fetchMyOrders = async (userId) => {
  const OrderResponse = await fetch(`${base_api}/api/fetchMyProductOrder`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: userId }),
  });

  if (OrderResponse.ok) {
    return OrderResponse;
  } else {
    throw new Error("Error in fetching my orders");
  }
};
