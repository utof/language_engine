export function AxiomsScene() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-5xl mx-auto">
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-medium mb-6">What Is It?</h2>
          <div className="space-y-4 text-lg text-foreground/80">
            <p>The Language Engine is not a framework.</p>
            <p>It is a lens. A recursive structure for shaping code, thought, and interface.</p>
            <p>It runs on pattern, contradiction, and entropy.</p>
          </div>
        </div>
        {/* Right Column: Placeholder for the Glyph Vortex */}
        <div className="hidden md:flex items-center justify-center border border-foreground/10 rounded-lg bg-foreground/5">
          <p className="text-foreground/30">[Vortex Placeholder]</p>
        </div>
      </div>
    </section>
  );
}