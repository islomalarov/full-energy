import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import { TestBanner } from '@/components/ui/test-banner';
import Header from '@/components/layout/Header';
import { ScrollProgress } from '@/components/ui/scroll-progress';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Full Energy',
  description: 'Quyosh panellari bilan kelajagingizni yoriting',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <ScrollProgress />
          <TestBanner />
          <Header />
          <main className="min-h-screen flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
