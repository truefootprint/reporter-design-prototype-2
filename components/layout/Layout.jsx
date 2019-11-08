import Head from "next/head";
import css from "./styles.scss";

import "./reset.scss";

const Layout = ({ children }) => <>
  <Head>
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
