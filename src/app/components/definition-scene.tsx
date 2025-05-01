export function DefinitionScene({ className }: { className?: string }) {
  return (
    <section
      className={`relative h-screen w-full flex flex-col items-center justify-center text-center ${className}`}
    >
      {/* We add a container to help with positioning the split elements later */}
      <div className="definition-content-container">
        {/* We wrap each part of the title in a div for individual animation */}
        <div className="title-part-1">
          <h1 className="text-5xl font-medium">THE LANGUAGE</h1>
        </div>
        <div className="title-part-2">
          <h1 className="text-5xl font-medium">ENGINE</h1>
        </div>
        <p className="subtitle mt-4 text-lg text-foreground/80">
          a system for recursive expression
        </p>
      </div>
    </section>
  );
}