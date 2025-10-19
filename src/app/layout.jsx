import "./globals.css"; // relative import in the same folder


export const metadata = {
  title: "Resume Builder — Prototype",
  description: "Next-generation Resume Builder with PDF export",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
