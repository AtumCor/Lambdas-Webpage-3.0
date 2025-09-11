import Link from "next/link";

const navItems = [
  { name: "About Us", href: "/about" },
  { name: "People", href: "/members" },
  { name: "Publications", href: "/publications" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-100 to-white">
      {/* Title */}
      <h1 className="text-5xl font-bold text-gray-900 mb-12">Greene Lab</h1>

      {/* Nav in the middle */}
      <nav className="flex flex-wrap gap-8 justify-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-xl font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </section>
  );
}
