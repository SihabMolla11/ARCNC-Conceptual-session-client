import React from "react";
import Heading from "../Shared/Heading/Heading";

const Header = () => {
  return (
    <>
      <Heading
        title="Velubana Bali - Owl Bambo House"
        subtitle="Sidemen, Indonesia"
      />
      <div className="w-full mt-5 md:h-[60vh] overflow-hidden rounded-xl">
        <img
          className=" object-cover"
          src="https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg"
          alt="Header image"
        />
      </div>
    </>
  );
};

export default Header;
