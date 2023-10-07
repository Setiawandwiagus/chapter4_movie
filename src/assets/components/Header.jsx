import React from "react";
import { Brand } from "./Brand";
import { Search } from "./Search";
import Button from "./Button";

export const Header = () => {
  return (
    <div className="absolute top-2 left-5 right-5 p-4 flex justify-between items-center z-50">
      <Brand />
      <Search />
      <div className="flex gap-2">
        <Button varient="transparant">Login</Button>
        <Button varient="red">Register</Button>
      </div>
    </div>
  );
};
