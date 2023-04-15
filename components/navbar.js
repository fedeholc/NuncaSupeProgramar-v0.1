import Logo from "./logo";
import navbar from "./navbar.module.css"

export default function NavBar() {
  return (
    <>
      <div className={navbar.navbar}>
        <Logo></Logo>
      </div>
       
    </>
  );
}
