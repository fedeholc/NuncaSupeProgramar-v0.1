import Logo from "./logo";
import navbar from "./navbar.module.css";
import { FaGithub, FaLinkedin, FaMail } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function NavBar() {
  return (
    <>
      <div className={navbar.navbar}>
        <Logo></Logo>
        <div className={navbar.navbar__icons}>
          <a href="https://github.com/fedeholc" target="_blank">
            <FaGithub></FaGithub>
          </a>

          <a href="https://www.linkedin.com/in/federicoholc/" target="_blank">
            <FaLinkedin></FaLinkedin>
          </a>

          <a href="mailto:federicoholc@gmail.com">
            <MdEmail></MdEmail>
          </a>
        </div>
      </div>
    </>
  );
}
