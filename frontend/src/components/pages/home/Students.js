import React from "react";
import std1 from "../../../images/std1.webp"
const array = [1,1,1,1,1,1]
const Students = () => {
  return (
    <div className="h-full w-10/12 m-auto">
      <h1 className="text-3xl lg:text-4xl mb-4 font-bold text-gray-800">
        Students
      </h1>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid gap-4 lg:grid-cols-3">
          {array.map(() => (
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-200 border-gray-200 ">
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src={std1}
                  alt="profilepicture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Joseph McFall</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    School topper 88.9%
                  </div>
                </div>
              </figcaption>
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <p className="my-4 justify-center">
                  Studeents in shaping their career and future. The visionary
                  involvement of academicians as promoters, managers and faculty
                  members has proved to be an asset to the institution. Aroma
                  has been able to creat a distinct identity among similar
                  institutions. The teachi
                </p>
                <p className="my-4 justify-center">
                  ssociation with us will surely give you higher perfection,
                  satisfaction and security. At Aroma, you can be sure about
                  being a part of distinctly novel academic arena with an
                  exceptionally sound environment. So, bestow
                </p>
              </blockquote>
            </figure>
          ))}
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default Students;
 