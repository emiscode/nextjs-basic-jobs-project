import PageTitle from "../src/components/PageTitle";
import GlobalStyle from "../src/theme/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageTitle>
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PQ80XLL838"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PQ80XLL838');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true.toString()}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bitter&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </PageTitle>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
