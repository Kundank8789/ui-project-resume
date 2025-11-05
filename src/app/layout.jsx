"use client";
import "./globals.css";
import { ResumeProvider } from "@/context/ResumeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ResumeProvider>
          {children}
        </ResumeProvider>
      </body>
    </html>
  );
}
