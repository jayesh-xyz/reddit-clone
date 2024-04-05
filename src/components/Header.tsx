import Image from "next/image";
import React from "react";
import redditIcon from "@/assets/redditLogo.svg";
import { BeakerIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/outline";
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import {
  ChevronDownIcon,
  HomeIcon,
  SearchIcon,
  MenuIcon,
} from "@heroicons/react/solid";

import "./header.css";

function Header() {
  return (
    //Header starts here ->
    <div
      id="header"
      className="sticky top-0 z-10 flex px-3 py-2 drop-shadow-sm "
    >
      <div className=" relative h-10 w-10 flex-shrink-0 cursor-pointer">
        <Image objectFit="contain" src={redditIcon} alt="img" layout="fill" />
      </div>

      <div className="flex items-center mx-1">
        <h6 className="text-2xl text">Reddit</h6>
      </div>

      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search bar div */}
      <form className="flex flex-1 items-center space-x-2 px-2 border border-gray-700 rounded-sm ">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 rounded-sm bg-transparent outline-none"
          type="text"
          placeholder="Search "
        />
        <button type="submit" hidden></button>
      </form>

      <div className="hidden text-zinc-200 space-x-2 items-center mx-2 lg:inline-flex ">
        <SparklesIcon className="iconstyle" />
        <GlobeIcon className="iconstyle" />
        <VideoCameraIcon className="iconstyle" />
        <hr className="h-10 border border-gray-400 border-opacity-30" />
        <ChatIcon className="iconstyle" />
        <BellIcon className="iconstyle" />
        <PlusIcon className="iconstyle" />
        <SparklesIcon className="iconstyle" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="iconstyle" />
      </div>
    </div>
  );
}

export default Header;