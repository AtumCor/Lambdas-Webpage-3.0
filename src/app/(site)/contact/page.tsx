import Header from "@/components/Header";
import ContactCard from "@/components/ContactCard";

export default function ContactPage() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Page Intro */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Reach out to our executive board or send us an email for general inquiries.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <ContactCard
            role="President"
            name="Ethan Chan"
            email="chan.ethan@osu.edu"
            image="/images/contact/ethan-chan.jpg"
          />
          <ContactCard
            role="Treasurer"
            name="Eric Zhang"
            email="zhang.13704@osu.edu"
            image="/images/contact/eric-zhang.jpg"
          />
        </div>

        {/* General Contact */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">General Inquiries</h2>
          <a
            href="mailto:lambdas.osu@gmail.com"
            className="text-blue-600 hover:underline text-lg"
          >
            lambdas.osu@gmail.com
          </a>
        </section>
      </div>
    </main>
  );
}
