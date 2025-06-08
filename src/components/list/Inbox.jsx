import UserInfo from "./UserInfo";
import ChatList from "./ChatList"

export default function Inbox (){
    return(
        <div className="border border-amber-600">
            
            <UserInfo />
            <ChatList/>

        </div>
    )
}