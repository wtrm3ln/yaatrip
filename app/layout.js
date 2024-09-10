import localFont from "next/font/local";
import "./globals.css";



export const metadata = {
  title: "Yaatrip",
  description: "Share your travel tales and book your next adventure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
