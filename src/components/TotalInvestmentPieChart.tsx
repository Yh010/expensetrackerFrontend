//import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  /*  CardFooter, */
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A pie chart with a label list";

interface Stock {
  id: number;
  name: string;
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
  amountInvested: number;
}

interface TotalInvestmentChartProps {
  stocks: Stock[];
  totalAmountInvested: number;
}

export function TotalInvestmentChart({
  stocks,
  totalAmountInvested,
}: TotalInvestmentChartProps) {
  const data = stocks.map((stock, index) => ({
    stockName: stock.name,
    percent:
      ((stock.purchasePrice * stock.quantity) / totalAmountInvested) * 100,
    fill: `hsl(var(--chart-${(index % 5) + 1}))`,
  }));

  const datachartConfig = stocks.reduce((config, stock, index) => {
    config[stock.name] = {
      label: stock.name,
      color: `hsl(var(--chart-${(index % 5) + 1}))`,
    };
    return config;
  }, {} as ChartConfig);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Investment Breakdown</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={datachartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="stockName" hideLabel />}
            />
            <Pie data={data} dataKey="percent" nameKey="stockName">
              <LabelList
                dataKey="stockName"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: string) => datachartConfig[value]?.label}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total investment breakdown for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  );
}
