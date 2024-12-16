// import React from 'react'
import profile from "../../assets/oman.png";
import graph from "../../assets/graph.png";
import { stats } from "../../constants/data";

const ProfileCard = () => {
  return (
    <div className=" shadow-md h-dvh flex flex-col p-2">
      <div className="p-3 bg-gradient-to-r from-[#A195D680] via-[#4FAFD780] to-[#3366CC80] rounded-xl">
        <h2>Hello Omar!</h2>
        <div className="flex justify-center my-4">
          <div className="overflow-hidden bg-gradient-to-r from-blue-500  from-50% to-transparent p-2 to-50% rounded-full">
            <img className="rounded-full border" src={profile} />
          </div>
        </div>
      </div>
      <div className="px-16 py-5">
        <img src={graph} />
        <div>Your test progress</div>
      </div>
      <div>
        <h1>Complete test</h1>
        <div className="flex flex-col gap-4">
          {stats?.map(({ title, icon, progress }, index) => {
            const rem = 100 - progress;
            console.log(rem)
            return (
              <div key={index} className="shadow-xl flex justify-between p-2">
                <img src={icon} />
                <p>{title}</p>
                <div
                  className={`rounded-full h-10 p-1 w-10 bg-gradient-to-r from-green-500 from-${progress}%  to-transparent to-${rem}%`}
                >
                  <div className="text-xs rounded-full flex items-center justify-center  bg-white h-full">{progress}%</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
