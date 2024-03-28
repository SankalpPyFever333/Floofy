import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function PieChartData({countActiveUsers, TotalRevenue, ProductSalesCount}) {
      return (
            <PieChart
                  series={[
                        {
                              data: [
                                    { id: 0, value: countActiveUsers, label: 'New Users' },
                                    { id: 1, value: ProductSalesCount, label: 'Product Sales' },
                                    { id: 2, value: TotalRevenue, label: 'Total Revenue' },
                              ],
                        },
                  ]}
                  width={600}
                  height={400}
            />
      );
}