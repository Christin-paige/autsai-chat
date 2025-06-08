import './App.css'
import Header from "../src/components/Header";
import Chat from "../src/components/Chat";
import Inbox from "../src/components/list/Inbox";
import Profile from "../src/components/Profile"

export default function App() {
  

  return (
    <div>
   <Header />
   <div className="flex justify-between m-3">
    <Profile />
     <Inbox />
   <Chat />
  
 </div>
   
    </div>

  );
}


