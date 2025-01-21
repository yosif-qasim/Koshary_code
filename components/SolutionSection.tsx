"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface SolutionSectionProps {
  solution: string
}

export default function SolutionSection({ solution }: SolutionSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="border border-zinc-700 rounded-xl p-4 bg-zinc-800">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-white">Solution</h2>
        <Button onClick={() => setIsVisible(!isVisible)} className="bg-blue-700 hover:bg-blue-800 text-white">
          {isVisible ? "Hide" : "Show"} Solution
        </Button>
      </div>
      {isVisible && <pre className="whitespace-pre-wrap text-gray-300">{solution || "No solution available yet."}</pre>}
    </div>
  )
}

