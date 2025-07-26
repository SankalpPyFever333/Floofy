import { base_api } from "../../base_api";

export const CancelOrder = async (orderRowId) => {
  const deletedOrder = await fetch(`${base_api}/api/cancelOrder`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ OrderRowId: orderRowId }),
  });

  if (deletedOrder.ok) {
    return true;
  } else {
    return false;
  }
};
