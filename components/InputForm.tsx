import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface InputFormProps {
  onSubmit: (formData: FormData) => void
  isLoading: boolean
}

export default function InputForm({ onSubmit, isLoading }: InputFormProps) {
  return (
    <form action={onSubmit} className="space-y-4">
            <div className=" font-mono italic text-center text-lg text-zinc-500	">
            <p>learn secure code review with Ai genereated code </p>
            </div>
      <div className="flex flex-wrap items-end gap-2">
        <div className="flex-1 min-w-[120px]">
          <Label htmlFor="language" className="sr-only">
            Language
          </Label>
          <Input
            id="language"
            name="language"
            placeholder="Language"
            required
            className="bg-zinc-800 border-zinc-700 text-white"
          />
        </div>
        <div className="flex-1 min-w-[120px]">
          <Label htmlFor="instructions" className="sr-only">
            Additional instructions
          </Label>
          <Input
            id="instructions"
            name="instructions"
            placeholder="Additional instructions (optinal)"
            className="bg-zinc-800 border-zinc-700 text-white"
          />
        </div>
        <div className="w-46">
          <Label htmlFor="bugs" className="sr-only">
            Number of Bugs
          </Label>
          <Select name="bugs" required>
            <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
              <SelectValue placeholder="Number of Bugs" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-700 border-zinc-600 text-white">
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-24">
          <Label htmlFor="level" className="sr-only">
            Level
          </Label>
          <Select name="level" required>
            <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-700 border-zinc-600 text-white">
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-24">
          <Label htmlFor="size" className="sr-only">
            Size
          </Label>
          <Select name="size" required>
            <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-700 border-zinc-600 text-white">
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="big">Big</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" disabled={isLoading} className="bg-blue-700 hover:bg-blue-800 text-white">
          {isLoading ? "Generating..." : "Generate"}
        </Button>
      </div>
    </form>
  )
}

