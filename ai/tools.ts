import { tool } from 'ai';
import { z } from 'zod';

export const weatherTool = tool({
  description: 'Get the weather in a location',
  parameters: z.object({
    location: z.string().describe('The location to get the weather'),
  }),
  execute: async ({ location }) => ({
    location,
    temperature: 72 + Math.floor(Math.random() * 21) - 10,
  }),
});

export const stockDataTool = tool({
  description:
    'Get historical stock data for a given ticker symbol and date range and display it as a chart in the overview tab. Only provide a brief confirmation message in chat - the detailed chart will appear in the Overview tab.',
  parameters: z.object({
    ticker: z.string().describe('The stock ticker symbol (e.g., AAPL, GOOGL)'),
    startDate: z.string().describe('Start date in YYYY-MM-DD format'),
    endDate: z.string().describe('End date in YYYY-MM-DD format'),
  }),
  execute: async ({ ticker, startDate, endDate }) => {
    try {
      // Make request to your FastAPI endpoint
      const response = await fetch(
        `http://localhost:8000/overview/${ticker}/daily_historical/${startDate}/${endDate}`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch stock data: ${response.statusText}`);
      }

      const rawData = await response.json();

      // Extract all bars from all pages and flatten them
      const allBars = rawData.flatMap((page: any) => page.bars || []);

      return {
        type: 'stock-chart',
        ticker: ticker.toUpperCase(),
        startDate,
        endDate,
        data: allBars,
        message: `📊 Successfully fetched ${ticker.toUpperCase()} stock data (${allBars.length} data points). Check the Overview tab to see the chart!`,
      };
    } catch (error) {
      return {
        error: `Failed to fetch stock data: ${error instanceof Error ? error.message : 'Unknown error'}`,
      };
    }
  },
});
