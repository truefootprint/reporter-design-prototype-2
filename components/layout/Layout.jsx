import Head from "next/head";

import "./reset.scss";
import css from "./styles.scss";

const Layout = ({ children }) => <>
  <Head>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&display=swap" rel="stylesheet" />

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  </Head>

  <div className={css.layout}>
    {children}
  </div>
</>;

export default Layout;
