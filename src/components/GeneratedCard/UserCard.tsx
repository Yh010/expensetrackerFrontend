import { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  TrendingUp,
  Download,
  Share2,
  Eye,
  EyeOff,
} from "lucide-react";
import confetti from "canvas-confetti";
import html2canvas from "html2canvas";
type InvestorRank =
  | "Novice"
  | "Intermediate"
  | "Advanced"
  | "Expert"
  | "Master";

interface InvestmentData {
  totalInvestment: number;
  totalProfit: number;
}

const getInvestorRank = (profit: number): InvestorRank => {
  if (profit < 1000) return "Novice";
  if (profit < 10000) return "Intermediate";
  if (profit < 50000) return "Advanced";
  if (profit < 100000) return "Expert";
  return "Master";
};

const getPraisePhrase = (rank: InvestorRank): string => {
  switch (rank) {
    case "Novice":
      return "Great start! Keep growing!";
    case "Intermediate":
      return "You are on fire! Keep it up!";
    case "Advanced":
      return "Impressive gains! You are a market maven!";
    case "Expert":
      return "Phenomenal performance! You are a trading titan!";
    case "Master":
      return "Legendary investor! You are in a league of your own!";
  }
};

export default function InvestmentShowcaseCard({
  data,
}: {
  data: InvestmentData;
}) {
  const [showInvestment, setShowInvestment] = useState(true);
  const [showProfit, setShowProfit] = useState(true);
  const investorRank = getInvestorRank(data.totalProfit);
  const praisePhrase = getPraisePhrase(investorRank);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (elementRef.current) {
      try {
        const canvas = await html2canvas(elementRef.current, { useCORS: true });
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = "my-investment-showcase.png";
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.log("Error generating image:", err);
      }
    }
  };

  const handleShare = () => {
    const shareUrl = `https://investtrack.com/share/${btoa(
      JSON.stringify(data)
    )}`;
    navigator.clipboard.writeText(shareUrl);
    alert("Share link copied to clipboard!");
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <Card
      ref={elementRef}
      id="investment-card"
      className="w-full max-w-md mx-auto bg-white overflow-hidden shadow-lg rounded-2xl border-4 border-black"
    >
      <CardHeader className="relative bg-yellow-400 p-6 border-b-4 border-black">
        <div className="absolute top-4 right-4 flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handleDownload}
            className="rounded-full bg-white border-2 border-black hover:bg-gray-100"
          >
            <Download className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleShare}
            className="rounded-full bg-white border-2 border-black hover:bg-gray-100"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
        <CardTitle className="text-3xl font-extrabold text-center text-black pt-6">
          Investment Showcase
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg text-gray-700">
            Total Investment:
          </span>
          <div className="flex items-center space-x-2">
            {showInvestment ? (
              <span className="font-extrabold text-2xl text-black">
                Rs {data.totalInvestment.toLocaleString()}
              </span>
            ) : (
              <span className="font-extrabold text-2xl text-black">****</span>
            )}
            <Switch
              checked={showInvestment}
              onCheckedChange={setShowInvestment}
              className="data-[state=checked]:bg-green-500 border-2 border-black"
            />
            {showInvestment ? (
              <Eye className="h-5 w-5 text-gray-600" />
            ) : (
              <EyeOff className="h-5 w-5 text-gray-600" />
            )}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg text-gray-700">Total Profit:</span>
          <div className="flex items-center space-x-2">
            {showProfit ? (
              <span className="font-extrabold text-2xl text-green-600">
                Rs {data.totalProfit.toLocaleString()}
              </span>
            ) : (
              <span className="font-extrabold text-2xl text-black">****</span>
            )}
            <Switch
              checked={showProfit}
              onCheckedChange={setShowProfit}
              className="data-[state=checked]:bg-green-500 border-2 border-black"
            />
            {showProfit ? (
              <Eye className="h-5 w-5 text-gray-600" />
            ) : (
              <EyeOff className="h-5 w-5 text-gray-600" />
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <Badge
            variant="secondary"
            className="text-xl px-6 py-2 bg-purple-600 text-white font-bold rounded-full"
          >
            {investorRank} Investor
          </Badge>
        </div>
        <p className="text-center text-lg font-semibold text-gray-700">
          {praisePhrase}
        </p>
        <div className="flex justify-center">
          <Button
            onClick={triggerConfetti}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full text-lg border-2 border-black"
          >
            <Sparkles className="h-5 w-5 mr-2" />
            Celebrate
          </Button>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-100 p-4 flex justify-between items-center border-t-4 border-black">
        <TrendingUp className="h-6 w-6 text-green-600" />
        <span className="font-bold text-lg text-gray-800">
          Keep up the great work!
        </span>
        <Sparkles className="h-6 w-6 text-yellow-500" />
      </CardFooter>
    </Card>
  );
}
