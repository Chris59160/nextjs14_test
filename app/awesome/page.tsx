import Link from "next/link";

export default function Awesome() {
  return (
    <main className="min-h-screen p-24 bg-white">
        <h1>NextjS is Awesome</h1>
        <h2>Chris</h2>
        <Link href={"/about"}>About Us</Link>
    </main>
  );
}
