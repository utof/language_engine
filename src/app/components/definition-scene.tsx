export function DefinitionScene({ className }: { className?: string }) {
  return (
    <section
      className={`relative h-screen w-full flex flex-col items-center justify-center text-center ${className}`}
    >
      <h1 className="text-5xl font-medium">THE LANGUAGE ENGINE</h1>
      <p className="mt-4 text-lg text-foreground/80">
        a system for recursive expression
      </p>
    </section>
  );
}
