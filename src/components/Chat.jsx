import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query, orderBy, limit } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { BsEmojiSmile } from "react-icons/bs";

const messagesRef = collection(db, "messages");
const messagesQuery = query(messagesRef, orderBy("createdAt"), limit(25));

export default function Chat() {
  const [messages, loading, error] = useCollectionData(messagesQuery, {
    idField: "id",
  });
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("send message: ", newMessage);

    setNewMessage("");
  };
  const handleChange = (e) => {
    setNewMessage(e.target.value);
  };

  return (
    <div className="flex flex-col flex-1 border-x border-gray-400 h-full">
      <div className="flex items-center gap-4 p-4 border-b">
        <img
          src="https://avatar.iran.liara.run/public/girl"
          className=" mr-4 w-10 h-10 rounded-full"
        />
        <div>
          <span className="font-semibold">Harper</span>
          <p className="text-sm text-gray-600">
            Do you want to go to the store later today?
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
      {/*middle*/}

      <div className="flex items-center gap-3 border-t px-4 py-3 bg-white"></div>

      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 px-4 py-2 bg-gray-200 rounded outline-none"
      />
      <div className="text-2xl text-gray-600 cursor-pointer">
        <BsEmojiSmile />
      </div>
      <button className="px-4 py-2 bg-gray-300 text-white rounded hover:bg-gray-600">Send</button>
    </div>
    </div>
  );
}
