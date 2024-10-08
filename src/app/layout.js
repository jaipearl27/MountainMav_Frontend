import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
// import DelayedLayout from "@/components/DelayedLayout";

export const metadata = {
  title: "Mountain Mavericks",
  description: "Mountain mavericks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
          {children}
        {/* <DelayedLayout delay={0}>

        </DelayedLayout> */}
        <Footer />
      </body>
    </html>
  );
}
