import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";
import NavBar from "./navbar";

export const siteTitle = "<NuncaSupeProgramar/>";
export const siteDescription = "Blog de apuntes para aprender desarrollo web";

export default function Layout({ children, home }) {
  return (
    <div className="layout__wrapper">
      <div className="layout__container">
        <Head>
          TODO: cambiar favicon
          <link rel="icon" href="/fedeico.jpeg" />
          <meta
            name="description"
            content="Blog de apuntes para aprender a programar"
          />
          TODO: ¿cómo poner mi propia imagen?
          {/*  <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          /> */}
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className="">
          <NavBar></NavBar>
        </header>
        <main>
          {children}
          {!home && (
            <div className="volver">
              <Link href="/">← Volver a la página principal</Link>
            </div>
          )}
        </main>

        <footer>Federico Holc ⚡️ 2023</footer>
      </div>
    </div>
  );
}
