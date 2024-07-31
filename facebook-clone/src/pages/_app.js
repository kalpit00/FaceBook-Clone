import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import store from "../public/src/app/store";

function MyApp({ Component, pageProps }) {
  return <SessionProvider session={pageProps.session}></SessionProvider>;
}

export default MyApp;
