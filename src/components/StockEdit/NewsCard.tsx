import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Newspaper,
  ExternalLink,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

/* interface NewsItem {
  title: string;
  source: string;
  url: string;
  publishedAt: string;
  sentiment: "positive" | "negative" | "neutral";
} */

/* interface StockNewsCardProps {
  symbol: string;
  news: NewsItem[];
} */

export default function StockNewsCard() {
  const formatPublishTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "negative":
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };
  const stockSymbol = "AAPL";
  const newsData = [
    {
      title: "Apple's Latest iPhone Sees Strong Demand in Asian Markets",
      source: "TechCrunch",
      url: "https://techcrunch.com/apple-iphone-demand",
      publishedAt: "2024-04-15T14:30:00Z",
      sentiment: "positive",
    },
    {
      title: "Supply Chain Issues May Impact Apple's Q3 Production",
      source: "Reuters",
      url: "https://reuters.com/apple-supply-chain",
      publishedAt: "2024-04-15T10:15:00Z",
      sentiment: "negative",
    },
    {
      title: "Apple Announces New Environmental Initiatives",
      source: "CNBC",
      url: "https://cnbc.com/apple-environmental-initiatives",
      publishedAt: "2024-04-14T18:45:00Z",
      sentiment: "neutral",
    },
  ];

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="bg-gray-100 dark:bg-gray-800">
        <CardTitle className="flex items-center space-x-2">
          <Newspaper className="h-5 w-5" />
          <span>{stockSymbol} Recent News</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px] p-4">
          {newsData.map((item, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <div className="flex justify-between items-start mb-1">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium flex items-center"
                >
                  {item.title}
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                {getSentimentIcon(item.sentiment)}
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <Badge variant="outline" className="text-xs">
                  {item.source}
                </Badge>
                <span>{formatPublishTime(item.publishedAt)}</span>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
