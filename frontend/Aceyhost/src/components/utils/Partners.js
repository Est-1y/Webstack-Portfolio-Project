import React from "react";
import { GiHouse, GiBlockHouse, GiSpookyHouse, GiFamilyHouse } from "react-icons/gi";

const Partners = () => {
  return (
    <div className="Partners">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto py-4 px-10 flex-col justify-between text-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            <div className="flex">
              <GiHouse className="text-3xl mr-4 text-orange-600" />
              <span>Houses</span>
            </div>
            <div className="flex">
              <GiBlockHouse className="text-3xl mr-4 text-orange-600" />
              <p>Block Houses</p>
            </div>
            <div className="flex">
              <GiSpookyHouse className="text-3xl mr-4 text-orange-600" />
              <p>Spooky Houses</p>
            </div>
            <div className="flex">
              <GiFamilyHouse className="text-3xl mr-4 text-orange-600" />
              <p>Family Homes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
