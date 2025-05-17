import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Toaster } from "react-hot-toast";
import Header from "@/components/layout/Header";
import Footer from '@/components/layout/Footer';
import { JsonContextProvider } from "@/context/JsonContext";
import "@/styles/globals.scss";
import { Poppins, Montserrat } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'], 
  weight: ['400', '600', '700'], 
  style: ['normal', 'italic'], 
  display: 'swap', 
});

const montserrat = Montserrat({
  subsets: ['latin',],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});
export { montserrat };

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <JsonContextProvider>
      <html lang={locale}>
        <body className={poppins.className}>
          <NextIntlClientProvider>
            <Toaster containerStyle={{ zIndex: 9999 }} position="bottom-right" />
            <Header />
            <div className="flex-1 main-wrapper">{children}</div>
            <Footer />
          </NextIntlClientProvider>
        </body>
      </html>
    </JsonContextProvider>
  )
}