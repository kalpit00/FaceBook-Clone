import React from "react";
import { ImUsers } from "react-icons/im";
import { MdGroups } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineOndemandVideo, MdOutlineExpandMore } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import Image from "next/image";
import Sidebaritem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]">
      <div className="flex items-center space-x-2 py-3 pl-4  hover:bg-gray-200 rounded-l-xl cursor-pointer ">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <p className="hidden sm:inline-flex font-medium">{}</p>
      </div>
      <Sidebaritem Icon={ImUsers} value="Friends" />
      <Sidebaritem Icon={MdGroups} value="Groups" />
      <Sidebaritem Icon={AiOutlineShop} value="MarketPlace" />
      <Sidebaritem Icon={MdOutlineOndemandVideo} value="Watch" />
      <Sidebaritem Icon={BsStopwatch} value="Memeries" />
      <Sidebaritem Icon={MdOutlineExpandMore} value="See more" />
    </div>
  );
};

export default Sidebar;
