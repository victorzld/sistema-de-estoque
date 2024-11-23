import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estoque Plus",
  description: "Gerencie o seu estoque",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning className="bg-slate-100 text-zinc-900">
      <body className={`${inter.className} dark:bg-zinc-900`}>
        <Providers>
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
