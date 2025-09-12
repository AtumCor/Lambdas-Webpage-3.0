import Image from "next/image";
import Link from "next/link";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { Counters } from "@/components/Counters";
import { getAllBrothers } from "@/lib/members";
import { navLinks } from "@/config/navLinks";

type Brother = {
  id: string;
  name: string;
  role?: string;
  portrait?: string;
  group?: string;
  major?: string;
};

export default async function HomePage() {
  const brothers = await getAllBrothers();
  const total = brothers.length;
  const undergrad = brothers.filter((b) => b.role?.toLowerCase() === "undergrad").length;
  const alumni = brothers.filter((b) => b.role?.toLowerCase() === "alumni").length;

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        {/* Fixed Background */}
        <div className="">
          <Image
            src="/images/background.webp"
            alt="Lambda Phi Epsilon"
            fill
            z-index={2}
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
          <h1 className="text-5xl font-bold mb-6 text-white">Lambda Phi Epsilon Fraternity</h1>
          <p className="text-lg md:text-xl mb-8 text-white">At THE Ohio State University</p>

          <nav className="mt-12 flex justify-center space-x-6">
            <div className="flex justify-center gap-8 mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-6 py-3 rounded-lg text-white text-xl font-medium hover:text-blue-600 transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </section>

      {/* Counters Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <Counters total={total} undergrad={undergrad} alumni={alumni} />
      </section>

      {/* About / Intro Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Lambda Phi Epsilon at THE Ohio State University is committed to cultivating authentic leaders,
            fostering brotherhood, and positively impacting the community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Brotherhood</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Building lifelong bonds through trust, support, and shared experiences.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Leadership</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Developing ethical leaders who inspire positive change in their communities.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Service</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Making meaningful contributions to society through philanthropy and civic engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action / Join Section */}
      <section className="py-20 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Join Us</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Interested in becoming part of our brotherhood? Learn more about our recruitment and membership opportunities.
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
