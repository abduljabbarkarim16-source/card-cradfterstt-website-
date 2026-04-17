import Card from './Card';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating?: number;
}

export default function Testimonial({
  name,
  role,
  content,
  rating = 5,
}: TestimonialProps) {
  return (
    <Card>
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < rating ? 'text-accent-gold' : 'text-gray-700'
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Testimonial Content */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
        "{content}"
      </p>

      {/* Author */}
      <div>
        <h4 className="font-bold text-gray-100 text-sm">{name}</h4>
        <p className="text-gray-500 text-xs">{role}</p>
      </div>
    </Card>
  );
}
