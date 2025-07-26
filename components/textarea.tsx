import { modelID } from '@/ai/providers';
import { Textarea as ShadcnTextarea } from '@/components/ui/textarea';
import { ArrowUp } from 'lucide-react';

interface InputProps {
  input: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  status: string;
  stop: () => void;
  selectedModel: modelID;
}

export const Textarea = ({
  input,
  handleInputChange,
  isLoading,
  status,
  stop,
}: InputProps) => {
  return (
    <div className="relative w-full">
      <ShadcnTextarea
        className="resize-none bg-white/5 backdrop-blur-sm text-white placeholder:text-white/50 w-full rounded-2xl pr-12 pt-4 pb-16 focus:ring-2 focus:ring-blue-400/50 border border-white/20 focus:border-blue-400/50 focus:bg-white/10 transition-all"
        value={input}
        autoFocus
        placeholder={'Say something...'}
        // @ts-expect-error err
        onChange={handleInputChange}
        onKeyDown={e => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (input.trim() && !isLoading) {
              // @ts-expect-error-err
              const form = e.target.closest('form');
              if (form) form.requestSubmit();
            }
          }
        }}
      />
      {status === 'streaming' || status === 'submitted' ? (
        <button
          type="button"
          onClick={stop}
          className="cursor-pointer absolute right-3 bottom-3 rounded-full p-2.5 bg-red-500/20 backdrop-blur-sm border border-red-400/30 hover:bg-red-500/30 hover:scale-105 disabled:bg-zinc-300 disabled:cursor-not-allowed transition-all"
        >
          <div className="animate-spin h-4 w-4">
            <svg className="h-4 w-4 text-red-300" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        </button>
      ) : (
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="absolute right-3 bottom-3 rounded-full p-2.5 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 hover:bg-blue-500/30 hover:scale-105 disabled:bg-zinc-600/20 disabled:border-zinc-500/20 disabled:cursor-not-allowed transition-all"
        >
          <ArrowUp className="h-4 w-4 text-blue-300" />
        </button>
      )}
    </div>
  );
};
