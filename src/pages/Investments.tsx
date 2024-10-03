import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PlusIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  PercentIcon,
  IndianRupeeIcon,
  PenBox,
} from "lucide-react";
import { TotalInvestmentChart } from "@/components/TotalInvestmentPieChart";
import InvestmentShowcaseCard from "@/components/GeneratedCard/UserCard";
import { ProfitLossChart } from "@/components/ProfitLossPieChart";
import Navbar from "@/components/Navbar/Navbar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";

interface Stock {
  id: number;
  name: string;
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
  amountInvested: number;
}

export default function InvestmentTracker() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [newStock, setNewStock] = useState<Omit<Stock, "id" | "currentPrice">>({
    name: "",
    quantity: 0,
    purchasePrice: 0,
    amountInvested: 0,
  });
  const [loading, setLoading] = useState(false);

  const fetchCurrentPrice = async (stockQuote: string) => {
    try {
      const response = await fetch("http://localhost:3000/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          stockQuote: stockQuote,
          exchange: "NSE",
        }),
      });

      const data = await response.json();

      const priceString = data.price;
      const priceNumber = parseFloat(priceString.replace(/[₹,]/g, ""));

      return priceNumber;
    } catch (error) {
      console.error("Error fetching current price:", error);
      return null;
    }
  };

  const addStock = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !newStock.name ||
      newStock.quantity <= 0 ||
      newStock.purchasePrice <= 0
    ) {
      alert("Please fill out all fields correctly.");
      return;
    }

    setLoading(true);
    const currentPrice = await fetchCurrentPrice(newStock.name);

    if (currentPrice === null) {
      alert("Error fetching stock price. Try again later.");
      setLoading(false);
      return;
    }

    setStocks([
      ...stocks,
      {
        ...newStock,
        id: Date.now(),
        currentPrice,
      },
    ]);
    setNewStock({ name: "", quantity: 0, purchasePrice: 0, amountInvested: 0 });
    setLoading(false);
  };

  const totalInvested = stocks.reduce(
    (sum, stock) => sum + stock.quantity * stock.purchasePrice,
    0
  );
  const totalCurrent = stocks.reduce(
    (sum, stock) => sum + stock.quantity * stock.currentPrice,
    0
  );
  const totalProfitLoss = totalCurrent - totalInvested;

  const investmentData = {
    totalInvestment: 50000,
    totalProfit: 15000,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Investment Tracker
          </h1>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Add New Stock</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={addStock} className="flex flex-wrap gap-4">
                <Input
                  placeholder="Stock Quote (e.g., GOOG)"
                  value={newStock.name}
                  onChange={(e) =>
                    setNewStock({ ...newStock, name: e.target.value })
                  }
                  className="flex-grow"
                />
                <Input
                  type="number"
                  placeholder="Quantity"
                  value={newStock.quantity || ""}
                  onChange={(e) =>
                    setNewStock({
                      ...newStock,
                      quantity: Number(e.target.value),
                    })
                  }
                  className="w-32"
                />
                <Input
                  type="number"
                  placeholder="Purchase Price"
                  value={newStock.purchasePrice || ""}
                  onChange={(e) =>
                    setNewStock({
                      ...newStock,
                      purchasePrice: Number(e.target.value),
                    })
                  }
                  className="w-32"
                />
                <Button type="submit" disabled={loading}>
                  {loading ? (
                    "Adding..."
                  ) : (
                    <PlusIcon className="mr-2 h-4 w-4" />
                  )}
                  {loading ? null : "Add Stock"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Your Investments</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Stock</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Purchase Price</TableHead>
                    <TableHead>Current Price</TableHead>
                    <TableHead>Total Invested</TableHead>
                    <TableHead>Profit/Loss</TableHead>
                    <TableHead>Edit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stocks.map((stock) => {
                    const investedAmount = stock.purchasePrice * stock.quantity;
                    const profitLoss =
                      (stock.currentPrice - stock.purchasePrice) *
                      stock.quantity;
                    const profitLossPercentage =
                      ((stock.currentPrice - stock.purchasePrice) /
                        stock.purchasePrice) *
                      100;
                    return (
                      <TableRow key={stock.id}>
                        <TableCell className="font-medium">
                          {stock.name}
                        </TableCell>
                        <TableCell>{stock.quantity}</TableCell>
                        <TableCell>₹{stock.purchasePrice.toFixed(2)}</TableCell>
                        <TableCell>₹{stock.currentPrice.toFixed(2)}</TableCell>
                        <TableCell>₹{investedAmount.toFixed(2)}</TableCell>
                        <TableCell>
                          <span
                            className={
                              profitLoss >= 0
                                ? "text-green-600"
                                : "text-red-600"
                            }
                          >
                            ₹{Math.abs(profitLoss).toFixed(2)}
                            {profitLoss >= 0 ? (
                              <TrendingUpIcon className="inline ml-1 h-4 w-4" />
                            ) : (
                              <TrendingDownIcon className="inline ml-1 h-4 w-4" />
                            )}
                            <span className="ml-1 text-xs">
                              ({profitLossPercentage.toFixed(2)}%)
                            </span>
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Sheet key="right">
                              <SheetTrigger asChild>
                                <Button variant="outline">
                                  <PenBox />
                                </Button>
                              </SheetTrigger>
                              <SheetContent side="right">
                                <SheetHeader>
                                  <SheetTitle>Edit profile</SheetTitle>
                                  <SheetDescription>
                                    Make changes to your profile here. Click
                                    save when you're done.
                                  </SheetDescription>
                                </SheetHeader>
                                <div className="grid gap-4 py-4">
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label
                                      htmlFor="name"
                                      className="text-right"
                                    >
                                      Name
                                    </Label>
                                    <Input
                                      id="name"
                                      value="Pedro Duarte"
                                      className="col-span-3"
                                    />
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label
                                      htmlFor="username"
                                      className="text-right"
                                    >
                                      Username
                                    </Label>
                                    <Input
                                      id="username"
                                      value="@peduarte"
                                      className="col-span-3"
                                    />
                                  </div>
                                </div>
                                <SheetFooter>
                                  <SheetClose asChild>
                                    <Button type="submit">Save changes</Button>
                                  </SheetClose>
                                </SheetFooter>
                              </SheetContent>
                            </Sheet>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Invested
                </CardTitle>
                <IndianRupeeIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ₹{totalInvested.toFixed(2)}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Current Value
                </CardTitle>
                <IndianRupeeIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ₹{totalCurrent.toFixed(2)}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Profit/Loss
                </CardTitle>
                <PercentIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div
                  className={`text-2xl font-bold ${
                    totalProfitLoss >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  ₹{Math.abs(totalProfitLoss).toFixed(2)}
                  {totalProfitLoss >= 0 ? (
                    <TrendingUpIcon className="inline ml-1 h-4 w-4" />
                  ) : (
                    <TrendingDownIcon className="inline ml-1 h-4 w-4" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  {((totalProfitLoss / totalInvested) * 100).toFixed(2)}%
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-2 flex justify-between">
            <TotalInvestmentChart
              stocks={stocks}
              totalAmountInvested={totalInvested}
            />
            <ProfitLossChart />
            <InvestmentShowcaseCard data={investmentData} />
          </div>
        </div>
      </main>
    </div>
  );
}
