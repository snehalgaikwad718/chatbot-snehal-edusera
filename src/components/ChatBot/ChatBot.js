import React, { Component } from 'react'
import ChatBotImg from "../../assests/chatbot.png"
import GuestImg from "../../assests/guest.png"
class ChatBot extends Component {
    render() {
        return (
            <div className="ChatBot-Wrapper">
                <div className="ChatBot-Message">
                    <ul>
                        {[{
                            Text: "Hello, I'm a ChatBot!",
                            Bot: true
                        },
                        {
                            Text: "Hello, ChatBot",
                            Bot: false
                        }].map((msg, key) => (
                            <li key={key} className={msg.Bot ? "ChatBotImg" : "GuestImg"}>
                                <img 
                                src={msg.Bot ? ChatBotImg : GuestImg} 
                                alt={msg.Bot ? "ChatBotImg" : "GuestImg"} 
                                />
                                <p>{msg.Text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <form className="ChatBot-Input"></form>
                <div className="ChatBot-Trigger">
                    <img src={ChatBotImg} alt="Open Chat" />
                </div>
            </div>
        )
    }
}

export default ChatBot;