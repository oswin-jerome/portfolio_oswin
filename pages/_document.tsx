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
        <Head />
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
