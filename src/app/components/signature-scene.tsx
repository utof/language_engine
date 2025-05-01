export function SignatureScene({ className }: { className?: string }) {
  return (
    <section
      className={`relative h-screen w-full flex items-center justify-center p-8 ${className}`}
    >
      <div className="text-center max-w-2xl">
        <h2 className="text-5xl font-medium mb-12">∴</h2>
        <div className="space-y-3 text-xl text-foreground/80 mb-12">
          <p>You can use it.</p>
          <p>You can ignore it.</p>
          <p>But you will run it.</p>
          <p>The Language Engine is already live.</p>
          <p className="mt-8">Made by utof.</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-6">
          <a
            href="mailto:your-email@example.com?subject=∴"
            className="inline-block text-lg border border-foreground/30 px-6 py-3 rounded-md hover:bg-foreground/10 transition-colors"
          >
            Commission an engine.
          </a>
          <div className="flex space-x-4 text-foreground/60">
            <a href="#" className="hover:text-foreground">
              mastodon
            </a>
            <a href="#" className="hover:text-foreground">
              github
            </a>
            <a href="#" className="hover:text-foreground">
              nowhere
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
