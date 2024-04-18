"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

let messages: [string, string][] = [["user", "hi"]];

export default function Thread() {
  const [userType, setUserType] = useState<"user" | "doctor">("user");
  const [inputValue, setInputValue] = useState("");

  const handleClientClick = () => {
    setUserType(userType === "user" ? "doctor" : "user");
    console.log("userType:", userType);
  };

  const handleSendMessage = () => {
    // Send the inputValue to the server or perform any other necessary actions

    messages = [...messages, [userType, inputValue]];

    console.log("Sent message:", inputValue);

    setInputValue(""); // Clear the input field after sending the message
  };

  return (
    <div className="messageUI">
      <Button onClick={handleClientClick} variant="outline">
        Switch to {userType}
      </Button>
      <ScrollArea className="h-[700px] w-[800px] rounded-md border p-4">
        {messages.map(([type, value], index) => (
          <div key={index}>
            {type}
            <br />
            {value}
          </div>
        ))}
      </ScrollArea>
      <div className="messageLine">
        <Input
          placeholder="Type a message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button className="sendButton" onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </div>
  );
}
