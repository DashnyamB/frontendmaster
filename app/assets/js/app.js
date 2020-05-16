import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";

let mobileMenu = new MobileMenu();

// webpack - ыг watch хийж байгаа
if ((module, hot)) {
  module.hot.accept();
}
