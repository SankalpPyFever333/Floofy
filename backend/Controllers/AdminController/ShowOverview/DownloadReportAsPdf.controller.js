const fs = require("fs");
const pdf = require("html-pdf");
const { countNewUsers } = require("./showNumberofNewUser.controller");
const countProductSales = require("./showProductPurchaseData.controller");
const totalRevenueCalculation = require("./showTotalRevenue.controller");

const DataToDownload = async()=>{
      let  newUsersCount= await countNewUsers();
      let productSalesData=await countProductSales();
      let revenueData=await totalRevenueCalculation();
      console.log(newUsersCount);
      console.log(productSalesData,revenueData)
      return {newUsersCount , productSalesData , revenueData}
}

// const htmlTableTemplate = `
//       <html>
//             <head>
//                   <title>Report</title>
//             </head>
//             <body style="font-family: Arial; font-size:12px">
//                   <div>
//                         <h5>Report</h5>
//                         <table>
//                               <tr>
//                                     <th>Category</th>
//                                     <th>Value</th>
//                               </tr>
//                               <tr>
//                                     <td>Total Purchases</td>
//                                     <td>${}</td>
//                               </tr>
//                               <tr>
//                                     <td>Revenue Generated</td>
//                                     <td>${}</td>
//                               </tr>
//                               <tr>
//                                     <td>Active Users</td>
//                                     <td>${}</td>
//                               </tr>
//                   </div>
//             </body>
//       </html>
// `;

