import Document, { Html, Head, Main, NextScript } from "next/document";
import NavBar from "../components/navBar";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="bg-light-accentLight dark:bg-dark-background ">
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
          {/* <NavBar/> */}
          <Main />
          <NextScript />
          <footer className="mt-12 h-20 bg-accent">
            <p className="text-center pt-3 opacity-100">
              <span className="opacity-40"> Too lazy to design a footer </span>
              <span>👀</span>
            </p>
            <p className="text-center pt-3 opacity-40 text-sm">© oswinjerome.in, 2021</p>
          </footer>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
