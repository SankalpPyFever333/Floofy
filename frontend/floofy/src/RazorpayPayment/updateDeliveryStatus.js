export const updateDeliveryStatus = async (deleiveryStatus) => {
  // send otp on customer phone and verify it when delivered the product and now update the status

  const deliveryStatus = await fetch("", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: deleiveryStatus }),
  });
};

