import React from "react";
import Logo from "./NavItems/Logo";
import Search from "./NavItems/Search";
import MenuDropdown from "./NavItems/MenuDroupDown";

const NavBar = () => {
  return (
    <div className=" fixed w-full bg-white z-10 shadow-md">
      <div className="py-4 border-b-[1px] my-container">
        <div className="flex flex-row items-center justify-between gap-4 md:gap-0">
          <Logo />

          {/* TODO CREATE IT FUNCONALATY */}
          <Search />

          <MenuDropdown />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
