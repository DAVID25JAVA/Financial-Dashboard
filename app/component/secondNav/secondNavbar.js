"use client";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import React, { useState } from "react";

export const menuItems = [
  { name: "Home" },
  { name: "CRM" },
  { name: "Utilities" },
  {
    name: "Insurance",
    icons: <ChevronDown size={20} />,
    submenu: ["Life Insurance", "Health Insurance", "Car Insurance"],
  },
  {
    name: "Assets",
    icons: <ChevronDown size={20} />,
    submenu: ["Real Estate", "Stocks", "Bonds"],
  },
  { name: "Mutual" },
  { name: "Research" },
  { name: "Transact online" },
  { name: "Goal GPS" },
  { name: "Financial Planning" },
  {
    name: "Other",
    icons: <ChevronDown size={20} />,
    submenu: ["Settings", "Help", "Contact"],
  },
];

export default function SecondNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <nav
      className="bg-red-600  hidden sm:hidden md:block  text-white select-none w-full"
      role="navigation"
      aria-label="Secondary Navigation"
    >
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <ul className="flex items-center justify-center md:max-w-7xl mx-auto px-6 space-x-6 xl:space-x-[42px] py-3 font-medium text-sm">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              tabIndex={0}
              className="relative flex items-center group focus-within:outline-none"
            >
              <span className="block cursor-pointer font-semibold whitespace-nowrap uppercase hover:text-orange-200 transition-colors">
                {item.name}
              </span>
              {item?.icons && <span className="mt-0.5">{item?.icons}</span>}

              {/* Desktop Submenu */}
              {item.submenu && (
                <ul
                  className="absolute left-0 top-full mt-1 min-w-[200px] rounded-b-md bg-orange-600 shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity z-50"
                  aria-label={`${item.name} submenu`}
                >
                  {item.submenu.map((subItem, subIdx) => (
                    <li key={subIdx}>
                      <a   href="#"
                        tabIndex={-1}
                        className="block px-4 py-2 text-sm hover:bg-orange-700 focus:bg-orange-700 focus:outline-none first:rounded-t-md last:rounded-b-md">
                       
                    
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

      {/* Mobile Navigation Header */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3">
        <span className="font-bold text-lg uppercase">Menu</span>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-red-700 rounded-lg transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-red-600 border-t border-red-700 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <ul className="py-2">
            {menuItems.map((item, idx) => (
              <li key={idx} className="border-b border-red-700 last:border-b-0">
                {/* Menu Item */}
                <div
                  className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-red-700 transition-colors"
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

                {/* Mobile Submenu */}
                {item.submenu && openSubmenu === idx && (
                  <ul className="bg-orange-600">
                    {item.submenu.map((subItem, subIdx) => (
                      <li key={subIdx}>
                        <a
                          href="#"
                          className="block px-8 py-2.5 text-sm hover:bg-orange-700 transition-colors border-b border-orange-700 last:border-b-0"
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
      )}
    </nav>
  );
}