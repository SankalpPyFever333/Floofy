import { base_api } from "../../base_api";

export const fetchAllProductOrder = async () => {
  const AllOrders = await fetch(`${base_api}/api/fetchProductOrder`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!AllOrders.ok) {
    throw new Error("Could not get orders");
  }
  //   console.log("jsonOrder is: " , AllOrders.json())
  return AllOrders;
};
