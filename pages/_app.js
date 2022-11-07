import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

import { NFTProvider } from "../context/NFTContext";

import { Footer, Navbar } from "../components";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <NFTProvider>
      <ThemeProvider attribute="class">
        <div className="dark:bg-nft-dark bg-white min-h-screen">
          <Navbar />
          <div className="pt-65">
            <Component {...pageProps} />
          </div>
          {/* {router.route === "/info" ? null : <Footer />} */}
          <Footer />
        </div>
        <Script src="https://kit.fontawesome.com/128bf380e5.js" crossorigin="anonymous"></Script>
      </ThemeProvider>
    </NFTProvider>
  );
};

export default MyApp;
