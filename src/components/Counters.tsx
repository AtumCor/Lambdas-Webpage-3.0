"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGraduationCap, faUsers } from "@fortawesome/free-solid-svg-icons";

type CountersProps = {
  total: number;
  undergrad: number;
  alumni: number;
};

export function Counters({ total, undergrad, alumni }: CountersProps) {
  console.log(total);
  const [displayTotal, setDisplayTotal] = useState(0);
  const [displayUndergrad, setDisplayUndergrad] = useState(0);
  const [displayAlumni, setDisplayAlumni] = useState(0);

  useEffect(() => {
    const duration = 2000; // animation duration in ms
    const stepTime = 30; // interval for updating
    const steps = duration / stepTime;

    const increment = (target: number) => target / steps;

    let totalCount = 0;
    let undergradCount = 0;
    let alumniCount = 0;

    const interval = setInterval(() => {
      totalCount += increment(total);
      undergradCount += increment(undergrad);
      alumniCount += increment(alumni);

      setDisplayTotal(Math.min(Math.round(totalCount), total));
      setDisplayUndergrad(Math.min(Math.round(undergradCount), undergrad));
      setDisplayAlumni(Math.min(Math.round(alumniCount), alumni));

      if (
        totalCount >= total &&
        undergradCount >= undergrad &&
        alumniCount >= alumni
      ) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [total, undergrad, alumni]);

  const counterStyle = "text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400";
  const labelStyle = "text-lg md:text-xl mt-2";

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
        <FontAwesomeIcon icon={faUsers} size="2x" className="mb-2 text-gray-600 dark:text-gray-300" />
        <div className={counterStyle}>{displayTotal}</div>
        <div className={labelStyle}>Total Brothers</div>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
        <FontAwesomeIcon icon={faGraduationCap} size="2x" className="mb-2 text-gray-600 dark:text-gray-300" />
        <div className={counterStyle}>{displayUndergrad}</div>
        <div className={labelStyle}>Undergrads</div>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
        <FontAwesomeIcon icon={faUser} size="2x" className="mb-2 text-gray-600 dark:text-gray-300" />
        <div className={counterStyle}>{displayAlumni}</div>
        <div className={labelStyle}>Alumni</div>
      </div>
    </div>
  );
}
