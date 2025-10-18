// IMPORTS
import "./globals.css";

// META DATA
export const metadata = {
  title: "IEEE Vending Machine",
  description: "Sales Frontend for IEEE's Vending Machine",
};

// LAYOUT
export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
            {children}
        </body>
    </html>
  );
}
