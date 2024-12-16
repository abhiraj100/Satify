/*eslint-disable*/
import React from "react";
import { navlinks } from "../../constants/data";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className=" ">
      <div className="">
        <h3>Logo</h3>
      </div>
      <div className="flex flex-col gap-4 mt-20">
        {navlinks?.map((item) => (
          <Link
            to={item.url}
            key={item.id}
            className={`flex gap-3 px-10 py-1 text-center ${item.url == pathname && "bg-white rounded-2xl"}`}
          >
            <img src={item.icon} />
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
