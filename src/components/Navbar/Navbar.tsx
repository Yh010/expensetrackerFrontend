import { DollarSignIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex">
              <DollarSignIcon className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">
                InvestTrack
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <Button variant="ghost">
              <Link to="/app"> Dashboard</Link>
            </Button>
            <Button variant="ghost">
              <Link to="/profile"> Profile</Link>
            </Button>
            <Button variant="ghost">Settings</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
