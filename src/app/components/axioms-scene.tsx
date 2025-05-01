// Helper function to wrap each letter in a span
const wrapLetters = (text: string) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className="axiom-letter inline-block"
      style={{ whiteSpace: "pre" }} // Preserve spaces
    >
      {letter}
    </span>
  ));
};

export function AxiomsScene({ className }: { className?: string }) {
  return (
    <section
      className={`relative h-screen w-full flex items-center justify-center p-8 ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-5xl mx-auto">
        <div className="flex flex-col justify-center axiom-text-container">
          <h2 className="text-3xl font-medium mb-6">What Is It?</h2>
          <div className="space-y-4 text-lg text-foreground/80">
            <p>{wrapLetters("The Language Engine is not a framework.")}</p>
            <p>
              {wrapLetters(
                "It is a lens. A recursive structure for shaping code, thought, and interface."
              )}
            </p>
            <p>
              {wrapLetters("It runs on pattern, contradiction, and entropy.")}
            </p>
          </div>
        </div>
        <div className="vortex-container hidden md:flex items-center justify-center border border-foreground/10 rounded-lg bg-foreground/5">
          {/* This is the target for our letter animation */}
        </div>
      </div>
    </section>
  );
}
