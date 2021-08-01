import React, { Component } from 'react'
import ChatBotImg from "../../assests/chatbot.png"

class ChatBot extends Component {
    render() {
        return (
            <div className="ChatBot-Wrapper">
                <div className="ChatBot-Message">
                    <div className="ChatBot-Trigger">
                        <img src={ChatBotImg} alt="Open Chat" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatBot;