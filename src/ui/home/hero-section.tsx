export function HeroSection() {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-gradient-to-b from-[#3B9FE5] to-white p-8">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/car-hero.png"
          alt="Car Hero"
          className="hidden md:block h-full w-full object-cover object-center opacity-80"
        />
      </div>

      <div className="relative z-10 flex h-full flex-col top-10 items-start justify-start text-white md:text-black">
        <h1 className="text-4xl font-bold md:text-6xl">
          Welcome to Revolution Racing
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Our official website for our STEM Racing journey. Explore our
          projects, news, and team updates.
        </p>
      </div>
    </section>
  );
}
