import DatabaseProvider from "../context/dbContext";
import UserProvider from "../context/userContext";
import { StoreProvider } from "../context/Store";
import Head from "next/head";
import Router from "next/router";
import ReactDOM from "react-dom";

import PageChange from "/components/Mui/PageChange/PageChange.js";

import "/styles/scss/nextjs-material-kit.scss?v=1.2.0";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

// Custom App to wrap it with context provider
// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Horeca uitzendbedrijf waarbij kwaliteit voorop staat. Gespecialiseerd in barwerk, kroegen, bediening en keuken. Ideaal wanneer je een barman of ander personeel nodig hebt" />
          <meta property="og:title" content="Regel hier jouw horeca-medewerker" />
          <meta property="og:url" content="https://veldhuijzenhospitality.com" />
          <meta property="og:image" content="https://veldhuijzenhospitality.com/VHF.jpg" />
          <meta property="og:type" content="website"/>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoreProvider>
        <UserProvider>
          <DatabaseProvider>
            <Component {...pageProps} />
          </DatabaseProvider>
        </UserProvider>
      </StoreProvider>

    </>
  );
}
