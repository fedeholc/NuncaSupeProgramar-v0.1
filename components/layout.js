import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";

const name = "<NuncaSupeProgramar/>";
export const siteTitle = "<NuncaSupeProgramar/>";

export default function Layout({ children, home }) {
  return (
    <div className="">
      <Head>
        TODO: cambiar favicon
        {/* <link rel="icon" href="/favicon.ico" /> */}
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
        {home ? (
          <>
            <h1 className="">{name}</h1>
          </>
        ) : (
          <>
            <h2>
              <Link href="/">{name}</Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
