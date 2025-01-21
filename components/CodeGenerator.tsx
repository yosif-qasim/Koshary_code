"use client"

import { useState } from "react"
import InputForm from "@/components/InputForm"
import OutputCode from "@/components/OutputCode"
import SolutionSection from "@/components/SolutionSection"
import { generateCode } from "@/app/actions/generateCode"

export default function CodeGenerator() {
  const [output, setOutput] = useState("")
  const [solution, setSolution] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  
  console.log("setIsLoading button : ", isLoading)

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true)
    const element = document.querySelector("body > main > div > div.space-y-8 > div:nth-child(1) > p");
    if (element) {
        element.textContent = "Wait! The LLM is cooking ...";
    }
    const result = await generateCode(formData)
    setOutput(result.code)
    setSolution(result.solution)
    setIsLoading(false)
  }

  return (
    <div className="space-y-8 bg-stone-950a">
      <div className="w-full">
        <InputForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
      <div className="space-y-8">
        <OutputCode output={output} isLoading={isLoading} />
        <SolutionSection solution={solution} />
      </div>
    </div>
  )
}

