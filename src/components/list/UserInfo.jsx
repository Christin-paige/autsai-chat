import { BsThreeDots } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";


export default function UserInfo() {
    return (
        <div className="flex flex-col items-center">
            <p className="text-lg font-semibold">UserInfo</p>
        <div className="flex items-center">
        <img 
        src="https://avatar.iran.liara.run/public/girl"
        className=" w-10 m-5" />
        <p className="text-sm mr-4 text-gray-700">Christin</p>
        <BsThreeDots />
        <HiOutlinePencilAlt className="text-2xl m-2"/>
        </div>
        </div>
    )
}