import React from 'react';
import { Menu } from 'lucide-react';



const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <div style={{ pointerEvents: "none" }}></div>
      <button className="md:hidden p-2 rounded-md hover:bg-gray-200">
        <Menu />
      </button>
      <div className="flex w-full justify-end px-5 py-4">
       
      </div>
    </div>
  );
};

export default Navbar;