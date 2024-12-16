/*eslint-disable*/
import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { IoIosStar } from "react-icons/io";
import Banner from "../components/specific/Banner";
import { action } from "../constants/data";
import ProfileCard from "../components/specific/ProfileCard";

const Home = () => {
  return (
    <AppLayout>
      <div className="bg-white h-full overflow-auto p-2">
        <div className="flex justify-end">{/* icons to be imported */}</div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <Banner />
            <div className="flex justify-around my-6">
              {action?.map((item) => (
                <button className="bg-gradient-to-r  from-sky-500  to-sky-200 text-sky-800 font-semibold rounded-sm px-8 py-1">
                  {item}
                </button>
              ))}
            </div>
            
          </div>
          <div className="col-span-4" >
            <ProfileCard/>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;
