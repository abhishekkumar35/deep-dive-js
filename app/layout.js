import "@styles/globals.css";
import { Inter } from "next/font/google";
import Header from "@components/Header";
import Footer from "@components/Footer";
import SessionProvider from "@components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Header />
            {children}
            <Footer />
          </main>
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
