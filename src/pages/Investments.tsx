import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as XLSX from "xlsx";
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
  NewspaperIcon,
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
import { useAuth0 } from "@auth0/auth0-react";
import StockNewsCard from "@/components/StockEdit/NewsCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { StockGraph } from "@/components/StockGraph/StockGraph";
import { DownloadIcon, UploadIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import UploadPic from "@/components/UploadPic/upload";
import LoginFirstComponent from "@/components/Auth/LoginFirstComponent";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
//import { StockNameInput } from "@/components/StockNameInput/StockNameInput";

interface NewsLink {
  snippet: string;
  link: string;
  source: string;
  date: string;
}

interface Graph {
  price: number;
  currency: string;
  date: string;
  volume: number;
}

interface Stock {
  id: number;
  name: string;
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
  amountInvested: number;
  news: NewsLink[];
  graph: Graph[];
}

interface UploadedStock {
  name: string;
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
}

export default function InvestmentTracker() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [newStock, setNewStock] = useState<
    Omit<Stock, "id" | "currentPrice" | "news" | "graph">
  >({
    name: "",
    quantity: 0,
    purchasePrice: 0,
    amountInvested: 0,
  });
  const [loading, setLoading] = useState(false);
  const [selectedStockIndex, setSelectedStockIndex] = useState<number | null>(
    null
  );

  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchStockData = async (stockQuote: string) => {
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

      return {
        currentPrice: priceNumber,
        news: data.news || [],
        graph: data.graph || [],
      };
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
    const stockData = await fetchStockData(newStock.name);

    if (stockData === null) {
      alert("Error fetching stock data. Try again later.");
      setLoading(false);
      return;
    }

    setStocks([
      ...stocks,
      {
        ...newStock,
        id: Date.now(),
        currentPrice: stockData.currentPrice,
        news: stockData.news,
        graph: stockData.graph,
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

  const { user, isAuthenticated } = useAuth0();

  const generateStockData = (stocks: Stock[]) => {
    return stocks.map((stock) => {
      const investedAmount = stock.purchasePrice * stock.quantity;
      const profitLoss =
        (stock.currentPrice - stock.purchasePrice) * stock.quantity;
      const profitLossPercentage =
        ((stock.currentPrice - stock.purchasePrice) / stock.purchasePrice) *
        100;

      return {
        Stock: stock.name,
        Quantity: stock.quantity,
        "Purchase Price": stock.purchasePrice.toFixed(2),
        "Current Price": stock.currentPrice.toFixed(2),
        "Total Invested": investedAmount.toFixed(2),
        "Profit/Loss": profitLoss.toFixed(2),
        "Profit/Loss %": profitLossPercentage.toFixed(2),
      };
    });
  };

  const downloadCSV = (stocks: Stock[]) => {
    const data = generateStockData(stocks);
    const worksheet = XLSX.utils.json_to_sheet(data);
    const csvOutput = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([csvOutput], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "investment_tracker.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const downloadExcel = (stocks: Stock[]) => {
    const data = generateStockData(stocks);
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Investments");
    XLSX.writeFile(workbook, "investment_tracker.xlsx");
  };

  const parseFile = (file: File): Promise<UploadedStock[]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target?.result;
        try {
          const workbook = XLSX.read(data, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const parsedData = XLSX.utils.sheet_to_json(sheet);

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const stocks: UploadedStock[] = parsedData.map((row: any) => ({
            name: row["Stock"],
            quantity: Number(row["Quantity"]),
            purchasePrice: Number(row["Purchase Price"]),
            currentPrice: Number(row["Current Price"]),
          }));

          resolve(stocks);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = (error) => reject(error);
      reader.readAsBinaryString(file);
    });
  };

  const handleFileUpload = async (
    file: File,
    setStocks: React.Dispatch<React.SetStateAction<Stock[]>>
  ) => {
    try {
      const uploadedStocks = await parseFile(file);
      const newStocks: Stock[] = uploadedStocks.map((stock) => ({
        id: Date.now() + Math.random(),
        ...stock,
        amountInvested: stock.quantity * stock.purchasePrice,
        news: [],
        graph: [],
      }));
      setStocks(newStocks);
    } catch (error) {
      console.error("Error parsing file:", error);
      alert(
        "Error parsing file. Please make sure it's a valid CSV or Excel file."
      );
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileUpload(file, setStocks);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {isAuthenticated && <div>Hello {user?.name} </div>}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Investment Tracker
          </h1>

          {isAuthenticated ? (
            <div>
              {" "}
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
                  <CardTitle>
                    <div className="flex justify-between">
                      <div>Your Investments</div>
                      <div className="flex space-x-2">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={triggerFileUpload}
                              >
                                <UploadIcon className="mr-2 h-4 w-4" />
                                Upload
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                Upload your own Excel/CSV and start editing!
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={onFileChange}
                          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                          className="hidden"
                        />
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                              <DownloadIcon className="mr-2 h-4 w-4" />
                              Download
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem
                              onClick={() => downloadCSV(stocks)}
                            >
                              Download as CSV
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => downloadExcel(stocks)}
                            >
                              Download as Excel
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardTitle>
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
                        <TableHead>Stock News</TableHead>
                        <TableHead>View Stock Performance</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {stocks.map((stock, index) => {
                        const investedAmount =
                          stock.purchasePrice * stock.quantity;
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
                            <TableCell>
                              ₹{stock.purchasePrice.toFixed(2)}
                            </TableCell>
                            <TableCell>
                              ₹{stock.currentPrice.toFixed(2)}
                            </TableCell>
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
                                    <Button
                                      variant="ghost"
                                      onClick={() =>
                                        setSelectedStockIndex(index)
                                      }
                                    >
                                      <NewspaperIcon />
                                    </Button>
                                  </SheetTrigger>
                                  <SheetContent side="right">
                                    <SheetHeader>
                                      <SheetTitle>
                                        Stock Details: {stock.name}
                                      </SheetTitle>
                                      <SheetDescription>
                                        View details and news for the selected
                                        stock.
                                      </SheetDescription>
                                    </SheetHeader>
                                    <div className="grid gap-4 py-4">
                                      <div>
                                        <div>News</div>
                                        <StockNewsCard
                                          stockName={stock.name}
                                          news={
                                            selectedStockIndex !== null
                                              ? stocks[selectedStockIndex].news
                                              : []
                                          }
                                        />
                                      </div>
                                    </div>
                                  </SheetContent>
                                </Sheet>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Dialog>
                                <DialogTrigger className="border p-4 rounded-lg">
                                  Open Stock Performance
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>
                                      Today's Performance with time stamps
                                    </DialogTitle>
                                    <DialogDescription>
                                      <StockGraph />
                                    </DialogDescription>
                                  </DialogHeader>
                                </DialogContent>
                              </Dialog>
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

                <Dialog>
                  <DialogTrigger className="border p-4 rounded-lg border-black max-h-[50px]">
                    Generate your card
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogDescription>
                        <InvestmentShowcaseCard data={investmentData} />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                {/* <UploadPic /> */}
              </div>{" "}
            </div>
          ) : (
            <LoginFirstComponent />
          )}
        </div>
      </main>
    </div>
  );
}
