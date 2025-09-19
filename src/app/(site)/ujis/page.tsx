import FamilyTree from "@/components/FamilyTree";
import Header from "@/components/Header";

export default function Page() {
  return (
    <main>
      <Header />
      <div className="f3" style={{ width: "100%", height: "90vh" }}>
      <FamilyTree />
      </div>
    </main>
  );
}
