import Navigation from "@/components/Navigation/Navigation";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Header from "@/components/DetailsPage/Header/Header";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header/>
            <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
            </SWRConfig>
            <Navigation/>
    </>
  );
}
