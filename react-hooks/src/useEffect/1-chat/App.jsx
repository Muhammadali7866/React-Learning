import { useEffect, useState } from "react";
import { createConnection } from "./chat";

function ChatRoom ({roomId}){
    const [serverurl, setServerUrl] = useState('https:8000/')

    useEffect(()=>{
        const connection = createConnection(serverurl,roomId);
        connection.connect();
        return ()=>{
            connection.disconnect();
        }
    },[roomId,serverurl])

    return (
        <>
        <label>
            Server URL:{" "}
            <input value={serverurl} onChange={(e)=>setServerUrl(e.target.value)} />
        </label>
        <h1>Welcome to the {roomId} room.</h1>
        </>
    )
}

export default function App() {
    const [roomId, setRoomId] = useState("general");
    const [show,setshow] = useState(false);
    return (
        <>
        <label>
            Choose the chat room:{' '}
            <select value={roomId} onChange={(e)=>setRoomId(e.target.value)}>
                <option value="general">general</option>
                <option value="travel">travel</option>
                <option value="music">music</option>

            </select>
            <button onClick={()=>setshow(!show)}>
                {show?'Close chat': 'Open chat'}
            </button>
            {show && <hr/>}
            {show && <ChatRoom roomId={roomId} />}
        </label>
        </>
    )

}