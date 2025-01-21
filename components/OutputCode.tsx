// import '@/styles/loadingAnimation.css';
interface OutputCodeProps {
  output: string;
  isLoading: boolean;
}

export default function OutputCode({ output, isLoading }: OutputCodeProps) {
  return (
    <div className="border border-zinc-700 rounded-xl p-4 bg-zinc-800">
      <h2 className="text-xl font-semibold mb-2 text-white">Generated Code</h2>
      {isLoading ? (
        <div className="loading-animation">Generating code...</div>
      ) : output ? (
        <pre className="whitespace-pre-wrap text-gray-300">{output}</pre>
      ) : (
        <p className="text-gray-400">Generated code will appear here</p>
      )}
    </div>
  );
}

