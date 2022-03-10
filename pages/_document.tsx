import Document, { Html, Head, Main, NextScript } from 'next/document'
import NavBar from '../components/navBar';

class MyDocument extends Document {
  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="bg-light-accentLight dark:bg-dark-background ">
        <Head/>
        <body>
            {/* <NavBar/> */}
          <Main />
          <NextScript />
          <footer className="mt-12 h-20 bg-accent">

          </footer>
        </body>
      </Html>
    )
  }
}

export default MyDocument;