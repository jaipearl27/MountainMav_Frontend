import Footer from "@/components/Footer";
import "./globals.css";


export const metadata = {
  title: "Mountain Mavericks",
  description: "Mountain mavericks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
