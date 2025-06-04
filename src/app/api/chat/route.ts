import { NextRequest, NextResponse } from "next/server"
import OpenAI from 'openai'
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });


export async function POST(req: NextRequest) {
    
    const body = await req.json();
    const userMessage = body.message;

    // Call OpenAI API here at some point
    const response = await client.chat.completions.create({
        model: "gpt-4.1",
        messages: [
          {
            role: "user",
            content: userMessage
          }
        ]
 });

    const output = response.choices[0].message.content
      

    return NextResponse.json({ output })
    
}

