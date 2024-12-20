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
import { LineChart, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import invest from "../assets/invest.webp";
import clock from "../assets/clock.webp";
import elevate from "../assets/elevate.webp";
import future from "../assets/future.webp";
import Typed from "typed.js";
import { RiCloseLine, RiMenu3Fill } from "@remixicon/react";
import { useEffect, useRef, useState } from "react";

export default function LandingPage() {

  const [isOpen, setisOpen] = useState(false);
  

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  const typedElem = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Invest Confidently', 'Time to invest', 'Market Outlook', 'Grow Your Wealth', 'Secure Your Financial Future', 'Unlock Your Potential', 'Elevate Your Investments'],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
      backDelay: 2000,
    };


    const typed = new Typed(typedElem.current, options);

    // This ensures that the Typed instance does not continue to run or hold onto resources after the component is no longer in use.
    return () => {
      typed.destroy();
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen items-center">

      <nav className="fixed top top-4 left-0 right-0 z-50 m-2">
        <div className="text-neutral-500 bg-white/80 backdrop-blur-md max-x-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-500/50">
          {/* Left Logo */}
          {/* <img src={logo} alt="logo" width={120} height={24} /> */}

          {/* Left Items  */}
          <div className="flex flex-row w-[30%]">
            <LineChart className="h-6 w-6 text-gray-800" />
            <span className="text-gray-800">InvesTrack</span>
          </div>

          {/* Center Links (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-6">
            <a href="#early-access" className="hover:text-neutral-200">
              Get Early Access
            </a>
            <a href="#testimonials" className="hover:text-neutral-200">
              Testimonials
            </a>
            <a href="#pricing" className="hover:text-neutral-200">
              Pricing
            </a>
            
          </div>

          {/* Right Buttons (Hidden on Mobile) */}
          <div className="hidden md:flex justify-end w-[30%] space-x-4 items-center">

            <Link
              to={"/app"}
              className="bg-gray-800 border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-emerald-900 transition"
            >
              Launch
            </Link>
          </div>

          {/* Hamburger Icon for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutral-800/50 focus:outline-none"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <RiCloseLine /> : <RiMenu3Fill />}
            </button>
          </div>
        </div>


        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-500/50 mt-2">
            <div className="flex flex-col space-y-4">
            <a href="#testimonials" className="text-gray-800 hover:font-bold transistion duration-100">
                Testomonials
              </a>
              <a href="#pricing" className="text-gray-800 hover:font-bold transistion duration-100">
                Pricing
              </a>
              
              <a
                href="#early-access"
                className="border border-gray-500/50 text-gray-800 py-2 px-4 rounded-lg hover:bg-neutral-700 hover:text-white transition duration-200"
              >
                Get Early Access!
              </a>
              <Link
                to={"/app"}
                className="bg-gray-800 border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition"
              >
                Launch
              </Link>
            </div>
          </div>
        )}

      </nav>

      <main className="flex-1 flex-col px-4">

        <section className="flex justify-center items-center mt-24 p-6">
          <div className="flex flex-wrap gap-8 mt-1 md:mt-2 md:space-x-24 font-bold text-xl md:text-2xl justify-evenly text-neutral-500 uppercase">
            <div>Chevron</div>
            <div>Shell</div>
            <div>Ferrari</div>
            <div>Rolex</div>
            <div>Apple</div>
          </div>
        </section>

        <section className="flex max-w-7xl mx-auto">

          <div className="w-full flex flex-col justify-center items-center space-y-5 py-8">

            <div className="w-1/2 flex justify-center items-center">
              <img src={invest} className="w-3/4 md:w-2/4 h-auto aspect-square" />
            </div>

            <div className="w-full text-center text-3xl md:text-5xl font-bold font-mono ">
              <span ref={typedElem}></span>
            </div>

            <div className="w-full font-semibold text-center text-gray-400 max-w-4xl">
              Welcome to our investment tracker website! Here, you can easily
              monitor your portfolio's performance and access key metrics to
              make informed financial decisions.
            </div>
            <Button className="w-fit">Track Portfolio</Button>




          </div>


        </section>


        <section className="space-y-6 mt-24 max-w-7xl mx-auto">
          <div className="w-full flex justify-center items-center font-bold font-mono text-4xl">
            Personalized Insights
          </div>
          <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="font-bold font-mono text-xl">
                Asset Allocation
              </CardHeader>
              <CardContent className="font-semibold text-gray-400">
                Our cutting-edge analytics provide a comprehensive view of your
                portfolio, empowering you to optimize your investment strategy
                and maximize your returns.
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="font-bold font-mono text-xl">
                Portfolio
              </CardHeader>
              <CardContent className="font-semibold text-gray-400">
                Leverage our advanced tools to ensure your investments are
                balanced and aligned with your financial goals, reducing risk.
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="font-bold font-mono text-xl">
                Performance
              </CardHeader>
              <CardContent className="font-semibold text-gray-400">
                Stay on top of your portfolio's performance with real-time
                updates and historical data, allowing you to make timely
                adjustments and capitalize on market opportunities.
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="font-bold font-mono text-xl">
                Key Metrics
              </CardHeader>
              <CardContent className="font-semibold text-gray-400">
                Gain valuable insights into your portfolio's health, including
                returns, risk levels, and sector exposure, to make informed
                investment decisions.
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row max-w-7xl mx-auto mt-24 justify-center">

          <div className="flex justify-center items-center">
            <img src={clock} className="w-2/4" />
          </div>

          <div className="w-full flex flex-col items-center pt-32 space-y-9 text-center">
            <div className="w-full font-semibold text-gray-400">
              Time to invest
            </div>
            <div className="w-full text-5xl font-semibold font-mono">
              Market Outlook
            </div>
            <div className="w-full font-semibold text-gray-400">
              Explore the latest market trends, economic indicators, and expert
              analysis to stay ahead of the curve and seize the right investment
              opportunities at the right time
            </div>
            <Button>Track Portfolio</Button>
          </div>
        </section>

        <section className="max-w-7xl mt-24 flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col gap-8 text-center justify-center items-center">

            <div className="w-full font-semibold text-gray-800">
              Grow Your Wealth
            </div>
            <div className="w-full text-7xl font-bold font-mono">
              Secure Your Financial Future
            </div>
            <div className="w-full font-semibold text-gray-400">
              Our investment tracker empowers you to take control of your
              financial destiny. By providing a comprehensive view of your
              portfolio, we help you make informed decisions, optimize your
              investments, and confidently navigate the ever-evolving market
              landscape.
            </div>
            <Button className="bg-stone-800">Start Investing</Button>
          </div>

          <div className="flex justify-center items-center">
            <img src={future} className="w-2/3" />
          </div>

        </section>


        <section className="max-w-7xl mt-24 flex flex-col-reverse lg:flex-row justify-center gap-12"> 
          <div className="flex justify-center items-center">
            <img src={elevate} className="w-2/3 " />
          </div>

          <div className="w-full flex flex-col gap-8 mt-8 md:mt-0 text-center justify-center items-center md:p-4">
            <div className="w-full font-semibold text-gray-400">
              Unlock Your Potential
            </div>
            <div className="w-full text-5xl font-semibold font-mono">
              Elevate Your Investments
            </div>
            <div className="w-full font-semibold text-gray-400">
              Leverage our advanced analytics and cutting-edge tools to unlock
              the full potential of your portfolio. Gain deep insights, identify
              growth opportunities, and make strategic decisions that propel
              your wealth to new heights.
            </div>
            <Button>Optimize Now</Button>
          </div>
        </section>


        <section id="early-access" className="max-w-7xl p-8 mx-auto mt-24 rounded-2xl border border-stone-500/50 md:py-24  bg-gradient-to-b from-stone-200 via-gray-50 to-stone-200">

          <div className="flex flex-col items-center gap-8 text-center">

            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Get Early Access Now!
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Effortlessly manage and analyze your investment portfolio with
                our powerful, user-friendly platform.
              </p>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Register now for early access!
              </p>
            </div>

            <div className="w-full max-w-sm space-y-2 flex justify-center items-center">
              {/* <div >
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeiq1dSVC3kS3Im8CbU-l6wnP5KdkML61G3kVNzx3W0ud0NPA/viewform?embedded=true"
                  width="100%"
                  height="400"
                  className="overflow-hidden"
                ></iframe>
                </div> */}

              <Button className="bg-stone-800 p-5 text-md">
                <a href="">
                Get Early Access!
                </a>
              </Button>

            </div>

          </div>
        </section>





        <section
          id="testimonials"
          className="max-w-7xl mx-auto rounded-2xl border border-stone-500/50 mt-24 py-12 md:py-32 bg-stone-100"
        >
          <div className="w-80%">

            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Our Users Say
            </h2>

            <div className="w-[80%] mx-auto grid gap-6 lg:grid-cols-3 lg:gap-12">
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
          className="max-7xl mt-24 py-12 md:py-24 lg:py-32 bg-white"
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
