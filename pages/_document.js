import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora&family=Karma:wght@100;200;300;400;500;600;700;800&family=Montserrat:wght@400;800&family=Noto+Serif&family=Roboto+Condensed:wght@400;700&family=Roboto+Mono:wght@100;200;300;400;700&family=Roboto+Serif:wght@100;200;300;400&family=Roboto+Slab:wght@100;200;300;400&family=Roboto:wght@400;900&family=Raleway:wght@300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
