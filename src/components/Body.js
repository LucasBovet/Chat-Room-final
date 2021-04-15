import { useState, useEffect, useRef } from 'react';
import WebSocketProvider from '../WebSocketContext';
import io from 'socket.io-client';
import './Body.css'

window.socket = io('');

const Body = () => {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        window.socket.on('message-recu', (data) => {
            console.log(data)
            setMessages(state => {
                const tmp = [...state];
                tmp.push(JSON.parse(data));
                return tmp;
            })
        });
    }, [])

    return (
        <div className='body'
            style={{
                overflow: 'auto'
            }}
        >
            {messages.map((message, index) => (
                <div
                    key={index}
                    style={{
                        fontFamily: 'Helvetica',
                        background: '#BFBFBF',
                        width: 200,
                        height: 100,
                        color: 'black',
                        padding: 5,
                        marginTop: 5,
                        marginBottom: 5,
                        marginLeft: 10,
                        borderRadius: 20
                    }}
                >
                    {message.msg}
                </div>
              
            ))}
        </div>
    )

};

const BodyConatiner = () => {
    return(
        <WebSocketProvider>
            <Body />
        </WebSocketProvider>
    )
}

export default BodyConatiner;