import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Toaster } from "react-hot-toast";
import Header from "@/components/layout/Header";
import Footer from '@/components/layout/Footer';
import { JsonContextProvider } from "@/context/JsonContext";
import "@/styles/globals.scss";
import { Poppins, Montserrat } from 'next/font/google';
import '@fancyapps/ui/dist/fancybox/fancybox.css'

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
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="Zepyur - Your gateway to luxury living in Armenia. Explore our exclusive real estate offerings, from stunning apartments to luxurious villas. Discover your dream home today!" />
          <meta name="keywords" content="Zepyur, real estate, luxury apartments, villas, Armenia, luxury living, exclusive properties, dream home" />
          <meta name="author" content="Zepyur" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="/favicon.ico" />
          <title>Zepyur - Residential Area in Armenia</title>
        </head>
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