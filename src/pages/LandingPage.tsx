import { Button } from "@/components/ui/button";
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
  LineChart,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import invest from "../assets/invest.webp"
import clock from "../assets/clock.webp"
import elevate from "../assets/elevate.webp"
import future from "../assets/future.webp"


export default function LandingPage() {

  return (
    <div className="flex flex-col min-h-screen items-center  ">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-neutral-800 text-white justify-between w-full">
        <div>
          <a className="flex items-center justify-center" href="#">
            <LineChart className="h-6 w-6" />
            <span className="sr-only">InvestTrack</span>
          </a>
        </div>
       
        <nav className="ml-auto flex gap-4 sm:gap-6">
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
        <section className="flex justify-center items-center p-6">
          <div className="flex space-x-16 font-bold text-xl justify-evenly">
            <div>Chevron</div>
            <div>Shell</div>
            <div>Ferrari</div>
            <div>Rolex</div>
            <div>Apple</div>
          </div>
        </section>
        <section className="flex">
          <div className="w-1/2 flex flex-col text-left justify-start items-center pt-32 space-y-9 pl-24">
            <div className="w-full text-7xl font-bold font-mono">
              Invest with Confidence
            </div>
            <div className="w-full font-semibold text-gray-400">
              Welcome to our investment tracker website! Here, you can easily monitor your portfolio's performance and access key metrics to make informed financial 
            </div>
            <Button>
              Track Portfolio
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <img src={ invest} className="w-3/4 h-5/6 "/>
          </div>
        </section>
        <section className="space-y-6">
          <div className="w-full flex justify-center items-center font-bold font-mono text-4xl">
            Personalized Insights
          </div>
          <div className="w-full flex justify-center items-center space-x-6">
            <Card className="max-w-64 border border-black">
              <CardHeader className="font-bold font-mono text-xl">
                Asset Allocation
              </CardHeader>
              <CardContent className="font-semibold text-gray-400">
                Our cutting-edge analytics provide a comprehensive view of your portfolio, empowering you to optimize your investment strategy and maximize your returns
              </CardContent>
            </Card>
               <Card className="max-w-64 border border-black">
              <CardHeader className="font-bold font-mono text-xl">
               Portfolio
              </CardHeader>
              <CardContent className="font-semibold text-gray-400">
                Leverage our advanced tools to ensure your investments are balanced and aligned with your financial goals, reducing risk and maximizing
              </CardContent>
            </Card>
               <Card className="max-w-64 border border-black">
              <CardHeader className="font-bold font-mono text-xl">
               Performance
              </CardHeader>
              <CardContent className="font-semibold text-gray-400">
                Stay on top of your portfolio's performance with real-time updates and historical data, allowing you to make timely adjustments and capitalize on market 
              </CardContent>
            </Card>
              <Card className="max-w-64 border border-black">
              <CardHeader className="font-bold font-mono text-xl">
               Key Metrics
              </CardHeader>
              <CardContent className="font-semibold text-gray-400">
                Gain valuable insights into your portfolio's health, including returns, risk levels, and sector exposure, to make informed investment decisions
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="flex">
          <div className="flex justify-center items-center">
            <img src={clock} className="w-3/4 h-5/6 "/>
          </div>
          <div className="w-1/2 flex flex-col text-left justify-start items-center pt-32 space-y-9 pr-24">
             <div className="w-full font-semibold text-gray-400">
              Time to invest
            </div>
            <div className="w-full text-5xl font-semibold font-mono">
             Market Outlook
            </div>
            <div className="w-full font-semibold text-gray-400">
              Explore the latest market trends, economic indicators, and expert analysis to stay ahead of the curve and seize the right investment opportunities at the right time
            </div>
            <Button>
              Track Portfolio
            </Button>
          </div>
        </section>
         <section className="flex">
          <div className="w-1/2 flex flex-col text-left justify-start items-center pt-32 space-y-9 pl-24">
             <div className="w-full font-semibold text-green-700">
              Grow Your Wealth
            </div>
            <div className="w-full text-7xl font-bold font-mono">
              Secure Your Financial Future
            </div>
            <div className="w-full font-semibold text-gray-400">
             Our investment tracker empowers you to take control of your financial destiny. By providing a comprehensive view of your portfolio, we help you make informed decisions, optimize your investments, and confidently navigate the ever-evolving market landscape.
            </div>
            <Button>
              Start Investing
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <img src={ future} className="w-3/4 h-5/6 "/>
          </div>
        </section>
        <section className="flex">
          <div className="flex justify-center items-center">
            <img src={ elevate} className="w-3/4 h-5/6 "/>
          </div>
          <div className="w-1/2 flex flex-col text-left justify-start items-center pt-32 space-y-9 pr-24">
             <div className="w-full font-semibold text-gray-400">
              Unlock Your Potential
            </div>
            <div className="w-full text-5xl font-semibold font-mono">
            Elevate Your Investments
            </div>
            <div className="w-full font-semibold text-gray-400">
              Leverage our advanced analytics and cutting-edge tools to unlock the full potential of your portfolio. Gain deep insights, identify growth opportunities, and make strategic decisions that propel your wealth to new heights.
            </div>
            <Button>
              Optimize Now
            </Button>
          </div>
        </section>
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
                 <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                 Register now for early access!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 flex justify-center">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeiq1dSVC3kS3Im8CbU-l6wnP5KdkML61G3kVNzx3W0ud0NPA/viewform?embedded=true" width="100%" height="418" frameBorder="0">Loading…</iframe>
              </div>
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
          © 2024 InvestTrack by Yash Hegde. All rights reserved.
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
