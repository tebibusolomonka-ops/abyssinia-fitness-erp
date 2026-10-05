import "./globals.css";

export const metadata = {
  title: "Abyssinia Fitness ERP",
  description: "Premium gym operations, membership, payments and reporting dashboard.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}

