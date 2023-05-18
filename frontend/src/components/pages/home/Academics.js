import React from "react";
import science from "../../../images/PHYSICS-lAB.webp";
import HM from "../../../images/HM.avif";
import computer from "../../../images/computer.webp";
const Academics = () => {
  return (
    <>
      <div className="w-10/12 h-full mt-[10vh]  m-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 pb-4">
          Academics
        </h1>

        <div className="grid grid-cols-12 sm:px-5 gap-x-8 ">
          <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
            <img
              alt="
              student"
              src={HM}
              className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
            />
            <p
              className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inline-block"
            >
              Management
            </p>

            <p className="text-sm text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
          <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
            <img
              alt="
              student"
              src={science}
              className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
            />
            <p
              className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inline-block"
            >
              Science
            </p>

            <p className="text-sm text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
          <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
            <img
              alt="
              student"
              src={computer}
              className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
            />
            <p
              className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inline-block"
            >
              computer
            </p>

            <p className="text-sm text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
        </div>
        <p className="text-gray-600 p-3 my-4 ">
          Et ad adipisicing quis dolor enim minim eu dolor Lorem ut ut eiusmod
          cupidatat. Qui qui nulla occaecat commodo consectetur. Aliquip
          reprehenderit in dolore excepteur consectetur elit officia
          reprehenderit. Amet mollit est anim laborum excepteur nostrudirure qui
          officia eiusmod tempor exercitation. Tempor ipsum nulla laboris sit
          occaecat magna ullamco proident id eiusmod ex ipsum amet nostrud.
          Fugiat mollit amet nostrud ullamco irure
        </p>
        <p className="text-gray-600 p-3 my-4 ">
          Et ad adipisicing quis dolor enim minim eu dolor Lorem ut ut eiusmod
          cupidatat. Qui qui nulla occaecat commodo consectetur. Aliquip
          reprehenderit in dolore excepteur consectetur elit officia
          reprehenderit. Amet mollit est anim laborum excepteur nostrudirure qui
          officia eiusmod tempor exercitation. Tempor ipsum nulla laboris sit
          occaecat magna ullamco proident id eiusmod ex ipsum amet nostrud.
          Fugiat mollit amet nostrud ullamco irure
        </p>
      </div>
    </>
  );
};

export default Academics;
