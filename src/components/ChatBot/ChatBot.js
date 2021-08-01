import React, { Component } from 'react'
import ChatBotImg from "../../assests/chatbot.png"
import GuestImg from "../../assests/guest.png"
class ChatBot extends Component {
    state={
        Open: false,
        GuestMsg: "",
        Message:[
            {
                Text: "Hello, I'm a ChatBot!",
                Bot: true
            },
            {
                Text: "Hello, ChatBot",
                Bot: false
            }
        ]
    };

    toggleBox = () => {
        this.setState({
            Open: !this.state.Open
        })
    };

    handleGuestMsgChange = e => {
        this.setState({
            GuestMsg: e.target.value
        })
    };

    handleGuestMsgSubmit = e => {
        e.preventDefault();
        const Text= this.state.GuestMsg;
        this.setState({
            GuestMsg: "",
            Message: [
                ...this.state.Message,
                {
                    Text,
                    Bot: false
                }
            ]
        })
    };

    render() {
        return (
            <div className="ChatBot-Wrapper">
                {this.state.Open && (
                <div className="ChatBot-Message">
                    <ul>
                        {this.state.Message.map((msg, key) => (
                            <li key={key} className={msg.Bot ? "ChatBotImg" : "GuestImg"}>
                                <img 
                                src={msg.Bot ? ChatBotImg : GuestImg} 
                                alt={msg.Bot ? "ChatBotImg" : "GuestImg"} 
                                />
                                <p>{msg.Text}</p>
                            </li>
                        ))}
                    </ul>
                    <form className="ChatBot-Input" onSubmit={this.handleGuestMsgSubmit}>
                        <input type="text" value={this.state.GuestMsg} onChange={this.handleGuestMsgChange} />
                    </form>
                </div>)}
                
                <div className="ChatBot-Trigger">
                    <img src={ChatBotImg} alt="Open Chat" onClick={this.toggleBox} />
                </div>
            </div>
        )
    }
}

export default ChatBot;