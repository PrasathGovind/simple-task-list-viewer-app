import Logo from "../assets/logo.png"
import "./Header.css";

export const Header = () => {
  return (
    <header>
        <img src={Logo} alt="" />
        <div className="appName">TODO Task Manager 2025</div>
        <a href="/">Home</a>
    </header>
  )
}
