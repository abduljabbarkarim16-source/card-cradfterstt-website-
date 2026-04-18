import Card from './Card';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onClick?: () => void;
}

export default function FAQItem({
  question,
  answer,
  isOpen = false,
  onClick,
}: FAQItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left transition-all duration-300 hover:no-underline"
    >
      <Card hoverable={true} variant={isOpen ? 'premium' : 'muted'} className="cursor-pointer">
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-bold text-gray-100 text-lg flex-1">{question}</h3>
          <span
            className={`text-accent-gold text-2xl font-light flex-shrink-0 transition-transform duration-300 ${
              isOpen ? 'rotate-45' : ''
            }`}
          >
            +
          </span>
        </div>

        {isOpen && (
          <div className="mt-4 border-t border-white/10 pt-4">
            <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
          </div>
        )}
      </Card>
    </button>
  );
}
