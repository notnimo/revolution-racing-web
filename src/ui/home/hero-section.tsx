export function HeroSection() {
  const containerDivStyle: string = `bg-rr-black p-8 h-screen w-screen`;
  return (
    <div className={containerDivStyle}>
      <h1 className="text-4xl font-bold">Welcome to Revolution Racing</h1>
      <p className="text-lg">
        Join us in revolutionizing the racing experience.
      </p>
    </div>
  );
}
