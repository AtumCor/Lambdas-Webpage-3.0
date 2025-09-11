import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <>
      <Header />
      <section className="py-16 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Introduction */}
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">Our International History</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Lambda Phi Epsilon International Fraternity Inc. was founded on February 25th, 1981 by principal founder Mr. Craig Ishigo along with eighteen other dedicated men at the University of California Los Angeles...
            </p>
            <Link href="https://lambdaphiepsilon.com" className="mt-4 inline-block text-blue-600 hover:underline">
              Learn more about our history
            </Link>
          </div>

          {/* Founding Fathers */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Our Founding Fathers</h2>
            <Image
              src="/images/about/FoundingFathers.jpeg"
              alt="Founding Fathers"
              width={800}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
            />
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {[
                'Mr. Hunter Chang',
                'Mr. Randy Fujimoto',
                'Mr. John Hanvey',
                'Mr. Craig Ishigo',
                'Mr. Jeff Kaku',
                'Mr. Bobby Kawai',
                'Mr. Dean Kumagawa',
                'Mr. Jim Lee',
                'Mr. Bruce Mau',
                'Mr. Ted Mihara',
                'Mr. Neil Miyazaki',
                'Mr. Darryl L. Mu',
                'Mr. Kelvin Sakai',
                'Mr. Kevin Shida',
                'Mr. Albert Sun',
                'Mr. Weyton Tam',
                'Mr. Jamie Watanabe',
                'Mr. Bennett Wong',
                'Mr. Fred Wong',
              ].map((name) => (
                <li key={name} className="text-center text-gray-700 dark:text-gray-300">{name}</li>
              ))}
            </ul>
          </div>

          {/* Chapter History */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="/images/about/CharterClass.jpg"
                alt="Chapter History"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Our Chapter History - The Twelve Tenshi and Beyond</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Lambda Phi Epsilon at THE Ohio State University was established on April 02, 2020 with the mission to change the community for the better...
              </p>
            </div>
          </div>

          {/* Mission, Vision, and Core Values */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 content-center">Mission, Vision, and Core Values</h2>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Mission</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                To guide men on a lifelong discovery of authenticity and personal growth.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Vision</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                A world where Lambda men live authentic, fulfilling lives and contribute through the pursuit of their noble purpose.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Core Values</h3>
              <ul className="list-disc pl-6 text-lg text-gray-600 dark:text-gray-300">
                <li>Wisdom: Pursuit of understanding and its positive application toward one’s life and the world.</li>
                <li>Love: Care and respect for oneself, the brotherhood, and the world.</li>
                <li>Cultural Heritage: Ideas and experiences of a people, transcending the world through generations.</li>
                <li>Courageous Leadership: Integrity through action toward a more human world, especially in times of adversity.</li>
                <li>Authenticity: Demonstration of one’s true self to the world, despite external expectations.</li>
              </ul>
            </div>
          </div>

          {/* Philanthropy */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="/images/about/nmdp.jpeg"
                alt="Philanthropy"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Philanthropy</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Lambda Phi Epsilon works with the National Marrow Donor Program (NMDP) to help save the lives of patients requiring bone marrow transplants...
              </p>
              <Link href="https://bethematch.org" className="mt-4 inline-block text-blue-600 hover:underline">
                Register as a donor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
