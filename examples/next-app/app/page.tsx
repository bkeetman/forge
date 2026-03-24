import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-4">Forge Example</h1>
      <Link
        href="/design-system"
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
      >
        View Design System
      </Link>
    </main>
  );
}
