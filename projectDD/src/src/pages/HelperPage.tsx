import React, { useEffect, useState } from "react";
import "../script";
import "../index.css";
// import { faVideo, faPhone, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Chat = {
    id: number;
    message: string;
    sender: string;
};

type Message = {
    id: number;
    text: string;
    sender: string;
    timestamp: string;
};

type ChatInvitation = {
    id: number;
    message: string;
    sender: string;
    timeLeft: number;
};

const HelperPage: React.FC = () => {
    const [chats, setChats] = useState<Chat[]>([
        { id: 1, message: "Hello!", sender: "User1" },
        { id: 2, message: "Hi there!", sender: "User2" },
        { id: 3, message: "Hi ", sender: "User3" },
        { id: 4, message: "Hi !", sender: "User2fdd" },
    ]);

    const [chatsinvitation, setChatsinvitation] = useState<ChatInvitation[]>([
        {
            id: 1,
            message: "Class with Mr. P in chemistry 101",
            sender: "User1",
            timeLeft: 15 * 60,
        }, // 15 minutes in seconds
        {
            id: 2,
            message: "Class 2020 with Mrs. Cassandra in English",
            sender: "User2",
            timeLeft: 15 * 60,
        },
        // Add more chats as needed
    ]);

    useEffect(() => {
        const timer = setInterval(() => {
            // Decrease the timeLeft value for each invitation
            setChatsinvitation((prevInvitations) =>
                prevInvitations.map((invitation) => ({
                    ...invitation,
                    timeLeft: invitation.timeLeft - 1,
                }))
            );
        }, 1000); // Update every second

        return () => {
            clearInterval(timer); // Clean up the timer
        };
    }, []);

    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hello!", sender: "User1", timestamp: "9:00 AM" },
        { id: 2, text: "Hi there!", sender: "User2", timestamp: "9:05 AM" },
        // Add more messages as needed
    ]);
    const [isUploadingFile, setIsUploadingFile] = useState(false);
    const [isCalling, setIsCalling] = useState(false);
    const [isVideoStarted, setIsVideoStarted] = useState(false);

    const [newMessage, setNewMessage] = useState("");

    const formatTime = (timeLeft: number): string => {
        const minutes = Math.floor(timeLeft / 60)
            .toString()
            .padStart(2, "0");
        const seconds = (timeLeft % 60).toString().padStart(2, "0");
        return `${minutes} min and ${seconds} sec`;
    };

    const handleSendMessage = () => {
        if (newMessage.trim() !== "") {
            const newId = messages.length + 1;
            const newTimestamp = getCurrentTimestamp();
            const newMessageItem: Message = {
                id: newId,
                text: newMessage,
                sender: "User1",
                timestamp: newTimestamp,
            };
            setMessages([...messages, newMessageItem]);
            setNewMessage("");
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMessage(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    const getCurrentTimestamp = (): string => {
        const date = new Date();
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    };

    const handleAcceptChat = (chatId: number) => {
        const acceptedChat = chatsinvitation.find((chat) => chat.id === chatId);

        if (acceptedChat) {
            const updatedInvitations = chatsinvitation.filter(
                (chat) => chat.id !== chatId
            );
            setChatsinvitation(updatedInvitations);

            // Set a timer for 15 minutes
            setTimeout(() => {
                console.log(`Time limit exceeded for chat with ID ${chatId}`);
                // Handle timeout logic here (e.g., mark the chat as expired)
            }, acceptedChat.timeLeft * 1000); // Convert timeLeft to milliseconds

            // Handle accepting chat invitation
            console.log(`Accepted chat with ID ${chatId}`);
        }
    };

    const handleDeclineChat = (chatId: number) => {
        // Handle declining chat invitation
        console.log(`Declined chat with ID ${chatId}`);
        const updatedInvitations = chatsinvitation.filter(
            (chat) => chat.id !== chatId
        );
        setChatsinvitation(updatedInvitations);
    };

    const handleUploadFile = () => {
        // Handle file upload logic
        setIsUploadingFile(true);
    };

    const handleMakeCall = () => {
        // Handle call logic
        setIsCalling(true);
    };

    const handleStartVideo = () => {
        // Handle video start logic
        setIsVideoStarted(true);
    };

    return (
        <div className="main">
            <div className="main__container">
                <div className="chat-page">
                    <h1>All chats</h1>
                    <ul className="chat-list">
                        {chats.map((chat) => (
                            <li key={chat.id} className="chat-item">
                                <div className="chat-content">
                                    <div className="chat-sender">
                                        {chat.sender}:
                                    </div>
                                    <div className="chat-message">
                                        {chat.message}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h2>Requested</h2>
                    <ul className="chat-list">
                        {chatsinvitation.map((chat) => (
                            <li key={chat.id} className="chat-item">
                                <div className="chat-content">
                                    <div className="chat-sender">
                                        {chat.sender}:
                                    </div>
                                    <div className="chat-message">
                                        {chat.message}
                                    </div>
                                </div>
                                <div className="chat-timer">
                                    {formatTime(chat.timeLeft)} left{" "}
                                </div>
                                <div className="chat-actions">
                                    <button
                                        className="chat-action-button"
                                        onClick={() =>
                                            handleAcceptChat(chat.id)
                                        }
                                    >
                                        Accept
                                    </button>
                                    <button
                                        className="chat-action-button"
                                        onClick={() =>
                                            handleDeclineChat(chat.id)
                                        }
                                    >
                                        Decline
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="main__img--container">
                    <div className="messenger">
                        <div className="message-list">
                            <div className="message-header">
                                <div className="message-receiver">User1</div>
                                <div className="message-actions">
                                    <button
                                        onClick={handleUploadFile}
                                        disabled={isUploadingFile}
                                    >
                                        {isUploadingFile
                                            ? "Uploading..."
                                            : "Upload File"}
                                        {/* <FontAwesomeIcon icon={faUpload} /> */}
                                    </button>
                                    <button
                                        onClick={handleMakeCall}
                                        disabled={isCalling}
                                    >
                                        {isCalling ? "Calling..." : "Make Call"}
                                        {/* <FontAwesomeIcon icon={faPhone} /> */}
                                    </button>
                                    <button
                                        onClick={handleStartVideo}
                                        disabled={isVideoStarted}
                                    >
                                        {isVideoStarted
                                            ? "Video Started"
                                            : "Start Video"}
                                        {/* <FontAwesomeIcon icon={faVideo} /> */}
                                    </button>
                                </div>
                            </div>
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`message ${
                                        message.sender === "User1"
                                            ? "sent"
                                            : "received"
                                    }`}
                                >
                                    <div className="message-content">
                                        {message.text}
                                    </div>
                                    <div className="message-timestamp">
                                        {message.timestamp}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="message-input">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={handleInputChange}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your message..."
                            />
                            <button onClick={handleSendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
//TODO NOT RESPONSIVE the chat section

export default HelperPage;
