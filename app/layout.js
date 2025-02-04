import "./globals.css";
import Provider from "./Provider";

export const metadata = {
  title: "CLERK-SIGN IN REDIRECT TEST",
  description: "Clerk Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
