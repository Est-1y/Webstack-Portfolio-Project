import React, { useState } from "react";
import Esther from "../../assets/Esther.jpeg";
import { NavLink } from "react-router-dom";
import MoreProperty from "../Property/MoreProperty";
import ListPropertyForm from "../Templates/ListPropertyForm";

const AgentHeroBanner = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <div className="  ">
        <div className="max-w-[1440px] mx-auto py-5 px-10  md:flex justify-between">
          <div className="md:grid text-center md:text-left grid-cols-2 gap-10">
            <div className="my-10 md:my-auto">
              <h1 className="pb-4 text-4xl md:text-6xl">{props.header}</h1>
              <h5>{props.text}</h5>
              <div className="md:grid grid-cols-2 justify-between w-full pt-6 text-left ">
                <div>
                  <h5 className="inline-block mr-4">address</h5>
                  <p>City Hall Way, Nairobi, Kenya</p>
                  <h5 className="inline-block mr-4">phonenumber</h5>
                  <p>+254-757-855-088</p>
                  <h5 className="inline-block mr-4">email</h5>
                  <p>obongoesther3@gmail.com</p>
                </div>
                <div className="">
                  <h5 className="inline-block mr-4">linkedin</h5>
                  <p>https://https://linkedin.com/in/esther-obong-o-a9b184264</p>
                  <h5 className="inline-block mr-4">twitter</h5>
                  <p>@iana_terry</p>
                  <h5 className="inline-block mr-4">Instagram</h5>
                  <p>@Acey_properties</p>
                </div>

                <button className="mt-10 w-[200px]">
                  <NavLink className="" to="/AgentForm">
                    Edit Profile
                  </NavLink>
                </button>
              </div>
            </div>

            <div className="my-auto relative pt-6 sm.pt-12 md.mr-16">
              <div className="img-wrap overflow-hidden bg-zinc-700 rounded-[100px] rounded-tr-none md:w-[90%] md:ml-auto relative">
                <img
                  className="w-full h-[70vh] object-cover"
                  src={Esther}
                  alt="Esther"
                />
              </div>
              <div className="absolute top-[80%]">
                <p className="button text-[24px] px-8" onClick={handleClick}>
                  {props.label}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isClicked ? (
        <ListPropertyForm />
      ) : (
        <MoreProperty header="Properties" text="Listed Properties By Zelipha" />
      )}
    </div>
  );
};

export default AgentHeroBanner;
