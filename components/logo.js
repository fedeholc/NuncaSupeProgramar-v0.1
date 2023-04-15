import logo from "./logo.module.css";
import Link from "next/link";
import { siteTitle, siteDescription } from "./layout";

export default function Logo() {
  return (
    <>
      <div className={logo.logo__container}>
        <div className={logo.logo__titulo}><Link href="/">{siteTitle}</Link></div>
        <div className={logo.logo__descripcion}>{siteDescription}{" "}🐈‍⬛</div>
      </div>
    </>
  );
  
}
