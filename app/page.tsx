import Image from "next/image"
import KosharyCode from './images/Koshary_code.png';
import CodeGenerator from "@/components/CodeGenerator"
import { Analytics } from "@vercel/analytics/react"


export default function Home() {
  return (
    <main className="container mx-auto p-4 min-h-screen bg-zinc-900 lg:w-4/5">
      <Image
        src={KosharyCode}
        alt="Koshary Code"
        width={400}
        height={100}
        className="mx-auto mb-6"
        priority
      />
      <CodeGenerator />
      <Analytics />
    </main>
  )
}

