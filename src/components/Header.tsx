import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-xl font-bold">
          Greene Lab
        </Link>
        <nav className="flex gap-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/members/1echan" className="hover:text-blue-600">Members</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
        </nav>
      </div>
    </header>
  );
}
