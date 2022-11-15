import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/navBar";
import Kursor from "kursor";
import AnimatedCursor from "react-animated-cursor";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {}, []);
  const Map: any = dynamic(
    () => import("react-animated-cursor"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  );
  return (
    <div>
      <Map
        // color="225,170,143"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0.2}
        hasBlendMode={true}
        outerStyle={{
          border: "1px solid #E1AA8F",
        }}
        innerStyle={{
          backgroundColor: " #E1AA8F",
        }}
      />

      <NavBar />
      <Component {...pageProps} />

      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DQNW5E1C1P" strategy="lazyOnload"></Script>
      <Script id="ga" strategy="lazyOnload">
        {`  window.dataLayer = window.dataLayer || [];
  function gtag(){
  dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-DQNW5E1C1P');`}
      </Script>
    </div>
  );
}

export default MyApp;
