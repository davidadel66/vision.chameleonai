import type { Message as TMessage } from 'ai';
import { Message } from './message';
import { useScrollToBottom } from '@/hooks/use-scroll-to-bottom';

export const Messages = ({
  messages,
  isLoading,
  status,
}: {
  messages: TMessage[];
  isLoading: boolean;
  status: 'error' | 'submitted' | 'streaming' | 'ready';
}) => {
  const [containerRef, endRef] = useScrollToBottom();
  return (
    <div
      className="flex-1 h-full space-y-6 overflow-y-auto py-8 px-4"
      ref={containerRef}
    >
      <div className="max-w-4xl mx-auto pt-8">
        {messages.map((m, i) => (
          <Message
            key={i}
            isLatestMessage={i === messages.length - 1}
            isLoading={isLoading}
            message={m}
            status={status}
          />
        ))}
        <div className="h-4" ref={endRef} />
      </div>
    </div>
  );
};
