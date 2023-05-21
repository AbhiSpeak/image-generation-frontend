import React from "react";

import { download } from "../assets";
import heart from "../assets/heart.svg";
import heartRed from "../assets/heartRed.svg";
import { downloadImage } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Card = ({ _id, name, prompt, photo, favourite }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const addTofavourite = async (_id) => {
    try {
      const obj = {
        favourite: true,
      };
      const { data } = await axios.patch(
        `http://localhost:8080/api/v1/post/${_id}`,
        obj
      );
      console.log(`<<<ADDED TO FAVOURITE>>>`);
    } catch (err) {}
  };

  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-md overflow-y-auto prompt">{prompt}</p>

        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-sx font-bold">
              {name[0].toUpperCase()}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <div className="flex">
            {userInfo ? (
              <button
                type="button"
                onClick={() => addTofavourite(_id)}
                className="outline-none bg-transparent border-none mr-2"
              >
                {favourite === "true" ? (
                  <img
                    src={heartRed}
                    alt="download"
                    className="w-6 h-6 object-contain invert "
                  />
                ) : (
                  <img
                    src={heart}
                    alt="download"
                    className="w-6 h-6 object-contain invert "
                  />
                )}
              </button>
            ) : (
              ""
            )}
            <button
              type="button"
              onClick={() => downloadImage(_id, photo)}
              className="outline-none bg-transparent border-none"
            >
              <img
                src={download}
                alt="download"
                className="w-6 h-6 object-contain invert "
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
