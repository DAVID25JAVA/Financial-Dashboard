"use client";

import {
  LogOut,
  Search,
  Settings,
  User,
  Bell,
  Youtube,
  KeyIcon,
  Star,
  Lightbulb,
  LockKeyhole,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { menuItems } from "./secondNav/secondNavbar";
import Link from "next/link";
 

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
   

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const icon = [
    { key: <Settings size={25} /> },
    { key: <User size={25} /> },
    { key: <Star size={25} /> },
    { key: <Bell size={25} /> },
    { key: <KeyIcon size={25} /> },
    { key: <Lightbulb size={25} /> },
    { key: <LockKeyhole size={25} /> },
    { key: <Youtube size={25} /> },
  ];

  return (
    <>
      <nav className="bg-white shadow-md h-28 flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex cursor-pointer items-center justify-center">
          <Link href="/">
          <h1  className="text-lg md:text-xl font-bold text-blue-700">
            Wealth <span className="text-green-700">Elite</span>
          </h1>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex bg-gray-200 rounded-lg items-center flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-5 pr-10 text-black py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Icons */}
        <div className="hidden lg:flex gap-4 xl:gap-6 items-center justify-center">
          {icon?.map((icon, index) => (
            <div
              key={index}
              className="hover:bg-gray-200 px-2 py-2 rounded-full flex cursor-pointer"
            >
              <span className="text-gray-500">{icon?.key}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="hidden lg:block border-r-2 h-8 text-gray-400 mx-4"></div>

        {/* Logout */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-1 hover:bg-gray-200 p-2 rounded-lg transition-colors">
            <LogOut size={20} className="text-gray-600" />
            <span className="text-sm uppercase font-semibold text-gray-500">
              Logout
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-200 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-gray-600" />
          ) : (
            <Menu size={24} className="text-gray-600" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          {/* Mobile Search */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex bg-gray-200 rounded-lg items-center">
              <div className="relative w-full">
                <Search
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-5 pr-10 text-black py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="grid grid-cols-4 gap-2 p-4 border-b border-gray-200">
            {icon?.map((icon, index) => (
              <div
                key={index}
                className="hover:bg-gray-200 p-3 rounded-lg flex items-center justify-center cursor-pointer"
              >
                <span className="text-gray-500">{icon?.key}</span>
              </div>
            ))}
          </div>

          {/*  Mobile Secondary Nav (SecondNavbar items) */}
          <div className="border-t bg-orange-500 mb-20">
            <ul className="py-2">
              {menuItems.map((item, idx) => (
                <li key={idx} className="border-b border-gray-200 last:border-b-0">
                  <div
                    className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => item.submenu && toggleSubmenu(idx)}
                  >
                    <span className="font-semibold uppercase text-sm">
                      {item.name}
                    </span>
                    {item.submenu && (
                      <span
                        className={`transform transition-transform ${
                          openSubmenu === idx ? "rotate-90" : ""
                        }`}
                      >
                        <ChevronRight size={20} />
                      </span>
                    )}
                  </div>

                  {item.submenu && openSubmenu === idx && (
                    <ul className="bg-orange-400">
                      {item.submenu.map((subItem, subIdx) => (
                        <li key={subIdx}>
                          <a
                            href="#"
                            className="block px-8 py-2.5 text-sm hover:bg-gray-200 transition-colors border-b border-gray-200 last:border-b-0"
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Logout */}
          <div className="p-4">
            <button className="w-full flex items-center justify-center border border-orange-400 gap-2 hover:bg-gray-200 p-3 rounded-lg transition-colors">
              <LogOut size={20} className="text-gray-600" />
              <span className="text-sm uppercase font-semibold text-gray-500">
                Logout
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
