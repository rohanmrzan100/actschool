import React from "react";
import about from "../../../images/about.avif";
// import { Container } from "@material-tailwind/react";
const About = () => {
  return (
    <>
      <div className=" h-full w-10/12 m-auto mt-[10vh] ">
        <h1 className="text-3xl xl:text-4xl font-bold text-gray-800 pb-4">
          About Us
        </h1>
        <div className="flex flex-col-reverse xl:flex-row lg:justify-between justify-between gap-8">
          <div className="w-full xl:w-5/12 flex flex-col  container md:text-lg text-md justify-start  ">
            <div className="text-justify container">
              <p className=" text-gray-600 ">
                Et ad adipisicing quis dolor enim minim eu dolor Lorem ut ut
                eiusmod cupidatat. Qui qui nulla occaecat commodo consectetur.
                Aliquip reprehenderit in dolore excepteur consectetur elit
                officia reprehenderit. Amet mollit est anim laborum excepteur
                nostrudirure qui officia eiusmod tempor exercitation. Tempor
              </p>
              <br />
              <p className="text-gray-600 ">
                Et ad adipisicing quis dolor enim minim eu dolor Lorem ut ut
                eiusmod cupidatat. Qui qui nulla occaecat commodo consectetur.
                Aliquip reprehenderit in dolore excepteur consectetur elit
                officia reprehenderit. Amet mollit est anim laborum excepteur
                nostrudirure qui officia eiusmod tempor exercitation. Tempor
                ipsum nulla laboris sit occaecat magna ullamco proident id
                eiusmod ex ipsum amet nostrud. Fugiat mollit amet nostrud
                ullamco irure
              </p>
              <br />
            </div>
            <button
              onClick={() => (window.location.href = "/#")}
              className="border bg-yellow-600 w-28 text-white font-semibold rounded-md py-1 px-2 hover:bg-yellow-500"
            >
              Read More
            </button>
          </div>
          <div className="container ">
            <img
              className="xl:max-w-4xl lg:max-w-2xl w-full"
              src={about}
              alt="A group of People"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
