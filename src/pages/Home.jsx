import React from "react";
import { Header } from "../assets/components/Header";
import cover from "../assets/img/cover.jpg";

export const Home = () => {
  return (
    <div className="flex justify-between items-center">
      <Header />
      <div className="flex items-center relative">
        <img
          src={cover}
          alt=""
          className="w-full h-[90hv] object-cover brightness-50"
        />
        <div className="w-1/2 flex flex-col absolute px-12 py-4 text-white">
          <div className="-mt-6 text-4xl 2xl:text-5xl font-bold mb-2 2xl:mb-3">
            Avengers: End Game (2019)
          </div>
          <div className="text-xl 2xl:text-base font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            similique suscipit vero molestias alias necessitatibus, maiores
            illum veritatis minima reiciendis ut quasi cumque dolorem autem
            atque sint quam fugit laboriosam!
          </div>
          <br />
          <div className="py-2 rounded-full text-medium">
            <button className="bg-red-600 text-white font-bold rounded-full w-60 px-1 py-3">
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
