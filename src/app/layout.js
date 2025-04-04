import "@/styles/globals.scss";

export const metadata = {
  title: "Travel Website",
  description: "Explore amazing travel destinations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
