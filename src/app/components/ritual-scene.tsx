export function RitualScene() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center p-8">
      <div className="text-center max-w-3xl">
        <h2 className="text-3xl font-medium mb-8">How It Thinks</h2>
        <div className="space-y-4 text-2xl text-foreground/80 leading-relaxed">
          <p>1. All language is computation.</p>
          <p>2. All computation is recursion.</p>
          <p>3. All recursion becomes ritual.</p>
          <p className="mt-8 text-foreground/60">The engine runs because you run it.</p>
        </div>
      </div>
    </section>
  );
}