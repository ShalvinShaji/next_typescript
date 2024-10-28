"use client"
import React, { useState } from 'react';

const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim() !== '') {
            setMessages([...messages, input]);
            setInput('');
        }
    };

    return (
        <div className="fixed right-5 lg:bottom-36 bottom-24  max-w-sm bg-blue-50  rounded-lg overflow-hidden">
            <div className="card-body flex flex-col h-96">
                <h2 className="text-black shadow-black">Hey, How are you ?</h2>

                <div className="flex-grow overflow-y-auto p-2 space-y-2">
                    {messages.map((message, index) => (
                        <div key={index} className="chat chat-end">
                            <div className="chat-bubble chat-bubble-primary bg-slate-900 text-white">{message}</div>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="flex items-center space-x-2 pt-3">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="input input-bordered w-full text-sm sm:text-base text-white"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button className="btn btn-primary text-sm sm:text-base bg-slate-900 text-white border-0" onClick={handleSendMessage}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;

