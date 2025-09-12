"use client";

import { useEffect, useState } from "react";
import FamilyTree from "@/components/FamilyTree";

export default function Page() {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    fetch("/ujiData.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load family data:", err));
  }, []);

  if (!data) return <p>Loading family tree...</p>;

  return (
    <main style={{ padding: 20 }}>
      <h1>Family Tree</h1>
      <FamilyTree data={data} />
    </main>
  );
}
