import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // ← add this
import Footer from "@/components/Footer";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faUser, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false; // prevents double CSS injection
library.add(faUser, faGraduationCap);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {children}
        <Footer />
      </body>
    </html>
  );
}
