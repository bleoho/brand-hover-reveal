import localFont from "next/font/local";
import "./globals.css";

const gtAmericaMono = localFont({
  src: "./fonts/GT-America-Mono-Regular.woff2",
  weight: "400",
  display: "swap",
});

const roslindale = localFont({
  src: "./fonts/Roslindale-TextRegular.woff",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Image Hover Reveal by Lee Holmes @bleoho",
  description: "Image Hover Reveal by Lee Holmes @bleoho",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gtAmericaMono.className} ${roslindale.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
