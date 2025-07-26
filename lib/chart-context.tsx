'use client';

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';

interface StockChartData {
  ticker: string;
  startDate: string;
  endDate: string;
  data: Array<{
    t: string;
    o: number;
    h: number;
    l: number;
    c: number;
    v: number;
  }>;
}

interface ChartContextType {
  charts: StockChartData[];
  addChart: (chartData: StockChartData) => void;
  clearCharts: () => void;
}

const ChartContext = createContext<ChartContextType | undefined>(undefined);

export function ChartProvider({ children }: { children: ReactNode }) {
  const [charts, setCharts] = useState<StockChartData[]>([]);

  const addChart = useCallback((chartData: StockChartData) => {
    setCharts(prev => {
      // Check if chart already exists (same ticker and date range)
      const exists = prev.some(
        chart =>
          chart.ticker === chartData.ticker &&
          chart.startDate === chartData.startDate &&
          chart.endDate === chartData.endDate
      );

      if (exists) {
        // console.log('📈 Chart already exists, skipping duplicate:', chartData.ticker);
        return prev;
      }

      // console.log('📈 Adding new chart:', chartData.ticker);
      return [...prev, chartData];
    });
  }, []);

  const clearCharts = () => {
    setCharts([]);
  };

  return (
    <ChartContext.Provider value={{ charts, addChart, clearCharts }}>
      {children}
    </ChartContext.Provider>
  );
}

export function useCharts() {
  const context = useContext(ChartContext);
  if (context === undefined) {
    throw new Error('useCharts must be used within a ChartProvider');
  }
  return context;
}
