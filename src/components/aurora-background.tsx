"use client";

export function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="aurora-blob absolute -top-40 -left-20 h-[600px] w-[600px] rounded-full bg-blue-500/30 blur-3xl"
        style={{ animationDuration: "22s" }}
      />
      <div
        className="aurora-blob-2 absolute top-20 right-0 h-[500px] w-[500px] rounded-full bg-violet-500/25 blur-3xl"
        style={{ animationDuration: "28s" }}
      />
      <div
        className="aurora-blob-3 absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-fuchsia-500/20 blur-3xl"
        style={{ animationDuration: "20s" }}
      />
      <div
        className="aurora-blob absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/15 blur-3xl"
        style={{ animationDuration: "32s", animationDelay: "-8s" }}
      />
    </div>
  );
}
