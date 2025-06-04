"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";



export default function Home() {
  const [input_text, setInput_text] = useState("");
  const [output_text, setOutput_text] = useState("");


  async function handleSubmission(event: { preventDefault: () => void; }) {
    event.preventDefault();

    // Send Input Text to the Backend
    console.log("Submitting Text to Backend:", input_text)

    const data = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      
      body: JSON.stringify({ message: input_text })
   })

   console.log("Raw Response", data)

   const message = await data.json();
   console.log("GPT Says: ", message.output)
   setOutput_text(message.output)

  }



  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Chat with GPT
      </h1>
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <form onSubmit={handleSubmission}>
            <label htmlFor="input_text">Text Input:</label><br />
            <input value={input_text} type="text" id="input_text" className = "w-auto max-w-md border border-gray-300 rounded" onChange={(e) => {
              console.log(e);                  // See the event object
              console.log(e.target);           // See the input element
              console.log(e.target.value);     // See the current text in the box   
              setInput_text(e.target.value);
              }}/><br />
              <button type = "submit">Send</button>
          </form> 
          {output_text && (
            <div className="bg-white text-black">
              <ReactMarkdown>{output_text}</ReactMarkdown>
            </div>
          )}
        </main>
      </div>
      </>
  );
}
