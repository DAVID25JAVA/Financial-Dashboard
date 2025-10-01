"use client";
import { Menu, X, MoonStar, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      handleMode("dark");
    } else {
      handleMode("light");
    }
  }, []);

  const handleMode = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setMode(theme);
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed  top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center flex-col">
            {/* <div>
              <Image src="/logoD.png"  width={30} height={30}/>
            </div> */}
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Wealth <span className="text-green-600">Elite</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div>

          <div className="hidden md:flex items-center space-x-4">
            <div>
              <button
                value="dark"
                onClick={() =>
                  mode == "dark" ? handleMode("light") : handleMode("dark")
                }
                className="cursor-pointer"
              >
                {mode == "dark" ? (
                  <Star className="text-orange-500 w-8 h-10" />
                ) : (
                  <MoonStar className="text-orange-500 w-8 h-10" />
                )}
              </button>
            </div>
            
            <Link
              href="/dashboard"
              className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium shadow-lg hover:shadow-xl"
            >
              Dashboard
            </Link>


          </div>
          <div className="flex gap-2">

           <div className="md:hidden block">
              <button
                value="dark"
                onClick={() =>
                  mode == "dark" ? handleMode("light") : handleMode("dark")
                }
                className="cursor-pointer"
              >
                {mode == "dark" ? (
                  <Star className="text-orange-500 w-8 h-10" />
                ) : (
                  <MoonStar className="text-orange-500 w-8 h-10" />
                )}
              </button>
            </div>

           
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>
          </div>

        </div>
        
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 space-y-2">
              <Link
                href="/dashboard"
                className="block w-full px-4 py-2 text-center bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
