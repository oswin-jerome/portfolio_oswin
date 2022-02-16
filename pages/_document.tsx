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
        <Head>
<meta name="title" content="Oswin Jerome"/>
<meta name="description" content="Hey I'm Oswin Jerome, I have 5 years of experience in programing. I'm specialized in Websites, Web Apps, Android Apps and lot more. I'm always eager to learn new technalogies and I have a deep knowledge in latest technalogies and frameworks"/>

<meta property="og:type" content="website"/>
<meta property="og:url" content="https://oswinjerome.in/"/>
<meta property="og:title" content="Oswin Jerome"/>
<meta property="og:description" content="Hey I'm Oswin Jerome, I have 5 years of experience in programing. I'm specialized in Websites, Web Apps, Android Apps and lot more. I'm always eager to learn new technalogies and I have a deep knowledge in latest technalogies and frameworks"/>
<meta property="og:image" content="/logo512.png"/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://oswinjerome.in/"/>
<meta property="twitter:title" content="Oswin Jerome"/>
<meta property="twitter:description" content="Hey I'm Oswin Jerome, I have 5 years of experience in programing. I'm specialized in Websites, Web Apps, Android Apps and lot more. I'm always eager to learn new technalogies and I have a deep knowledge in latest technalogies and frameworks"/>
<meta property="twitter:image" content="/logo512.png"/>
        </Head>
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