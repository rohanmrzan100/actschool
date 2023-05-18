import React from "react";
import chairman from "../../../images/chairman.avif";
import vicechairman from "../../../images/vicechairman.webp";
const Message = () => {
  return (
    <div className="w-10/12 m-auto">
      <h1 className="text-3xl lg:text-4xl mb-4 font-bold text-gray-800 pb-4">
        Message
      </h1>
      <div className="flex flex-col space-y-4 ">
        <div class="lg:flex bg-yellow-400 ">
          <div class="p-5 ">
            <h4 class="text-2xl font-semibold text-cyan-900">
              Message from Our Chairman
            </h4>
            <p class="text-gray-600 text-justify">
              Qui anim cupidatat est aliquip consectetur culpa. Proident
              proident deserunt in est cupidatat et aute dolore nisi labore
              nulla. Nostrud velit duaborum velit occaecat laboris cillum. In ex
              exercitation dolor eiusmod aliquip eiusmod reprehenderit quis aute
              magna.
            </p>
            <p class="text-gray-600 text-justify">
              ommodo commodo qui aute fugiat deserunt sunt amet laboris eu.
              Velit nostrud ea deserunt eu cillum. Exercitation minim officia
              cupidatat ea dolor laborum velit occaecat laboris cillum. In ex
              exercitation dolor eiusmod aliquip eiusmod reprehenderit quis aute
              magna. Ex elit et laboris consequat
            </p>
          </div>
          <img
            src={chairman}
            alt="art cover"
            loading="lazy"
            width="1000"
            height="667"
            class="object-contain rounded-lg h-1/2 "
          />
        </div>
        <div class=" lg:flex flex-col-reverse space-x-4 bg-green-400 ">
          <img
            src={vicechairman}
            alt="art cover"
            loading="lazy"
            width="1000"
            height="667"
            class="object-contain rounded-lg h-1/2 "
          />
          <div class=" pl-0 p-5">
            <h4 class="text-2xl font-semibold text-cyan-900">
              Message from Our Vice Chairman
            </h4>
            <p class="text-gray-600 text-justify">
              Qui anim cupidatat est aliquip consectetur culpa. Proident
              proident deserunt in est cupidatat et aute dolore nisi labore
              nulla. Nostrud velit duaborum velit occaecat laboris cillum. In ex
              exercitation dolor eiusmod aliquip eiusmod reprehenderit quis aute
              magna.
            </p>
            <p class="text-gray-600 text-justify">
              ommodo commodo qui aute fugiat deserunt sunt amet laboris eu.
              Velit nostrud ea deserunt eu cillum. Exercitation minim officia
              cupidatat ea dolor laborum velit occaecat laboris cillum. In ex
              exercitation dolor eiusmod aliquip eiusmod reprehenderit quis aute
              magna. Ex elit et laboris consequat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
