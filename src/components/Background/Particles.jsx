// components/Background/Particles.jsx

export default function Particles() {
  return (
    <div className="particles">

      {[...Array(25)].map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      ))}

    </div>
  );
}