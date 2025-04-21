import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { MdModeNight, MdSunny } from "react-icons/md";
import { Link } from "react-router-dom";
import CreatePage from "../pages/CreatePage";
import { ThemeToggle } from "./ui/ThemeToggle";




const Navbar = () => {

  return (
    <nav className="w-full px-6 py-4 bg-background border-b shadow-sm flex items-center justify-between">
      {/* Left - "Title */}
      <Link to="/">
        <div className="text-xl font-bold tracking-wide">Products</div>
      </Link>

      {/* Right - Buttons */}
      <div className="flex items-center gap-4">
        <Link to="/create">
     
          <Button variant="default">
            <FaPlus />
          </Button>
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
