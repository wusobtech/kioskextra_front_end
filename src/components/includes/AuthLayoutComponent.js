
import HeaderComponent from "./HeaderComponent";
import NavBarComponent from "./NavBarComponent";

export default function AuthLayoutComponent(props) {
  return (
    <div>
      <HeaderComponent />
      <div className="main-container" id="container">
        <div className="overlay" />
        <div className="search-overlay" />
        <NavBarComponent />
        <div id="content" className="main-content">
          {props.children}
        </div>
      </div>
    </div>
  );
}
