"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="dark:bg-[#FCF5EB]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
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
          <ul className="font-medium text-[#808080] flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-4 md:items-center ">
            {/* your links (unchanged) */}
            <li>
              <Link
                href="/company"
                className="nav-link block py-2 px-3 rounded-md relative overflow-hidden z-10 text-[#808080] hover:text-white transition-colors duration-300 md:p-2"
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="nav-link block py-2 px-3 rounded-md relative overflow-hidden z-10 text-[#808080] hover:text-white transition-colors duration-300 md:p-2"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className="nav-link block py-2 px-3 rounded-md relative overflow-hidden z-10 text-[#808080] hover:text-white transition-colors duration-300 md:p-2"
              >
                Product
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/services"
                className="nav-link block py-2 px-3 rounded-t-md relative overflow-hidden z-10 text-[#808080] hover:text-white transition-colors duration-300 md:p-2"
              >
                Services
              </Link>

              {/* Dropdown Container */}
              <div className="absolute pl-6 pr-6 pt-6 pb-6 top-full right-0 w-screen max-w-3xl bg-[#f2a300] shadow-lg  hidden group-hover:flex gap-12 text-white z-50 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto rounded-b-lg">
                {/* Digital Marketing */}
                <div>
                  <h3 className="font-bold text-xl mb-2">Digital Marketing</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services/digitalmarketing/performance-marketing">
                        Performance Marketing
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/digitalmarketing/search-engine-optimization">
                        Search Engine Optimization
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/digitalmarketing/social-media-marketing">
                        Social Media Marketing
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/digitalmarketing/Influencer-marketing">
                        Influencer Marketing
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/digitalmarketing/online-reputation-management">
                        Online Reputation Management
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/digitalmarketing/content-writing">
                        Content Writing
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Branding */}
                <div>
                  <h3 className="font-bold text-xl mb-2">Branding</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services/branding/marketing-collaterals">
                        Marketing Collaterals
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/branding/brand-strategy">
                        Brand Strategy
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/branding/brand-naming">
                        Brand Naming
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/branding/logo-designing">
                        Logo Designing
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/branding/video-editing">
                        Video Editing
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/branding/motion-graphics">
                        Motion Graphics
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/branding/package-designing">
                        Package Designing
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/branding/graphics-designing">
                        Graphics Designing
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/branding/3d-modelling-and-animation">
                        3D Modelling & Animation
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Technology */}
                <div>
                  <h3 className="font-bold text-xl mb-2">Technology</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="services/technology/website-development">
                        Website Design & Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/technology/mobile-app-development">
                        Mobile Apps Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/technology/custom-software-development">
                        Custom Software Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/technology/e-commerce-web-development">
                        Ecommerce Website Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/technology/portal-development">
                        Portal Development / Market Place
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/technology/wordpress">
                        WordPress Website
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/technology/shopify">
                        Shopify Website Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/technology/opencart">
                        Opencart Website Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/technology/squarespace">
                        Squarespace Website Development
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/blogs"
                className="nav-link block py-2 px-3 rounded-md relative overflow-hidden z-10 text-[#808080] hover:text-white transition-colors duration-300 md:p-2"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="nav-link block py-2 px-3 rounded-md relative overflow-hidden z-10 text-[#808080] hover:text-white transition-colors duration-300 md:p-2"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                href="/we-are-hiring"
                className="nav-link block py-2 px-3 rounded-md relative overflow-hidden z-10 text-[#808080] hover:text-white transition-colors duration-300 md:p-2"
              >
                We Are Hiring
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block nav-link  relative text-white bg-[#343A40] rounded-[7px] p-[10px] hover:text-white hover:bg-[var(--theme-primary)]"
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
