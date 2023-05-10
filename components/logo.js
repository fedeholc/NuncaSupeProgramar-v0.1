import logo from "./logo.module.css";
import Link from "next/link";
import { siteTitle, siteDescription } from "./layout";

export default function Logo() {
  return (
    <>
      <div className={logo.logo__container}>
        <div className={logo.logo__titulo}>
          <Link href="/">
            <span className={logo.logo__colorRosa}>{"<"}</span>
            NuncaSupeProgramar
            <span className={logo.logo__colorCeleste}>{"/"}</span>
            <span className={logo.logo__colorRosa}>{">"}</span>
          </Link>
        </div>
        <div className={logo.logo__descripcion}>{siteDescription} 👾</div>
      </div>
    </>
  );
  
}
