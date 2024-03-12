export const payProductAmount = async(payableAmount)=>{
      const receiptNumber =
        Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
      const payAmountResponse = await fetch(
        "",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Basic cnpwX3Rlc3RfMlEzMGZ1Y091SnZNcUo6WldnRXRaWEpHWER3UnZiaWhZRUEwUVdm",
          },
          body: JSON.stringify({
            Amount: payableAmount,
            currency: "INR",
            receipt: receiptNumber.toString() ,
          }),
        }
      );


      if(payAmountResponse.status === "created"){
            return  payAmountResponse;
      }
      

}

