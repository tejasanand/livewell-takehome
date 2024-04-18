"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Message = { type: "text" | "image"; content: string };

let messages: [string, Message[]][] = [["", []]];

export default function Thread() {
  const [userType, setUserType] = useState<"user" | "doctor">("user");
  const [inputValue, setInputValue] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClientClick = () => {
    setUserType(userType === "user" ? "doctor" : "user");
  };

  const handleSendMessage = () => {
    const newMessages: Message[] = [];

    if (inputValue.trim() !== "") {
      newMessages.push({ type: "text", content: inputValue });
    }

    if (imageFile !== null) {
      newMessages.push({
        type: "image",
        content: URL.createObjectURL(imageFile),
      });
    }

    if (messages.length > 0 && messages[messages.length - 1][0] === userType) {
      // If the previous message was sent by the same userType, add the message(s) to the last inner array
      messages[messages.length - 1][1].push(...newMessages);
    } else {
      // Otherwise, add a new inner array with the userType and a new array with the message(s)
      messages = [...messages, [userType, newMessages]];
    }

    setInputValue("");
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input field
    }
    scrollToBottom();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className="messageUI">
      <Button
        className="userStyling"
        onClick={handleClientClick}
        variant="outline"
      >
        Switch to {userType === "user" ? "Doctor" : "User"}
      </Button>
      <ScrollArea className="scrollThread h-[700px] w-[800px] rounded-md border p-4">
        {messages.map(([type, values], index) => (
          <div key={index}>
            {type !== "" && <span className="userTypeStyle">{type}</span>}
            {values.map((message, valueIndex) => (
              <div key={`${index}-${valueIndex}`}>
                {message.type === "text" ? (
                  message.content
                ) : (
                  <Image
                    src={message.content}
                    alt="Uploaded"
                    className="max-w-full h-auto"
                    width={250}
                    height={250}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
        <div style={{ float: "left", clear: "both" }} ref={messagesEndRef} />
      </ScrollArea>
      <div className="messageLine">
        <Input
          placeholder="Type a message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mr-2"
          ref={fileInputRef}
        />
        <Button className="sendButton" onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </div>
  );
}
