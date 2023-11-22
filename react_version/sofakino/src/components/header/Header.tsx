import './Header.css';
import skdLogo from "../../assets/skd_logo.png";

export default function Header() {
  return (
    <div className="headline col-main row-nav">
      <img className="logo" alt="Logo Sofa Kino Darmstadt" src={skdLogo}></img>
      <h2 className="date">Screening: Sunday, 26.08.2023</h2>
      <button>Login</button>
    </div>
  );
}