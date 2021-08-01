import React, { Component } from 'react'
import ChatBotImg from "../../assests/chatbot.png"
import GuestImg from "../../assests/guest.png"
class ChatBot extends Component {
    state={
        Open: false,
        GuestMsg: "",
        ChatBotState: 0,
        Message:[
            {
                Text: "Hey there! I am a ChatBot! Type start to begin...",
                Bot: true
            }
        ],
        GitHubUser: null
    };

    toggleBox = () => {
        this.setState({
            Open: !this.state.Open
        })
    };

    handleGuestMsgChange = e => {
        this.setState({
            GuestMsg: e.target.value
        });
    };

    botAction = () => {
        const LastMessage = [...this.state.Message].reverse()[0].Text;
        if(LastMessage.toLowerCase() === "start") {
            const Text = "Hey Guest, thanks for starting me up! Please enter your github username.";
            this.setState({
                ChatBotState: 1,
                Message: [
                    ...this.state.Message,
                    {
                        Text,
                        Bot: true
                    }
                ]
            });
        };
        if (this.state.ChatBotState === 1) {
            const Text = `Thanks for providing ${LastMessage} as your GitHub username...`;
            this.setState({
                ChatBotState: 2,
                Message: [
                    ...this.state.Message,
                    {
                        Text,
                        Bot: true
                    },
                    {
                        Text: "Lets look it up with Github... Please Wait...",
                        Bot: true
                    }
                ]
            });
            fetch("https://api.github.com/users/" + LastMessage)
            .then(res => res.json())
            .then(GitHubUser => {
                this.setState({ GitHubUser })
            })
        };

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
        }, () => {
            this.botAction();
        });
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
                                src={msg.Bot ? ChatBotImg : 
                                    this.state.GitHubUser 
                                    ? this.state.GitHubUser.avatar_url 
                                    : GuestImg} 
                                alt={msg.Bot ? "ChatBotImg" : "GuestImg"} 
                                />
                                <p>{msg.Text}</p>
                            </li>
                        ))}
                    </ul>
                    <form className="ChatBot-Input" onSubmit={this.handleGuestMsgSubmit}>
                        <input type="text" 
                        value={this.state.GuestMsg} 
                        onChange={this.handleGuestMsgChange}
                        placeholder={this.state.GitHubUser && 
                            this.state.GitHubUser.name 
                            ? `Please write something ${this.state.GitHubUser.name}...`
                            : "Please start typing something..."
                        } 
                        />
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