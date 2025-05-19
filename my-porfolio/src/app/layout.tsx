import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
          <Header />
          <main className="max-w-[1440px] mx-auto w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}