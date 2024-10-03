"use client";
import React, { useState } from "react";
import Image from "next/image";
import SecondaryButton from "@/components/SecondaryButton";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  const [showSearchBar, setShowSearchBar] = useState(false);

  const allowSearch = pathname != "/search" && pathname != "/";

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (event: any) => {
    event.preventDefault();

    router.push(`${domain}/search?query=${searchQuery}`);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex max-w-screen-2xl w-full justify-between items-center h-18 px-6">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={107}
            height={35}
            className=""
          />
        </Link>

        <div className="flex flex-row items-center space-x-4 my-4">
          {allowSearch && (
            <div className="flex flex-row">
              <button
                onClick={() => setShowSearchBar(!showSearchBar)}
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 rounded-lg text-sm p-2.5 me-1"
              >
                <Image
                  src="/images/search.svg"
                  alt="search"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </button>

              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <form onSubmit={handleSearchSubmit}>
                  <Input
                    type="text"
                    id="search-navbar"
                    className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-[50px] bg-gray-50 focus:bg-gray-50 focus:ring-gray-500 focus:border-gray-500 appearance-none"
                    placeholder="Search..."
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                    }}
                  />
                </form>
              </div>
            </div>
          )}
          (
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="hover:cursor-pointer">
                  <AvatarImage className="rounded-full" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="min-w-56 my-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow">
                <div className="px-4 py-3"></div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      href={`${domain}/my/posts`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Shared posts
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={`${domain}/my/meetings/bookings`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Meetings
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={`${domain}/my/unlocked-posts`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Unlocked posts
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={`${domain}/my/coins/overview`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <p className="flex flex-row justify-between">
                        <span>Coins</span>{" "}
                        <span className="px-1.5 bg-primary-color rounded-sm text-white"></span>
                      </p>
                    </Link>
                  </li>
                </ul>

                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      href={`${domain}/share-your-experience/new`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Share your experience
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={`${domain}/buy-coins`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Buy coins
                    </Link>
                  </li>
                </ul>

                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      href={`${domain}/my/profile`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={`${domain}/my/account`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Account settings
                    </Link>
                  </li>

                  <li>
                    <p
                      onClick={() => {}}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
                    >
                      Sign out
                    </p>
                  </li>
                </ul>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          ) (
          <SecondaryButton
            text="Sign in"
            className="flex items-center"
            action={() => {
              router.push("/auth/login");
            }}
          />
          )
        </div>
      </div>

      {showSearchBar && allowSearch && (
        <div className="items-center w-full md:flex md:w-auto md:order-1 px-6 pb-4 transition ease-in-out">
          <div className="relative block md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <form onSubmit={handleSearchSubmit}>
              <Input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-[50px] bg-gray-50 focus:bg-gray-50 focus:ring-gray-500 focus:border-gray-500 appearance-none"
                placeholder="Search..."
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
              />
            </form>
          </div>
        </div>
      )}

      <div className="flex w-full text-center text-sm bg-blue-500 justify-center items-center px-4 py-2">
        <p className="text-white">
          <span>💸 Get paid when you</span>{" "}
          <Link href={`${domain}/share-your-experience/new`}>
            <span className="hover:cursor-pointer underline">
              share your hiring story
            </span>{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
