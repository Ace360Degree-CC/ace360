"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="dark:bg-[#FCF5EB]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/images/navbar/main-logo.webp"
            width={100}
            height={40}
            alt="ACE360 Logo"
            className="h-[50px] w-auto"
          />
        </Link>

        {/* Menu Toggle Button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium text-[#808080] flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-4 md:items-center">
            {/* your links (unchanged) */}
            <li>
              <Link
                href="http://localhost:3000/company"
                className="block py-2 px-3 hover:text-[#666666] md:p-0"
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="block py-2 px-3 hover:text-[#666666] md:p-0"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className="block py-2 px-3 hover:text-[#666666] md:p-0"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block py-2 px-3 hover:text-[#666666] md:p-0"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="block py-2 px-3 hover:text-[#666666] md:p-0"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 hover:text-[#666666] md:p-0"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/we-are-hiring"
                className="block py-2 px-3 hover:text-[#666666] md:p-0"
              >
                We Are Hiring
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-[#808080] bg-[#343A40] rounded-[7px] p-[10px] hover:text-[#666666]"
              >
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
