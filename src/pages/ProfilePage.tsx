import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Lock,
  Bell,
  CreditCard,
  Smartphone,
  Mail,
  Shield,
  Eye,
  EyeOff,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const spendingData = [
  { category: "Housing", amount: 1200 },
  { category: "Food", amount: 400 },
  { category: "Transport", amount: 200 },
  { category: "Utilities", amount: 150 },
  { category: "Entertainment", amount: 100 },
];

export default function UserProfile() {
  const [showBalance, setShowBalance] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-500">Financial Enthusiast</p>
          </div>
        </div>
        <Button>Edit Profile</Button>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="spending">Spending</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Account Overview</CardTitle>
              <CardDescription>Your financial snapshot</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total Balance:</span>
                <div className="flex items-center space-x-2">
                  {showBalance ? (
                    <span className="text-2xl font-bold">$24,500.00</span>
                  ) : (
                    <span className="text-2xl font-bold">****.**</span>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowBalance(!showBalance)}
                  >
                    {showBalance ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Credit Score:</span>
                <Badge variant="secondary">Excellent (780)</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Active Goals:</span>
                <span>4</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Investments:</span>
                <span>3 portfolios</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Detailed Report
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Lock className="h-5 w-5 text-gray-500" />
                  <span>Change Password</span>
                </div>
                <Button variant="outline">Update</Button>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-gray-500" />
                  <span>Two-Factor Authentication</span>
                </div>
                <Switch
                  checked={twoFactorEnabled}
                  onCheckedChange={setTwoFactorEnabled}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-gray-500" />
                  <span>Manage Linked Accounts</span>
                </div>
                <Button variant="outline">View</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>User Preferences</CardTitle>
              <CardDescription>Customize your experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-gray-500" />
                  <span>Notifications</span>
                </div>
                <Switch
                  checked={notificationsEnabled}
                  onCheckedChange={setNotificationsEnabled}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Preferred Currency</Label>
                <Select defaultValue="usd">
                  <SelectTrigger id="currency">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Risk Tolerance</Label>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="spending">
          <Card>
            <CardHeader>
              <CardTitle>Spending Analysis</CardTitle>
              <CardDescription>Your expenditure breakdown</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={spendingData}>
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="amount" fill="#8884d8" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Detailed Spending Report
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Smartphone className="h-5 w-5 text-gray-500" />
              <span>Contact Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-gray-500" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Smartphone className="h-5 w-5 text-gray-500" />
              <span>+1 (555) 123-4567</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Update Contact Info
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart className="h-5 w-5 text-gray-500" />
              <span>Financial Summary</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Monthly Income:</span>
              <span className="font-semibold">$5,000</span>
            </div>
            <div className="flex justify-between">
              <span>Monthly Expenses:</span>
              <span className="font-semibold">$3,500</span>
            </div>
            <div className="flex justify-between">
              <span>Savings Rate:</span>
              <span className="font-semibold">30%</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Update Financial Info
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
