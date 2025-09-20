import { GoLocation } from "react-icons/go";
import { FiChevronDown } from "react-icons/fi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import logo from "../assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { Input } from "./ui/input";
import { GoHeart } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
import { PiPhoneCallLight } from "react-icons/pi";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="text-[14px] text-gray-500">
          {/* top location and login/signup */}
          <div className="border-b border-b-gray-100 py-3 flex justify-between items-center center">
            {/* shop location container */}
            <div className="flex items-center gap-1">
              <GoLocation />
              <p>Store Location: Lincoln- 344, Illinois, Chicago, USA </p>
            </div>

            {/* currency and login and sighup button container */}
            <div className="flex items-center gap-10">
              {/* currency and language container */}
              <div className="flex items-center gap-2">
                {/* Language selection container */}
                <Select className="outline-none cup">
                  <SelectTrigger className="w-auto outline-none focus-visible:ring-0 border-none shadow-none p-0 cursor-pointer">
                    <SelectValue placeholder="Eng" />
                  </SelectTrigger>
                  <SelectContent className={"border-Primary"}>
                    <SelectItem value="bangla">Ban</SelectItem>
                    <SelectItem value="english">Eng</SelectItem>
                  </SelectContent>
                </Select>
                {/* Currency selection container */}
                <Select className="outline-none cup">
                  <SelectTrigger className="w-auto outline-none focus-visible:ring-0 border-none shadow-none p-0 cursor-pointer">
                    <SelectValue placeholder="USD" />
                  </SelectTrigger>
                  <SelectContent className={"border-Primary"}>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="bdt">BDT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* currency and language container */}
              <div className="flex items-center gap-2">
                <Button
                  className={"p-0 hover:bg-white hoverPrimary cursor-pointer "}
                  variant={"ghost"}
                >
                  Login
                </Button>
                /
                <Button
                  className={"p-0 hover:bg-white hoverPrimary cursor-pointer "}
                  variant={"ghost"}
                >
                  Signup
                </Button>
              </div>
            </div>
          </div>

          {/* Logo - Search Button - Cart Icon */}
          <div className="center flex justify-between items-center">
            {/*  */}
            {/* logo */}
            <div className="py-7 flex items-center gap-2">
              <img className="size-8" src={logo} alt="Cartify Logo" />
              <h1 className="text-4xl font-semibold text-black">Cartify</h1>
            </div>

            {/* search icon */}
            <div className="flex items-center w-[400px] h-12 border border-gray-300  rounded-md">
              <div className="px-4 flex items-center flex-1">
                <CiSearch size={24} />
                {/* search input */}
                <Input
                  className={
                    "outline-none focus-visible:ring-0 border-none shadow-none"
                  }
                  placeholder={"Search"}
                />
              </div>
              {/* search button */}
              <Button
                className={
                  "bg-Primary text-white rounded-r-md rounded-l-none h-full w-auto px-6 cursor-pointer hover:bg-hardPrimary hover:text-white"
                }
              >
                Search
              </Button>
            </div>

            {/* Cart and Wishlist */}
            <div className="flex items-center">
              {/* wishlist */}
              <div className="px-4 border-r-2">
                <GoHeart
                  className="cursor-pointer hover:text-danger transition-all duration-300"
                  size={28}
                />
              </div>
              {/* Cart */}
              <div className="pl-4 flex items-center gap-3">
                <div>
                  <BsHandbag
                    className="cursor-pointer hover:text-Primary transition-all duration-300"
                    size={28}
                  />
                </div>
                <div>
                  <h1 className="text-md text-gray-700">Shopping Cart</h1>
                  <h1 className="text-md text-black font-bold">$57.00</h1>
                </div>
              </div>
            </div>
          </div>

          {/* Nav menus and Phone */}
          <div className="bg-gray-800 py-4">
            {/*  */}
            <div className="center flex justify-between ">
              {/* Nav Menu */}
              <NavigationMenu className={"text-gray-400"}>
                <NavigationMenuList className={"gap-8 navMenu"}>
                  <NavigationMenuItem>
                    <NavLink to={"/"}>Home</NavLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavLink to={"/shop"}>Shop</NavLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavLink to={"/pages"}>Pages</NavLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavLink to={"/blog"}>Blog</NavLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavLink to={"/about-us"}>About Us</NavLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavLink to={"/contact-us"}>Contact Us</NavLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Phone Number */}
              <div className="flex items-center gap-2 text-white">
                <PiPhoneCallLight size={28} />
                <p className="cursor-pointer">(219) 555-0114</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
