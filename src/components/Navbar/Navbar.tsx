import { DollarSignIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import LoginButton from "../Auth/Login";
import LogoutButton from "../Auth/Logout";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/landing" className="flex">
              <DollarSignIcon className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">
                InvestTrack
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <Button variant="ghost">
              <Link to="/"> Dashboard</Link>
            </Button>
            <Button variant="ghost">
              <Link to="/profile"> Profile</Link>
            </Button>
            <Button variant="ghost">
              <Link to="/goals">Goals</Link>
            </Button>

            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
