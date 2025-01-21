"use server"

import Groq from "groq-sdk"
import { XMLParser } from "fast-xml-parser"
import{ system_prompt , GetUserPrompt} from '../prompts/prompts';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})


export async function generateCode(formData: FormData) {
  const user_prompt = GetUserPrompt(formData);

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: system_prompt,
        },
        {
          role: "user",
          content: user_prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    const generatedText = chatCompletion.choices[0]?.message?.content || "";

    // Extract code and solution using delimiters
    const codeMatch = generatedText.match(/===CODE===\n([\s\S]*?)\n===SOLUTION===/);
    const solutionMatch = generatedText.match(/===SOLUTION===\n([\s\S]*)/);

    const code = codeMatch ? codeMatch[1].trim() : "No code generated.";
    const solution = solutionMatch ? solutionMatch[1].trim() : "No solution provided.";

    return { code, solution };
  } catch (error) {
    console.error("Error generating code:", error);
    return { code: "Error generating code. Please try again.", solution: "" };
  }
}