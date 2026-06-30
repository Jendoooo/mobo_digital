import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div>
        <h1>Page not found.</h1>
        <p>This page is not part of the public MOBO Digital work ledger.</p>
        <Link href="/">Return home</Link>
      </div>
    </main>
  );
}
