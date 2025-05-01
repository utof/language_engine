import { InvocationScene } from "@/app/components/invocation-scene";
import { DefinitionScene } from "@/app/components/definition-scene";
import { AxiomsScene } from "@/app/components/axioms-scene";
import { RitualScene } from "@/app/components/ritual-scene";
import { SignatureScene } from "@/app/components/signature-scene";

export default function Home() {
  return (
    // We remove overflow-x-hidden for now to allow normal scrolling
    <main className="relative w-full">
      <InvocationScene />
      <DefinitionScene />
      <AxiomsScene />
      <RitualScene />
      <SignatureScene />
    </main>
  );
}
