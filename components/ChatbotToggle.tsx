"use client";

import React, { useState } from 'react';
import Chatbot from "@/components/Chatbot";
import Button from "@/components/Button";

const ChatbotToggle = () => {
    const [chatbot, setChatbot] = useState(false);
    const [buttonContent, setButtonContent] = useState('Chatbot');

    const handleClick = () => {
        setChatbot(!chatbot);
        setButtonContent(prevState => prevState==='Chatbot'? 'X' : 'Chatbot')
    };

    return (
        <div>
            {chatbot && <Chatbot />}
            <Button handleClick={handleClick} button_content={buttonContent}/>
        </div>
    );
};

export default ChatbotToggle;
