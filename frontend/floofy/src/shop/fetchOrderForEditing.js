import { base_api } from "../base_api";

export const fetchOrderForEdit = async (OrderId) => {
  try {
    const OrderResponse = await fetch(`${base_api}/api/fetchOrderForEditingShow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ OrderId: OrderId }),
    });

    if (OrderResponse.ok) {
      return OrderResponse;
    } else {
      throw new Error("Error in fetching order");
    }
  } catch (error) {
    console.log("Error occured", error);
  }
};
