export function RitualScene({ className }: { className?: string }) {
  return (
    <section
      className={`relative h-screen w-full flex items-center justify-center p-8 ${className}`}
    >
      <div className="text-center max-w-3xl">
        <h2 className="ritual-heading text-3xl font-medium mb-8">
          How It Thinks
        </h2>
        <div className="ritual-text-container space-y-4 text-2xl text-foreground/80 leading-relaxed">
          {/* Add a class to each line for individual animation */}
          <p className="ritual-line">1. All language is computation.</p>
          <p className="ritual-line">2. All computation is recursion.</p>
          <p className="ritual-line">3. All recursion becomes ritual.</p>
          <p className="ritual-line mt-8 text-foreground/60">
            The engine runs because you run it.
          </p>
        </div>
      </div>
    </section>
  );
}