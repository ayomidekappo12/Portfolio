import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/config/theme-provider";
import App from "@/components/layouts/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Employ Booster: Land dollar jobs",
  description: "In progress...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <script
          id="cloudinary"
          src="https://widget.cloudinary.com/v2.0/global/all.js"
          defer
        />
      </head>

      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={`${inter.className} `}>
          <App>{children}</App>
        </body>
      </ThemeProvider>
    </html>
  );
}
