import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, TrendingUp, Zap } from "lucide-react";
import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart as RechartsLineChart,
  Line,
} from "recharts";

const goalData = [
  { name: "Emergency Fund", current: 5000, target: 10000, color: "#FF6384" },
  { name: "Retirement", current: 50000, target: 500000, color: "#36A2EB" },
  {
    name: "House Down Payment",
    current: 20000,
    target: 60000,
    color: "#FFCE56",
  },
  { name: "Vacation", current: 2000, target: 5000, color: "#4BC0C0" },
];

const monthlyData = [
  { name: "Jan", savings: 500 },
  { name: "Feb", savings: 700 },
  { name: "Mar", savings: 600 },
  { name: "Apr", savings: 800 },
  { name: "May", savings: 1000 },
  { name: "Jun", savings: 900 },
];

const expenseData = [
  { name: "Housing", value: 1200 },
  { name: "Food", value: 400 },
  { name: "Transportation", value: 200 },
  { name: "Utilities", value: 150 },
  { name: "Entertainment", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

export default function FinancialGoalTracker() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Financial Goal Tracker
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {goalData.map((goal, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {goal.name}
                <Target className="h-5 w-5 text-blue-500" />
              </CardTitle>
              <CardDescription>
                ${goal.current.toLocaleString()} / $
                {goal.target.toLocaleString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress
                value={(goal.current / goal.target) * 100}
                className="h-2"
              />
            </CardContent>
            <CardFooter className="text-sm text-gray-500">
              {((goal.current / goal.target) * 100).toFixed(1)}% complete
            </CardFooter>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="savings">Savings Trend</TabsTrigger>
          <TabsTrigger value="expenses">Expense Breakdown</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Financial Overview</CardTitle>
              <CardDescription>
                Your progress across all financial goals
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={goalData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="current"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {goalData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="savings">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Savings Trend</CardTitle>
              <CardDescription>
                Track your saving habits over time
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={monthlyData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="savings"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="expenses">
          <Card>
            <CardHeader>
              <CardTitle>Expense Breakdown</CardTitle>
              <CardDescription>
                Visualize your spending categories
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={expenseData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8">
                    {expenseData.map((_entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Bar>
                </RechartsBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full">Update Goal Progress</Button>
            <Button className="w-full" variant="outline">
              Add New Financial Goal
            </Button>
            <Button className="w-full" variant="outline">
              Adjust Budget
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="h-5 w-5 mr-2 text-yellow-500" />
              Financial Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>
                You're on track to reach your Emergency Fund goal by September
                2024.
              </li>
              <li>
                Consider increasing your Retirement contributions by 2% to meet
                your target.
              </li>
              <li>
                Great job! You've reduced your entertainment expenses by 15%
                this month.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
