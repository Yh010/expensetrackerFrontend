import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  LineChart,
  ArrowUpRight,
  CheckCircle,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col min-h-screen items-center">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <LineChart className="h-6 w-6" />
          <span className="sr-only">InvestTrack</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#testimonials"
          >
            Testimonials
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </a>
          <Link to="/">Try the app now</Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Track Your Investments Like a Pro
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Effortlessly manage and analyze your investment portfolio with
                  our powerful, user-friendly platform.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form
                  className="flex space-x-2"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button type="submit">Get Started</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start your free 14-day trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Powerful Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <BarChart className="h-10 w-10 mb-4 text-blue-500" />
                  <CardTitle>Advanced Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Gain deep insights into your portfolio performance with our
                    advanced analytics tools.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ArrowUpRight className="h-10 w-10 mb-4 text-blue-500" />
                  <CardTitle>Real-time Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Stay up-to-date with real-time tracking of your investments
                    across multiple markets.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lock className="h-10 w-10 mb-4 text-blue-500" />
                  <CardTitle>Bank-level Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Rest easy knowing your data is protected with our
                    state-of-the-art security measures.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Our Users Say
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>John Doe</CardTitle>
                  <CardDescription>CEO, TechCorp</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    "InvestTrack has revolutionized how I manage my investments.
                    It's intuitive and powerful."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Jane Smith</CardTitle>
                  <CardDescription>Personal Investor</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    "I've tried many portfolio trackers, but InvestTrack is by
                    far the best. It's a game-changer."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mike Johnson</CardTitle>
                  <CardDescription>Financial Advisor</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    "I recommend InvestTrack to all my clients. It's
                    comprehensive and easy to use."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Simple, Transparent Pricing
            </h2>
            <Tabs defaultValue="monthly" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annually">Annually</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic</CardTitle>
                      <CardDescription>
                        For individual investors
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">$9.99/mo</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />{" "}
                          Up to 3 portfolios
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />{" "}
                          Basic analytics
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />{" "}
                          Daily updates
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Started</Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-blue-500">
                    <CardHeader>
                      <CardTitle>Pro</CardTitle>
                      <CardDescription>For serious investors</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">$24.99/mo</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />{" "}
                          Unlimited portfolios
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />{" "}
                          Advanced analytics
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />{" "}
                          Real-time updates
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Started</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>For large organizations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">Custom</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />{" "}
                          Custom solutions
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />{" "}
                          Dedicated support
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />{" "}
                          API access
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Contact Sales</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="annually">
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic</CardTitle>
                      <CardDescription>
                        For individual investors
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">$99.99/yr</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />{" "}
                          Up to 3 portfolios
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />{" "}
                          Basic analytics
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />{" "}
                          Daily updates
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Started</Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-blue-500">
                    <CardHeader>
                      <CardTitle>Pro</CardTitle>
                      <CardDescription>For serious investors</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">$249.99/yr</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />{" "}
                          Unlimited portfolios
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />{" "}
                          Advanced analytics
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />{" "}
                          Real-time updates
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Started</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>For large organizations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">Custom</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />{" "}
                          Custom solutions
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />{" "}
                          Dedicated support
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />{" "}
                          API access
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Contact Sales</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 InvestTrack. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
