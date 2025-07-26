'use client';

import { useCharts } from '@/lib/chart-context';
import { StockChart } from './tools/stock-chart';

export default function OverviewTab() {
  const { charts } = useCharts();

  // console.log('📈 Current charts in overview:', charts);

  if (charts.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Overview Dashboard
          </h1>
          <p className="text-white/70 text-lg">
            Your portfolio insights and analytics
          </p>
          <p className="text-white/50 text-sm mt-4">
            Ask the AI to fetch stock data to see charts here!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Stock Charts
      </h1>
      <div className="space-y-6">
        {charts.map((chart, index) => (
          <StockChart
            key={`${chart.ticker}-${chart.startDate}-${index}`}
            ticker={chart.ticker}
            data={chart.data}
            startDate={chart.startDate}
            endDate={chart.endDate}
          />
        ))}
      </div>
    </div>
  );
}
