interface LandingFactCardProps {
  title: string;
  description: string;
  color?: string; // optional for variety
}

export default function LandingFactCard({
  title,
  description,
  color,
}: LandingFactCardProps) {
  return (
    <div
      className={`rounded-xl p-6 text-left shadow-md bg-${
        color ?? "white"
      } text-white`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
}
