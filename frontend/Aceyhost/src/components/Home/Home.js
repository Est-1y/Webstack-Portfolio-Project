import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchButton from "../utils/SearchButton";
import MoreProperty from "../Property/MoreProperty";
import ExpertSection from "../utils/ExpertSection";
import Works from "../utils/Works";
import Service from "../About/Service";
import Partners from "../utils/Partners";
import useFetch from "../utils/useFetch";
import ListedProperty from "../Property/ListedProperty";

function Home() {

  const {items} = useFetch()

  return (
    <div className="Home">
      <Header />
      <section className="ml-16 mr-16">
        <div className="max-w-[1440px] mx-auto py-5 px-10  md:flex justify-between">
          <div className="md:grid text-center md:text-left grid-cols-2 gap-10">
            <div className="my-10  md:my-auto">
              <h1 className="pb-8 text-4xl md:text-6xl">The ultimate platform for your living and lifestyle needs.</h1>
              <p className="text-xl mb-10">Built for convenience, tailored for you.</p>
              <SearchButton />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black  text-white flex">
        <div className="max-w-[1440px] mx-auto py-5 px-10  md:flex justify-between">
          <Service
            label="About Us"
            header="Where innovation meets convenience for all your property needs!"
            text="Discover the world with ease! At Aceyhost, we connect travelers with incredible stays and hosts with eager guests. Your journey begins here – where hospitality meets innovation.. All we do is help you find the place, meet the agents, and seal the deal. There's no extra commission for our service."
          />
        </div>
      </section>

      <section className="bg-black text-white">
      <ListedProperty header="Listed Properties" text="Check Out The top rated Properties around the World " items={items} />
      </section>
      <section className="bg-black  text-white">
        <div className="text-center pt-20">
          <h3 className="text-blue-700 text-2xl">The Process</h3>
          <p className="mb-12">Strength in Synergy</p>
        </div>
        <Works />
      </section>
      <section className="bg-black text-white">
        <div className="text-center pt-20">
          <h3 className="text-blue-700 text-2xl">Connect with an Expert</h3>
          <p>Want expert help?</p>
          <p>Connect with agents across the globe for tailored support.</p>
        </div>
        <ExpertSection />
      </section>
      <section className="bg-black text-white">
        <div className="text-center pt-14">
          <h3 className="text-blue-700 text-2xl">Our Associates</h3>
          <p className="mb-12">Our partnerships with industry leaders ensure exceptional service and trusted solutions.</p>
        </div>
        <Partners />
      </section>
      <section className="bg-black  text-center pt-16">
        <h3 className="text-blue-700 text-2xl ">Any Question?</h3>
        <p className="mb-20 text-white">We are here just for you.</p>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
