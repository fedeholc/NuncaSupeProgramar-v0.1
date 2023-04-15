import logo from "./logo.module.css";
 
import { siteTitle, siteDescription } from "./layout";

export default function Logo() {
  return (
    <>
      <div className={logo.logo__container}>
        <div className={logo.logo__titulo}>{siteTitle}</div>
        <div className={logo.logo__descripcion}>{siteDescription}</div>
      </div>
    </>
  );
  
}
