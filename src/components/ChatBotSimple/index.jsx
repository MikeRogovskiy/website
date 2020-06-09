import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
import botLogo from "../../assets/images/сhatBot/robo.png"
import "./chatBotSimple.scss";

// https://lucasbassetti.com.br/react-simple-chatbot - source docs

const theme = {
    background: 'white',
    fontFamily: '"Montserrat", sans-serif',
    headerBgColor: 'blue',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: 'blue',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

const steps = [
    {
        id: '1',
        message: 'What is your name?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}, nice to meet you!',
        end: true,
      },
]


export default class ChatBotSimple extends Component{
    constructor(props) {
        super(props);
        this.state = {
          on: false
        };
    };

    

    appearBot = () => {
        this.setState({
            on: true
        })
    };

    disappearBot = () => {
        this.setState({
            on: false
        })
    };

    render(){
        return(
            <div id="chat-bot">
                <div id="chat-bot_container">

                    <div id="chat-bot_container_btn">
                        {this.state.on === false &&
                            <button onClick={() => this.appearBot()}><img src={botLogo} /></button>
                        }
                        {this.state.on === true &&
                            <button onClick={() => this.disappearBot()}><img src={botLogo} /></button>
                        }
                    </div>
                    <div id="chat-bot_container_content">
                        {this.state.on === true && 
                            <ThemeProvider theme={theme} >
                                <ChatBot    headerTitle="Speech Recognition"
                                            recognitionEnable={true}
                                            steps={steps} />
                        </ThemeProvider>}
                    </div>



                </div>
            </div>
            
        )
    }
}

