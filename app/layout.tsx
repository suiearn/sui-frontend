"use client";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import '@/app/styles/button.scss'
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ToastProvider } from "@/components/toast/ToastContext";
import { Provider } from "react-redux";
import { persistor, store } from "@/lib/redux-store/store";
import { PersistGate } from "redux-persist/integration/react";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

// const metadata: Metadata = {
//   title: "Sui Earn",
//   description: "Earn With Sui",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ToastProvider>
              <Navbar />
              {children}
              <Footer />
            </ToastProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
