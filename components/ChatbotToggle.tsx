"use client";

import React, { useState } from 'react';
import Chatbot from "@/components/Chatbot";
import Button from "@/components/Button";

const ChatbotToggle = () => {
    const [chatbot, setChatbot] = useState(false);

    const handleClick = () => {
        setChatbot(!chatbot);
    };

    return (
        <div>
            <Button handleClick={handleClick} button_content="Click for action" />
            {chatbot && <Chatbot />}
        </div>
    );
};

export default ChatbotToggle;
