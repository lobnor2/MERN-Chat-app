import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  //   const fetchChats = () => {
  //     axios
  //       .get("/api/chat")
  //       .then((res) => {
  //         console.log(res.data);
  //         setChats(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   };

  useEffect(() => {
    axios
      .get("/api/chat")
      .then((res) => {
        // console.log(res.data);
        setChats(res.data);
      })
      .catch((err) => console.log(err));
    // fetchChats();
  }, []);
  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
