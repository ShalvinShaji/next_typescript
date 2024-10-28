import React from 'react';
import ChatbotToggle from "@/components/ChatbotToggle";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <ChatbotToggle />
            {children}
        </div>
    );
};

export default Layout;
