import { ReactNode } from "react";
import "./global.css";
import Head from "next/head";
import Script from "next/script";

const AppLayout = ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <html lang="en" className="bg-light-accentLight dark:bg-dark-background ">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-P7E8PSHLW0" strategy="afterInteractive"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`  window.dataLayer = window.dataLayer || [];
  function gtag(){
  dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());

  gtag('config', 'G-P7E8PSHLW0');`}
      </Script>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="canonical" href="https://www.oswinjerome.in" />
      </Head>
      <body>
        {children}
        <footer className="mt-12 h-20 bg-accent">
          <p className="text-center pt-3 opacity-100">
            <span className="opacity-40"> Too lazy to design a footer </span>
            <span>👀</span>
          </p>
          <p className="text-center pt-3 opacity-40 text-sm">© oswinjerome.in, 2021</p>
        </footer>
      </body>
    </html>
  );
};

export default AppLayout;
