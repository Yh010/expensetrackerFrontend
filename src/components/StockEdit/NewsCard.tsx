import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Newspaper, ExternalLink } from "lucide-react";

interface NewsLink {
  snippet: string;
  link: string;
  source: string;
  date: string;
}

interface NewsLinkArray {
  stockName: string;
  news: NewsLink[];
}

export default function StockNewsCard({ news, stockName }: NewsLinkArray) {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="bg-gray-100 dark:bg-gray-800">
        <CardTitle className="flex items-center space-x-2">
          <Newspaper className="h-5 w-5" />
          <span>{stockName} Recent News</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px] p-4">
          {news.map((newsItem, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <div className="flex justify-between items-start mb-1">
                <a
                  href={newsItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium flex items-center"
                >
                  {newsItem.snippet}
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <Badge variant="outline" className="text-xs">
                  {newsItem.source}
                </Badge>
                <span>{newsItem.date}</span>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
