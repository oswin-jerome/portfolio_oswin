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
        <Head />
        <body>
            <NavBar/>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;