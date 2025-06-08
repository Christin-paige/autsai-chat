import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

export default function ChatList() {
  const [addText, setAddText] = useState(false);

  return (
    <div>
      <div className="p-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 flex-grow px-4 py-1 w-full bg-gray-400 rounded-lg">
            <CiSearch className="text-2xl" />
            <input
              type="text"
              placeholder="search chat"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
          <div
            onClick={() => setAddText((prev) => !prev)}
            className="cursor-pointer"
          >
            {addText ? (
              <FaPlus className="text-xl text-gray-700" />
            ) : (
              <FaMinus className="text-xl text-gray-700" />
            )}
          </div>
           </div>
           
          <div className="flex items-center border-b-1 border-gray-400">
            <img
              src="https://avatar.iran.liara.run/public/girl"
              className=" w-10 m-5"
            />
            <span>Harper
            <p>Hello</p>
            </span>
          </div>
             <div className="flex items-center border-b-1 border-gray-400">
            <img
              src="https://avatar.iran.liara.run/public/girl"
              className=" w-10 m-5"
            />
            <span>Harper
            <p>Hello</p>
            </span>
          </div>
            <div className="flex items-center border-b-1 border-gray-400">
            <img
              src="https://avatar.iran.liara.run/public/girl"
              className=" w-10 m-5"
            />
            <span>Harper
            <p>Hello</p>
            </span>
          </div>
          </div>
       
      </div>
   
  );
}
