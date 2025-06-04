import { useState } from "react";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, orderBy, limit} from "firebase/firestore";
import { db } from "../../utils/firebase"

const messagesRef = collection(db, "messages");
const messagesQuery = query(messagesRef, orderBy("createdAt"),limit(25));

export default function Chat(){
    const [messages, loading, error] = useCollectionData(messagesQuery, { idField: "id" })
    const [newMessage, setNewMessage] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("send message: ", newMessage)
        
        setNewMessage("");
    }
   const handleChange = (e) => {
    setNewMessage(e.target.value)
   }
    
    return (
        <div className="bg-blue-400 w-100 h-200">
            <h1>This is the chat</h1>
            <form onSubmit={handleSubmit}>
                <input
                onChange={handleChange}
                type="text"
                value={ newMessage }
                placeholder="type your message"
                />
            </form>
        </div>
    )
}