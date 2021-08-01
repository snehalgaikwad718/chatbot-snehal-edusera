import React, { Component } from 'react'
import ChatBotImg from "../../assests/chatbot.png"

class ChatBot extends Component {
    render() {
        return (
            <div className="ChatBot-Wrappe">
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