import * as React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  Tooltip,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

export const description = "An interactive line chart";

// Transformed chart data (adjust this according to your data)
const chartData = [
  {
    date: "Oct 01 2024, 09:15 AM UTC+05:00",
    price: 2964.0,
    volume: 5,
    currency: "INR",
  },
  {
    date: "Oct 01 2024, 09:16 AM UTC+05:00",
    price: 7975.65,
    volume: 3642,
    currency: "INR",
  },
  {
    date: "Oct 01 2024, 09:17 AM UTC+05:00",
    price: 3971.5,
    volume: 1787,
    currency: "INR",
  },
  {
    date: "Oct 01 2024, 09:18 AM UTC+05:00",
    price: 6971.4,
    volume: 1185,
    currency: "INR",
  },
  {
    date: "Oct 01 2024, 09:19 AM UTC+05:00",
    price: 2907.7,
    volume: 1031,
    currency: "INR",
  },
  {
    date: "Oct 01 2024, 09:20 AM UTC+05:00",
    price: 2467.7,
    volume: 1031,
    currency: "INR",
  },
  {
    date: "Oct 01 2024, 09:21 AM UTC+05:00",
    price: 1967.7,
    volume: 1031,
    currency: "INR",
  },
  {
    date: "Oct 01 2024, 09:22 AM UTC+05:00",
    price: 367.7,
    volume: 101,
    currency: "INR",
  },
  {
    date: "Oct 01 2024, 09:23 AM UTC+05:00",
    price: 2367.7,
    volume: 1031,
    currency: "INR",
  },
];

const chartConfig = {
  views: {
    label: "Stock Price",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function StockGraph() {
  const [activeChart] = React.useState<keyof typeof chartConfig>("desktop");

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Chart</CardTitle>
          <CardDescription>
            Showing stock performance for the whole day October 01 2024
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                });
              }}
            />
            <YAxis />
            <Tooltip
              content={({ payload }) => {
                if (!payload || payload.length === 0) return null;
                const { price, volume, currency, date } = payload[0].payload;
                return (
                  <div className="tooltip-content">
                    <p>
                      <strong>Time:</strong>{" "}
                      {new Date(date).toLocaleTimeString("en-US")}
                    </p>
                    <p>
                      <strong>Price:</strong> {price} {currency}
                    </p>
                    <p>
                      <strong>Volume:</strong> {volume}
                    </p>
                  </div>
                );
              }}
            />
            <Line
              dataKey="price"
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
