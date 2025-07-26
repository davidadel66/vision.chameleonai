'use client';

import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface StockDataPoint {
  t: string; // timestamp
  o: number; // open
  h: number; // high
  l: number; // low
  c: number; // close
  v: number; // volume
}

interface StockChartProps {
  ticker: string;
  data: StockDataPoint[];
  startDate: string;
  endDate: string;
}

interface ChartDataPoint {
  date: string;
  close: number;
  open: number;
  high: number;
  low: number;
  volume: number;
  bodyTop: number;
  bodyBottom: number;
  bodyHeight: number;
  upperWick: number;
  lowerWick: number;
  isGreen: boolean;
}

interface TooltipPayload {
  payload: ChartDataPoint;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
}

interface CustomCandlestickProps {
  payload?: ChartDataPoint;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export function StockChart({
  ticker,
  data,
  startDate,
  endDate,
}: StockChartProps) {
  // Transform the data for the chart - create OHLC candlestick data
  const chartData: ChartDataPoint[] = data.map(point => {
    const isGreen = point.c >= point.o; // Green if close >= open
    return {
      date: new Date(point.t).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      }),
      close: point.c,
      open: point.o,
      high: point.h,
      low: point.l,
      volume: point.v,
      // For the candlestick body (open to close)
      bodyTop: Math.max(point.o, point.c),
      bodyBottom: Math.min(point.o, point.c),
      bodyHeight: Math.abs(point.c - point.o),
      // For the wicks (high/low lines)
      upperWick: point.h - Math.max(point.o, point.c),
      lowerWick: Math.min(point.o, point.c) - point.l,
      isGreen: isGreen,
    };
  });

  // Calculate price range for better Y-axis scaling
  const allPrices = data.flatMap(d => [d.o, d.h, d.l, d.c]);
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);
  const padding = (maxPrice - minPrice) * 0.1; // 10% padding
  const yAxisMin = Math.max(0, minPrice - padding);
  const yAxisMax = maxPrice + padding;

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const change = data.close - data.open;
      const changePercent = (change / data.open) * 100;

      return (
        <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-3 shadow-xl">
          <p className="text-white font-semibold">{label}</p>
          <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
            <p className="text-blue-400">Open: ${data.open.toFixed(2)}</p>
            <p className="text-purple-400">High: ${data.high.toFixed(2)}</p>
            <p className="text-orange-400">Close: ${data.close.toFixed(2)}</p>
            <p className="text-red-400">Low: ${data.low.toFixed(2)}</p>
          </div>
          <p
            className={`mt-2 text-sm font-semibold ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}
          >
            {change >= 0 ? '+' : ''}${change.toFixed(2)} (
            {changePercent.toFixed(2)}%)
          </p>
        </div>
      );
    }
    return null;
  };

  // Custom candlestick shape
  const CustomCandlestick = (props: CustomCandlestickProps) => {
    const { payload, x, y, width, height } = props;
    const data = payload;
    
    if (!data || x === undefined || y === undefined || width === undefined || height === undefined) return null;

    const isGreen = data.isGreen;
    const color = isGreen ? '#10b981' : '#ef4444';
    const fillColor = isGreen ? '#10b981' : '#ef4444';

    // Calculate positions
    const centerX = x + width / 2;
    const bodyWidth = Math.max(width * 0.6, 2);
    const bodyX = centerX - bodyWidth / 2;

    // Convert price to Y coordinate
    const priceToY = (price: number) => {
      const ratio = (yAxisMax - price) / (yAxisMax - yAxisMin);
      return y + ratio * height;
    };

    const highY = priceToY(data.high);
    const lowY = priceToY(data.low);
    const bodyTopY = priceToY(data.bodyTop);
    const bodyBottomY = priceToY(data.bodyBottom);

    return (
      <g>
        {/* High-Low line (wick) */}
        <line
          x1={centerX}
          y1={highY}
          x2={centerX}
          y2={lowY}
          stroke={color}
          strokeWidth={1}
        />
        {/* Open-Close body */}
        <rect
          x={bodyX}
          y={bodyTopY}
          width={bodyWidth}
          height={Math.max(bodyBottomY - bodyTopY, 1)}
          fill={fillColor}
          stroke={color}
          strokeWidth={1}
          rx={1}
        />
      </g>
    );
  };

  return (
    <div className="w-full h-96 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-6 border border-zinc-700 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">
          {ticker} Candlestick Chart
        </h3>
        <div className="text-zinc-400 text-sm">
          {startDate} to {endDate}
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 11, fill: '#9ca3af' }}
            angle={-45}
            textAnchor="end"
            height={70}
            stroke="#6b7280"
          />
          <YAxis
            tick={{ fontSize: 11, fill: '#9ca3af' }}
            domain={[yAxisMin, yAxisMax]}
            stroke="#6b7280"
            tickFormatter={value => `$${value.toFixed(0)}`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="close"
            shape={<CustomCandlestick />}
            fill="transparent"
          />
        </ComposedChart>
      </ResponsiveContainer>

      <div className="mt-4 flex justify-center">
        <div className="flex items-center space-x-6 text-sm text-zinc-400">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
            Bullish (Close ≥ Open)
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
            Bearish (Close &lt; Open)
          </div>
        </div>
      </div>
    </div>
  );
}
